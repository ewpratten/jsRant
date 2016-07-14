import {provideRouter, RouterConfig}  from '@angular/router';
import {JsonFeedComponent} from "./json-feed/json-feed.component";

const routes:RouterConfig = [
  {
    path: '',
    redirectTo: '/js',
    pathMatch: 'full'
  },
  {
    path: 'js',
    component: JsonFeedComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
