"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./views/login.component');
var mainMenu_component_1 = require('./views/mainMenu.component');
var denomination_component_1 = require('./views/denomination.component');
var transactionView_component_1 = require('./views/transactionView.component');
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
        path: 'transactionView',
        component: transactionView_component_1.TransactionViewComponent
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