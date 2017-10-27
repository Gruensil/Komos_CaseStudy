//
// Created by IFML2NG2 on 2017/10/27 15:31:12
//

// Angular Imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

// Search Component Imports
import { SearchComponent } from '../dynamic/search.component';
import { AccountListFilter } from '../helper/pipes/accountList.pipe';

// Service Imports
import { LoggerService } from '../services/logger.service';
import { AuthenticationService } from '../services/authentication.service';
import { DataService } from '../services/data.service';
import { DisplayPropertiesService } from '../services/displayProperties.service';
import { ResourceService } from '../services/resource.service';

// domain concept imports
import { Account } from '../data/account';

@Component({
	selector: 'mainMenu',
	templateUrl: 'app/views/mainMenu.component.html',
	providers: [LoggerService,DisplayPropertiesService,AuthenticationService,DataService],
	directives: [NgClass ,SearchComponent ],
	pipes: [AccountListFilter,]
})

export class MainMenuComponent {
	//Generate variables for parameters and bindings
	selectedAccountBinding:  any;
	isSelectedAccountBinding:  boolean;
	// variable for advanced search space
	advancedSearchSpace: Object;
	filterBy: String;
	// variable for list data binding
	accountBinding: Account[];
	accountStatus: any;
	accoundID: any;
	// PROTECTED REGION ID _S15wQJxwEee_2OeSSzYyRQ.mainMenu ENABLED START
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
		// fill advanced search space
		this.advancedSearchSpace = [
		{key: "balance", title: "accountStatus"},
		{key: "accountID", title: "accoundID"}
		];
	}
		
	// stubs generated for view element events
	
		selectAccount(){
			this.denominationActionAction();
		}
	
		denominationActionAction(){
			// PROTECTED REGION ID _vAz04LTcEeeUzbyM6lB9Aw.denominationAction ENABLED START
			localStorage.setItem('selectedAcc', this.selectedAccountBinding.accountID)
			this._router.navigate(['denomination']);
			// PROTECTED REGION END
		}

	// stubs for data service calls for data bindings
	getAccountBinding(){
		// PROTECTED REGION ID _rFDacJ9mEeeQDN6CvfzAfw.getAccountBinding ENABLED START
        	var client = this._dataService.getClientById(localStorage.getItem('clientID'));
        
			this.accountBinding = this._dataService.getAccountsByClientId(client.clientID);
		// PROTECTED REGION END
	}
	
	onSelect(el: Account){
		if(this.selectedAccountBinding === el){
			this.selectedAccountBinding = undefined;
			this.isSelectedAccountBinding = false;
		}else{
			this.selectedAccountBinding = el;
			this.isSelectedAccountBinding = true;
		}
	}
	
	// called when search filter is updated
	filterUpdated(val: Object){
		this.filterBy = JSON.stringify(val);
	}
	
	// called when component is initiated			
	ngOnInit(){
		// Check authentication requirements, if empty, no authentication requirements for this component
		
		// Call methods for filling data binding
		this.getAccountBinding();
		
		
		// PROTECTED REGION ID _S15wQJxwEee_2OeSSzYyRQ.ngOnInit ENABLED START
		// PROTECTED REGION END
	}
}
