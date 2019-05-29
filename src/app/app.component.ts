import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FadeInAnimation} from './animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[FadeInAnimation]
})
export class AppComponent {
  title = 'zodiac-app';
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
