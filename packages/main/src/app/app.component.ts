import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initAutoTheme, defaults } from './config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'TouchStone';

  ngOnInit() {
    initAutoTheme(defaults.forceDark);
  }
}
