import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'petronas-pwa';

  constructor(ngsw: SwUpdate) {
    ngsw.available.subscribe((update) => location.reload());
  }
}
