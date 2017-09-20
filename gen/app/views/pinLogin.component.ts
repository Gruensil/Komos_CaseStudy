//
// Created by IFML2NG2 on 2017/09/20 11:40:52
//

// Angular Imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';


// Service Imports
import { LoggerService } from '../services/logger.service';
import { AuthenticationService } from '../services/authentication.service';
import { DataService } from '../services/data.service';
import { DisplayPropertiesService } from '../services/displayProperties.service';
import { ResourceService } from '../services/resource.service';

// domain concept imports

@Component({
	selector: 'pinLogin',
	templateUrl: 'app/views/pinLogin.component.html',
	providers: [LoggerService,DisplayPropertiesService,AuthenticationService,DataService],
	directives: [NgClass  ],
	pipes: []
})

export class PinLoginComponent {
	//Generate variables for parameters and bindings
	// bindings for fields in form
		pin: number;
	// PROTECTED REGION ID __wUQUJ08EeeWrJ4OgYSE3Q.pinLogin ENABLED START
	// PROTECTED REGION END

	constructor(
		private _router: Router,
		private _route: ActivatedRoute
,		private _loggerService: LoggerService,
				private _authenticationService: AuthenticationService,
				private _dataService: DataService,
				private _displayPropertiesService: DisplayPropertiesService,
				private _resourceService: ResourceService
		){
	}
		
	// stubs generated for view element events
	
		pinEvent(){
			this.pinActionAction();
		}
	
		pinActionAction(){
			// PROTECTED REGION ID _icIo0JxxEee_2OeSSzYyRQ.pinAction ENABLED START
			// PROTECTED REGION END
		}

	
	// called when component is initiated			
	ngOnInit(){
		// Check authentication requirements, if empty, no authentication requirements for this component
		
		
		
		// PROTECTED REGION ID __wUQUJ08EeeWrJ4OgYSE3Q.ngOnInit ENABLED START
		// PROTECTED REGION END
	}
}
