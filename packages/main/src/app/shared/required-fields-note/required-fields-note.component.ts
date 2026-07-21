import { Component } from '@angular/core';

@Component({
  selector: 'app-required-fields-note',
  standalone: true,
  template: `<p class="required-fields-note" aria-hidden="true">* These fields are required.</p>`,
  styles: [`
    .required-fields-note {
      color: #94a3b8;
      font-size: 13px;
      font-weight: 400;
      line-height: 1.5;
      text-align: center;
      margin-top: 16px;
      margin-bottom: 0;
    }
  `]
})
export class RequiredFieldsNoteComponent {}
