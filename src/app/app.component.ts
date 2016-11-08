import { Component } from '@angular/core';
import {DevRantService} from './dev-rant.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [DevRantService]
})
export class AppComponent {
}
