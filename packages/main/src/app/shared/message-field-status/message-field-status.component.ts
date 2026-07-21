import { Component, HostBinding, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { countMeaningfulCharacters } from '../utils/meaningful-characters.util';

/**
 * Single validation message for "Message" style textareas, paired with
 * `minimumMeaningfulCharacters()`. No character counter and no success
 * message — renders nothing at all once the field is valid. Plain getters
 * (no OnPush/subscriptions) so it updates on every change-detection pass
 * exactly like the codebase's existing `control.touched && control.hasError(...)`
 * template checks — including the touched-but-unchanged case right after a
 * submit-time `markAllAsTouched()`.
 *
 * The host always owns the full "field -> Turnstile" gap itself (so callers
 * don't need their own per-field spacing rules): 16px on both sides when
 * there's nothing to show (equal top/bottom so it's correct whether the host
 * layout is normal block flow, where adjoining margins on an empty element
 * collapse through to a single 16px gap, or a flex container, where margins
 * never collapse and each side needs its own explicit value), or 6px above /
 * 12px below when a validation message is showing. Forms whose layout adds
 * its own ambient spacing between fields (flex `gap`, a blanket
 * `margin-bottom` rule, etc.) need a small local override so it isn't
 * doubled up — see popupwindow.component.scss for the one case that needs it.
 *
 * Usage: <app-message-field-status [control]="f['message']" [min]="20"></app-message-field-status>
 */
@Component({
  selector: 'app-message-field-status',
  standalone: true,
  template: `
    @if (message) {
      <p class="message-field-status" role="alert">{{ message }}</p>
    }
  `,
  styles: [`
    :host {
      display: block;
      margin-top: 16px;
      margin-bottom: 16px;
    }
    :host(.has-message) {
      margin-top: 6px;
      margin-bottom: 12px;
    }
    .message-field-status {
      font-size: 12px;
      font-weight: 500;
      line-height: 1.5;
      margin: 0;
      color: #dc3545;
    }
  `],
})
export class MessageFieldStatusComponent {
  @Input({ required: true }) control!: AbstractControl;
  @Input() min = 20;

  @HostBinding('class.has-message')
  get hasMessage(): boolean {
    return !!this.message;
  }

  get message(): string | null {
    const interacted = this.control.dirty || this.control.touched;
    if (!interacted) {
      return null;
    }
    const count = countMeaningfulCharacters(this.control.value);
    if (count === 0) {
      return 'Message is required.';
    }
    if (count < this.min) {
      return `Please enter at least ${this.min} characters.`;
    }
    return null;
  }
}
