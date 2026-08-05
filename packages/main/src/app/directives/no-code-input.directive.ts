import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

/**
 * Prevents HTML/JS "code-like" input in text fields by stripping tags and blocking angle brackets.
 * NOTE: This is a UI hardening measure; server-side validation should still be enforced.
 */
@Directive({
  selector:
    'input[formControlName], textarea[formControlName], input[formControl], textarea[formControl], input[ngModel], textarea[ngModel]',
  standalone: true,
})
export class NoCodeInputDirective {
  private composing = false;
  private readonly ngControl = inject(NgControl, { optional: true });

  constructor(
    private readonly elementRef: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  ) {}

  @HostListener('compositionstart')
  onCompositionStart(): void {
    this.composing = true;
  }

  @HostListener('compositionend')
  onCompositionEnd(): void {
    this.composing = false;
    this.sanitizeAndSync();
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: Event): void {
    if (this.isPasswordField()) return;

    const keyboardEvent = event as KeyboardEvent;
    if (keyboardEvent.key === '<' || keyboardEvent.key === '>') {
      keyboardEvent.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: Event): void {
    if (this.isPasswordField()) return;

    const clipboardEvent = event as ClipboardEvent;
    const pasteText = clipboardEvent.clipboardData?.getData('text') ?? '';
    if (!pasteText) return;

    const sanitized = this.sanitizeValue(pasteText);

    // If nothing changes, allow the browser default paste.
    if (sanitized === pasteText) return;

    clipboardEvent.preventDefault();

    const el = this.elementRef.nativeElement;
    const start = el.selectionStart ?? el.value.length;
    const end = el.selectionEnd ?? el.value.length;

    const nextValue = el.value.slice(0, start) + sanitized + el.value.slice(end);
    this.writeValue(nextValue);

    // Restore cursor
    const nextCursor = start + sanitized.length;
    try {
      el.setSelectionRange(nextCursor, nextCursor);
    } catch {
      // ignore (some input types don't support selection)
    }
  }

  @HostListener('input')
  onInput(): void {
    if (this.composing) return;
    this.sanitizeAndSync();
  }

  private sanitizeAndSync(): void {
    if (this.isPasswordField()) return;

    const el = this.elementRef.nativeElement;
    const current = el.value;
    const sanitized = this.sanitizeValue(current);
    if (sanitized === current) return;

    this.writeValue(sanitized);
  }

  // Password values are treated as plain strings — no HTML/XSS hardening is
  // applied so any character (including < and >) can be used in a password.
  // Password-specific rules (no whitespace, complexity) are enforced by the
  // dedicated password validators/handlers instead.
  // `type` is checked via the IDL property (not getAttribute) because the
  // show/hide toggle flips it between 'password' and 'text' at runtime;
  // `autocomplete` catches it in the 'text' (visible) state too.
  private isPasswordField(): boolean {
    const el = this.elementRef.nativeElement;
    if ('type' in el && el.type?.toLowerCase() === 'password') return true;
    const autocomplete = el.getAttribute('autocomplete')?.toLowerCase() ?? '';
    return autocomplete.includes('password');
  }

  private writeValue(value: string): void {
    const el = this.elementRef.nativeElement;
    el.value = value;

    const control = this.ngControl?.control;
    if (!control) return;

    // Only sync string values; avoid interfering with non-string controls.
    const currentControlValue = control.value;
    if (typeof currentControlValue === 'string' && currentControlValue === value) return;

    control.setValue(value);
    control.markAsDirty();
  }

  private sanitizeValue(value: string): string {
    let out = value;

    // Strip HTML tags (basic XSS hardening for inputs).
    out = out.replace(/<[^>]*>/g, '');

    // Block remaining angle brackets.
    out = out.replace(/[<>]/g, '');

    // Remove javascript/data-html prefixes if someone tries to paste them.
    out = out.replace(/^\s*javascript\s*:/i, '');
    out = out.replace(/^\s*data\s*:\s*text\s*\/\s*html\s*[,;]/i, '');
    out = out.replace(/^\s*data\s*:\s*text\s*\/\s*javascript\s*[,;]/i, '');

    // Remove backticks (common in JS snippets / template injections).
    out = out.replace(/`/g, '');

    return out;
  }
}
