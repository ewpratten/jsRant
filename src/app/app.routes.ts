import {provideRouter, RouterConfig}  from '@angular/router';
import {JsonFeedComponent} from './json-feed/json-feed.component';

const routes:RouterConfig = [
  {
    path: '',
    component: JsonFeedComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
