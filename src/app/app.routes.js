"use strict";
var router_1 = require('@angular/router');
var json_feed_component_1 = require("./json-feed.component");
var routes = [
    {
        path: '',
        redirectTo: '/js',
        pathMatch: 'full'
    },
    {
        path: 'js',
        component: json_feed_component_1.JsonFeedComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map