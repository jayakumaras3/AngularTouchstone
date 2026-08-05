import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

/**
 * Global safety net to prevent HTML/JS-like "code" input in plain text inputs.
 * This covers templates that don't import shared modules/directives.
 *
 * NOTE: This is UI-side hardening only. Keep server-side validation.
 */
@Injectable({ providedIn: 'root' })
export class NoCodeInputGuardService {
  private readonly document = inject(DOCUMENT);

  private started = false;

  start(): void {
    if (this.started) return;
    this.started = true;

    // Capture phase so we run before most handlers.
    this.document.addEventListener('keydown', this.onKeydown, true);
    this.document.addEventListener('paste', this.onPaste, true);
    this.document.addEventListener('input', this.onInput, true);
  }

  private readonly onKeydown = (event: Event): void => {
    const keyboardEvent = event as KeyboardEvent;
    const target = keyboardEvent.target;

    if (!this.isTextTarget(target)) return;

    if (keyboardEvent.key === '<' || keyboardEvent.key === '>') {
      keyboardEvent.preventDefault();
    }
  };

  private readonly onPaste = (event: Event): void => {
    const clipboardEvent = event as ClipboardEvent;
    const target = clipboardEvent.target;

    if (!this.isTextTarget(target)) return;

    const pasteText = clipboardEvent.clipboardData?.getData('text') ?? '';
    if (!pasteText) return;

    const sanitized = this.sanitizeValue(pasteText);
    if (sanitized === pasteText) return;

    clipboardEvent.preventDefault();

    const el = target as HTMLInputElement | HTMLTextAreaElement;
    const start = el.selectionStart ?? el.value.length;
    const end = el.selectionEnd ?? el.value.length;
    const nextValue = el.value.slice(0, start) + sanitized + el.value.slice(end);

    el.value = nextValue;

    const nextCursor = start + sanitized.length;
    try {
      el.setSelectionRange(nextCursor, nextCursor);
    } catch {
      // ignore
    }

    // Let Angular pick up value changes.
    el.dispatchEvent(new Event('input', { bubbles: true }));
  };

  private readonly onInput = (event: Event): void => {
    const target = event.target;
    if (!this.isTextTarget(target)) return;

    const el = target as HTMLInputElement | HTMLTextAreaElement;
    const current = el.value;
    const sanitized = this.sanitizeValue(current);
    if (sanitized === current) return;

    el.value = sanitized;
    el.dispatchEvent(new Event('input', { bubbles: true }));
  };

  private isTextTarget(target: EventTarget | null): target is HTMLInputElement | HTMLTextAreaElement {
    if (!target) return false;

    if (target instanceof this.document.defaultView!.HTMLTextAreaElement) return true;

    if (!(target instanceof this.document.defaultView!.HTMLInputElement)) return false;

    // Only guard text-like input types.
    const type = (target.type || target.getAttribute('type') || 'text').toLowerCase();
    if (['number', 'date', 'datetime-local', 'time', 'month', 'week', 'color', 'file', 'range'].includes(type)) {
      return false;
    }

    // Password values are treated as plain strings — no HTML/XSS hardening is
    // applied so any character (including < and >) can be used in a password.
    // Checked via the `type` IDL property (not just the attribute) because
    // show/hide toggles flip it between 'password' and 'text' at runtime;
    // `autocomplete` catches it in the 'text' (visible) state too.
    const autocomplete = (target.getAttribute('autocomplete') ?? '').toLowerCase();
    if (type === 'password' || autocomplete.includes('password')) {
      return false;
    }

    return true;
  }

  private sanitizeValue(value: string): string {
    let out = value;

    out = out.replace(/<[^>]*>/g, '');
    out = out.replace(/[<>]/g, '');

    out = out.replace(/^\s*javascript\s*:/i, '');
    out = out.replace(/^\s*data\s*:\s*text\s*\/\s*html\s*[,;]/i, '');
    out = out.replace(/^\s*data\s*:\s*text\s*\/\s*javascript\s*[,;]/i, '');

    out = out.replace(/`/g, '');

    return out;
  }
}
