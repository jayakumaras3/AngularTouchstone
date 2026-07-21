import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { countMeaningfulCharacters } from '../utils/meaningful-characters.util';

type MessageFieldState = 'idle' | 'empty' | 'short' | 'valid';

/**
 * Live helper text + character counter for "Message" style textareas, paired
 * with `minimumMeaningfulCharacters()`. Reads the same meaningful-character
 * count the validator uses so the copy on screen always matches what's
 * actually valid. Plain getters (no OnPush/subscriptions) so it updates on
 * every change-detection pass exactly like the codebase's existing
 * `control.touched && control.hasError(...)` template checks — including the
 * touched-but-unchanged case right after a submit-time `markAllAsTouched()`.
 *
 * Usage: <app-message-field-status [control]="f['message']" [min]="20"></app-message-field-status>
 */
@Component({
  selector: 'app-message-field-status',
  standalone: true,
  template: `
    @switch (state) {
      @case ('idle') {
        <p class="message-field-status message-field-status--hint">Minimum {{ min }} characters required.</p>
      }
      @case ('empty') {
        <p class="message-field-status message-field-status--error" role="alert">Message is required.</p>
      }
      @case ('short') {
        <p class="message-field-status message-field-status--error">{{ count }} / {{ min }} minimum characters</p>
        <p class="message-field-status message-field-status--error" role="alert">
          Please enter at least {{ min }} characters.
        </p>
      }
      @case ('valid') {
        <p class="message-field-status message-field-status--valid" role="status" aria-live="polite">
          {{ count === min ? min + ' / ' + min + ' minimum reached' : count + ' characters entered' }} &#10003;
        </p>
        <p class="message-field-status message-field-status--valid">&#10003; Minimum character requirement met.</p>
      }
    }
  `,
  styles: [`
    :host {
      display: block;
    }
    .message-field-status {
      font-size: 12px;
      font-weight: 500;
      line-height: 1.5;
      margin: 4px 0 0;
    }
    .message-field-status:first-child {
      /* The 8px gap between the textarea and this component is owned by
         each host form's own layout (flex gap / margin), since it varies by
         context — this component only owns the gap *between* its own lines. */
      margin-top: 0;
    }
    .message-field-status--hint {
      color: #94a3b8;
    }
    .message-field-status--error {
      color: #dc3545;
    }
    .message-field-status--valid {
      color: #198754;
    }
  `],
})
export class MessageFieldStatusComponent {
  @Input({ required: true }) control!: AbstractControl;
  @Input() min = 20;

  get count(): number {
    return countMeaningfulCharacters(this.control.value);
  }

  get state(): MessageFieldState {
    const count = this.count;
    const interacted = this.control.dirty || this.control.touched;
    if (!interacted && count === 0) {
      return 'idle';
    }
    if (count === 0) {
      return 'empty';
    }
    if (count < this.min) {
      return 'short';
    }
    return 'valid';
  }
}
