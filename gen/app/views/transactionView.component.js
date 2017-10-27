//
// Created by IFML2NG2 on 2017/10/27 13:09:52
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
var transactionList_pipe_1 = require('../helper/pipes/transactionList.pipe');
// Service Imports
var logger_service_1 = require('../services/logger.service');
var authentication_service_1 = require('../services/authentication.service');
var data_service_1 = require('../services/data.service');
var displayProperties_service_1 = require('../services/displayProperties.service');
var resource_service_1 = require('../services/resource.service');
var TransactionViewComponent = (function () {
    // PROTECTED REGION ID _kZgfALTcEeeUzbyM6lB9Aw.transactionView ENABLED START
    // PROTECTED REGION END
    function TransactionViewComponent(_router, _route, _loggerService, _authenticationService, _dataService, _displayPropertiesService, _resourceService) {
        this._router = _router;
        this._route = _route;
        this._loggerService = _loggerService;
        this._authenticationService = _authenticationService;
        this._dataService = _dataService;
        this._displayPropertiesService = _displayPropertiesService;
        this._resourceService = _resourceService;
        // fill advanced search space
        this.advancedSearchSpace = [
            { key: "associatedWith.accountID", title: "associatedWith.accountID" },
            { key: "associatedWith.balance", title: "associatedWith.balance" },
            { key: "associatedWith.ownedBy.clientID", title: "associatedWith.ownedBy.clientID" },
            { key: "associatedWith.ownedBy.firstname", title: "associatedWith.ownedBy.firstname" },
            { key: "associatedWith.ownedBy.lastname", title: "associatedWith.ownedBy.lastname" },
            { key: "totalAmount", title: "totalAmount" }
        ];
    }
    // stubs generated for view element events
    // stubs for data service calls for data bindings
    TransactionViewComponent.prototype.getTransactionBinding = function () {
        // PROTECTED REGION ID _DwoS4LTdEeeUzbyM6lB9Aw.getTransactionBinding ENABLED START
        this.transactionBinding = this._dataService.getTransactionsByClientId(localStorage.getItem('clientID'));
        // PROTECTED REGION END
    };
    TransactionViewComponent.prototype.onSelect = function (el) {
        if (this.selectedTransactionBinding === el) {
            this.selectedTransactionBinding = undefined;
            this.isSelectedTransactionBinding = false;
        }
        else {
            this.selectedTransactionBinding = el;
            this.isSelectedTransactionBinding = true;
        }
    };
    // called when search filter is updated
    TransactionViewComponent.prototype.filterUpdated = function (val) {
        this.filterBy = JSON.stringify(val);
    };
    // called when component is initiated			
    TransactionViewComponent.prototype.ngOnInit = function () {
        // Check authentication requirements, if empty, no authentication requirements for this component
        // Call methods for filling data binding
        this.getTransactionBinding();
        // PROTECTED REGION ID _kZgfALTcEeeUzbyM6lB9Aw.ngOnInit ENABLED START
        // PROTECTED REGION END
    };
    TransactionViewComponent = __decorate([
        core_1.Component({
            selector: 'transactionView',
            templateUrl: 'app/views/transactionView.component.html',
            providers: [logger_service_1.LoggerService, displayProperties_service_1.DisplayPropertiesService, authentication_service_1.AuthenticationService, data_service_1.DataService],
            directives: [common_1.NgClass, search_component_1.SearchComponent],
            pipes: [transactionList_pipe_1.TransactionListFilter,]
        }), 
        __metadata('design:paramtypes', [router_2.Router, router_1.ActivatedRoute, logger_service_1.LoggerService, authentication_service_1.AuthenticationService, data_service_1.DataService, displayProperties_service_1.DisplayPropertiesService, resource_service_1.ResourceService])
    ], TransactionViewComponent);
    return TransactionViewComponent;
}());
exports.TransactionViewComponent = TransactionViewComponent;
//# sourceMappingURL=transactionView.component.js.map