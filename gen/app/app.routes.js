"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./views/login.component');
var mainMenu_component_1 = require('./views/mainMenu.component');
var denomination_component_1 = require('./views/denomination.component');
exports.routes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'mainMenu',
        component: mainMenu_component_1.MainMenuComponent
    },
    {
        path: 'denomination',
        component: denomination_component_1.DenominationComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map