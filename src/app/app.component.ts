import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {DevRantService} from "./dev-rant.service";
import {HTTP_PROVIDERS} from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [DevRantService, HTTP_PROVIDERS]
})
export class AppComponent {
}
