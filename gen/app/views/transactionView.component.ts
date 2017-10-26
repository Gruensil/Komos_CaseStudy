//
// Created by IFML2NG2 on 2017/10/26 17:59:54
//

// Angular Imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

// Search Component Imports
import { SearchComponent } from '../dynamic/search.component';
import { TransactionListFilter } from '../helper/pipes/transactionList.pipe';

// Service Imports
import { LoggerService } from '../services/logger.service';
import { AuthenticationService } from '../services/authentication.service';
import { DataService } from '../services/data.service';
import { DisplayPropertiesService } from '../services/displayProperties.service';
import { ResourceService } from '../services/resource.service';

// domain concept imports
import { Transaction } from '../data/transaction';

@Component({
	selector: 'transactionView',
	templateUrl: 'app/views/transactionView.component.html',
	providers: [LoggerService,DisplayPropertiesService,AuthenticationService,DataService],
	directives: [NgClass ,SearchComponent ],
	pipes: [TransactionListFilter,]
})

export class TransactionViewComponent {
	//Generate variables for parameters and bindings
	selectedTransactionBinding:  any;
	isSelectedTransactionBinding:  boolean;
	// variable for advanced search space
	advancedSearchSpace: Object;
	filterBy: String;
	// variable for list data binding
	transactionBinding: Transaction[];
	accountName: any;
	totalAmount: any;
	// PROTECTED REGION ID _kZgfALTcEeeUzbyM6lB9Aw.transactionView ENABLED START
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
		{key: "associatedWith.accountID", title: "associatedWith.accountID"},
		{key: "associatedWith.balance", title: "associatedWith.balance"},
		{key: "associatedWith.ownedBy.clientID", title: "associatedWith.ownedBy.clientID"},
		{key: "associatedWith.ownedBy.firstname", title: "associatedWith.ownedBy.firstname"},
		{key: "associatedWith.ownedBy.lastname", title: "associatedWith.ownedBy.lastname"},
		{key: "totalAmount", title: "totalAmount"}
		];
	}
		
	// stubs generated for view element events

	// stubs for data service calls for data bindings
	getTransactionBinding(){
		// PROTECTED REGION ID _DwoS4LTdEeeUzbyM6lB9Aw.getTransactionBinding ENABLED START
		this.transactionBinding = this._dataService.getTransactionsByClientId(localStorage.getItem('clientID'));
		// PROTECTED REGION END
	}
	
	onSelect(el: Transaction){
		if(this.selectedTransactionBinding === el){
			this.selectedTransactionBinding = undefined;
			this.isSelectedTransactionBinding = false;
		}else{
			this.selectedTransactionBinding = el;
			this.isSelectedTransactionBinding = true;
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
		this.getTransactionBinding();
		
		
		// PROTECTED REGION ID _kZgfALTcEeeUzbyM6lB9Aw.ngOnInit ENABLED START
		// PROTECTED REGION END
	}
}
