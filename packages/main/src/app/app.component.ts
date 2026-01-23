import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initAutoTheme, defaults } from './config';
import { NoCodeInputGuardService } from './services/no-code-input-guard.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'TouchStone';

  constructor(private readonly noCodeGuard: NoCodeInputGuardService) {}

  ngOnInit() {
    initAutoTheme(defaults.forceDark);
    this.noCodeGuard.start();
  }
}
