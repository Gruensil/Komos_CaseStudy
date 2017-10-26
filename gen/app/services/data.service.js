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
var core_1 = require('@angular/core');
var mock_clients_1 = require('../data/mock-clients');
var mock_accounts_1 = require('../data/mock-accounts');
var mock_transactions_1 = require('../data/mock-transactions');
var DataService = (function () {
    function DataService() {
        // if(localStorage.getItem('booklendings') === null){
        //   localStorage.setItem('booklendings', JSON.stringify(BOOKLENDINGS));
        // }
        // if(localStorage.getItem('bookreservations') === null){
        //   localStorage.setItem('bookreservations', JSON.stringify(BOOKRESERVATIONS));
        // }
        // if(localStorage.getItem('books') === null){
        //   localStorage.setItem('books', JSON.stringify(BOOKS));
        // }
    }
    // Get / Set operations
    DataService.prototype.localGet = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    DataService.prototype.localSet = function (key, data) {
        return localStorage.setItem(key, JSON.stringify(data));
    };
    DataService.prototype.getAccounts = function () {
        return mock_accounts_1.ACCOUNTS;
    };
    DataService.prototype.getAccountById = function (id) {
        return mock_accounts_1.ACCOUNTS.find(function (acc) { return acc.accountID == id; });
    };
    DataService.prototype.getAccountsByClientId = function (id) {
        return mock_accounts_1.ACCOUNTS.filter(function (acc) { return acc.ownedBy.clientID == id; });
    };
    DataService.prototype.getClients = function () {
        return mock_clients_1.CLIENTS;
    };
    DataService.prototype.getClientById = function (id) {
        return mock_clients_1.CLIENTS.find(function (c) { return c.clientID == id; });
    };
    DataService.prototype.getTransactions = function () {
        var trans = mock_transactions_1.TRANSACTIONS;
        if (this.localGet('transactions') !== null) {
            for (var _i = 0, _a = JSON.parse(this.localGet('transactions')); _i < _a.length; _i++) {
                var t = _a[_i];
                trans.push(t);
            }
            // trans.concat(JSON.parse(this.localGet('transactions')));
            console.log(JSON.parse(this.localGet('transactions')));
            console.log(trans);
        }
        return trans;
    };
    DataService.prototype.getTransactionsByAccount = function (id) {
        var trans = this.getTransactions().filter(function (l) { return l.associatedWith.accountID === id; });
        return trans;
    };
    DataService.prototype.getTransactionsByClientId = function (id) {
        var trans = this.getTransactions().filter(function (l) { return l.associatedWith.ownedBy.clientID === id; });
        return trans;
    };
    DataService.prototype.initiateTransaction = function (account, fives, tens, twenties, fifties) {
        var trans = {
            associatedWith: null,
            numberFives: 0,
            numberTens: 0,
            numberTwenties: 0,
            numberFifties: 0,
            totalAmount: 0
        };
        var total = fives * 5 + tens * 10 + twenties * 20 + fifties * 50;
        if (total <= this.getAccountById(account).balance) {
            trans.associatedWith = this.getAccountById(account);
            trans.numberFives = fives;
            trans.numberTens = tens;
            trans.numberTwenties = twenties;
            trans.numberFifties = fifties;
            trans.totalAmount = total;
            // Add Transactions in localStorage
            if (this.localGet('transactions') === null) {
                var newTrans = [];
                newTrans.push(trans);
                this.localSet('transactions', JSON.stringify(newTrans));
            }
            else {
                var oldTrans = [];
                oldTrans = JSON.parse(this.localGet('transactions'));
                oldTrans.push(trans);
                this.localSet('transactions', JSON.stringify(oldTrans));
            }
            this.getAccountById(account).balance -= total;
        }
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map