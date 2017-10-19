//
// Created by IFML2NG2 on 2017/10/19 16:35:06
//
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular Imports
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var common_1 = require('@angular/common');
// Search Component Imports
var search_component_1 = require('../dynamic/search.component');
var accountList_pipe_1 = require('../helper/pipes/accountList.pipe');
// Service Imports
var logger_service_1 = require('../services/logger.service');
var authentication_service_1 = require('../services/authentication.service');
var data_service_1 = require('../services/data.service');
var displayProperties_service_1 = require('../services/displayProperties.service');
var resource_service_1 = require('../services/resource.service');
var MainMenuComponent = (function () {
    // PROTECTED REGION ID _S15wQJxwEee_2OeSSzYyRQ.mainMenu ENABLED START
    // PROTECTED REGION END
    function MainMenuComponent(_router, _route, _loggerService, _authenticationService, _dataService, _displayPropertiesService, _resourceService) {
        this._router = _router;
        this._route = _route;
        this._loggerService = _loggerService;
        this._authenticationService = _authenticationService;
        this._dataService = _dataService;
        this._displayPropertiesService = _displayPropertiesService;
        this._resourceService = _resourceService;
        // fill advanced search space
        this.advancedSearchSpace = [
            { key: "balance", title: "accountStatus" },
            { key: "accountID", title: "accoundID" }
        ];
    }
    // stubs generated for view element events
    MainMenuComponent.prototype.selectAccount = function () {
        this._router.navigate(['/denomination']);
    };
    // stubs for data service calls for data bindings
    MainMenuComponent.prototype.getAccountBinding = function () {
        // PROTECTED REGION ID _rFDacJ9mEeeQDN6CvfzAfw.getAccountBinding ENABLED START
        var client = this._dataService.getClientById(localStorage.getItem('clientID'));
        this.accountBinding = this._dataService.getAccountsByClientId(client.clientID);
        // PROTECTED REGION END
    };
    MainMenuComponent.prototype.onSelect = function (el) {
        if (this.selectedAccountBinding === el) {
            this.selectedAccountBinding = undefined;
            this.isSelectedAccountBinding = false;
        }
        else {
            this.selectedAccountBinding = el;
            this.isSelectedAccountBinding = true;
        }
    };
    // called when search filter is updated
    MainMenuComponent.prototype.filterUpdated = function (val) {
        this.filterBy = JSON.stringify(val);
    };
    // called when component is initiated			
    MainMenuComponent.prototype.ngOnInit = function () {
        // Check authentication requirements, if empty, no authentication requirements for this component
        // Call methods for filling data binding
        this.getAccountBinding();
        // PROTECTED REGION ID _S15wQJxwEee_2OeSSzYyRQ.ngOnInit ENABLED START
        // PROTECTED REGION END
    };
    MainMenuComponent = __decorate([
        core_1.Component({
            selector: 'mainMenu',
            templateUrl: 'app/views/mainMenu.component.html',
            providers: [logger_service_1.LoggerService, displayProperties_service_1.DisplayPropertiesService, authentication_service_1.AuthenticationService, data_service_1.DataService],
            directives: [common_1.NgClass, search_component_1.SearchComponent],
            pipes: [accountList_pipe_1.AccountListFilter,]
        }), 
        __metadata('design:paramtypes', [router_2.Router, router_1.ActivatedRoute, logger_service_1.LoggerService, authentication_service_1.AuthenticationService, data_service_1.DataService, displayProperties_service_1.DisplayPropertiesService, resource_service_1.ResourceService])
    ], MainMenuComponent);
    return MainMenuComponent;
}());
exports.MainMenuComponent = MainMenuComponent;
//# sourceMappingURL=mainMenu.component.js.map