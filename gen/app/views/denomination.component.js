//
// Created by IFML2NG2 on 2017/10/27 15:31:15
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
// Service Imports
var logger_service_1 = require('../services/logger.service');
var authentication_service_1 = require('../services/authentication.service');
var data_service_1 = require('../services/data.service');
var displayProperties_service_1 = require('../services/displayProperties.service');
var resource_service_1 = require('../services/resource.service');
// domain concept imports
var DenominationComponent = (function () {
    // PROTECTED REGION ID _tzHksJ4dEeeQDN6CvfzAfw.denomination ENABLED START
    // PROTECTED REGION END
    function DenominationComponent(_router, _route, _loggerService, _authenticationService, _dataService, _displayPropertiesService, _resourceService) {
        this._router = _router;
        this._route = _route;
        this._loggerService = _loggerService;
        this._authenticationService = _authenticationService;
        this._dataService = _dataService;
        this._displayPropertiesService = _displayPropertiesService;
        this._resourceService = _resourceService;
    }
    // stubs generated for view element events
    DenominationComponent.prototype.transfer = function () {
        this.transferActionAction();
    };
    DenominationComponent.prototype.transferActionAction = function () {
        // PROTECTED REGION ID _zryXAJ93EeeQDN6CvfzAfw.transferAction ENABLED START
        var five = 0;
        var ten = 0;
        var twenty = 0;
        var fifty = 0;
        if (this.fiveNotes != null) {
            five = this.fiveNotes;
        }
        if (this.tenNotes != null) {
            ten = this.tenNotes;
        }
        if (this.twentyNotes != null) {
            twenty = this.twentyNotes;
        }
        if (this.fiftyNotes != null) {
            fifty = this.fiftyNotes;
        }
        if ((five + ten + twenty + fifty) > 0) {
            this._dataService.initiateTransaction(localStorage.getItem('selectedAcc'), five, ten, twenty, fifty);
            this._router.navigate(['/mainMenu']);
        }
        // PROTECTED REGION END
    };
    // called when component is initiated			
    DenominationComponent.prototype.ngOnInit = function () {
        // Check authentication requirements, if empty, no authentication requirements for this component
        // PROTECTED REGION ID _tzHksJ4dEeeQDN6CvfzAfw.ngOnInit ENABLED START
        // PROTECTED REGION END
    };
    DenominationComponent = __decorate([
        core_1.Component({
            selector: 'denomination',
            templateUrl: 'app/views/denomination.component.html',
            providers: [logger_service_1.LoggerService, displayProperties_service_1.DisplayPropertiesService, authentication_service_1.AuthenticationService, data_service_1.DataService],
            directives: [common_1.NgClass],
            pipes: []
        }), 
        __metadata('design:paramtypes', [router_2.Router, router_1.ActivatedRoute, logger_service_1.LoggerService, authentication_service_1.AuthenticationService, data_service_1.DataService, displayProperties_service_1.DisplayPropertiesService, resource_service_1.ResourceService])
    ], DenominationComponent);
    return DenominationComponent;
}());
exports.DenominationComponent = DenominationComponent;
//# sourceMappingURL=denomination.component.js.map