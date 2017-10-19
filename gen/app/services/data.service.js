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
// import { Book } from '../data/book';
// import { Student } from '../data/student';
// import { BookLending } from '../data/bookLending';
// import { BookReservation } from '../data/bookReservation';
// import { BOOKS } from '../data/mock-books';
// import { BOOKLENDINGS } from '../data/mock-bookLendings';
// import { BOOKRESERVATIONS } from '../data/mock-bookReservations';
// import { STUDENTS } from '../data/mock-students';
var mock_clients_1 = require('../data/mock-clients');
var mock_accounts_1 = require('../data/mock-accounts');
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
        console.log(mock_accounts_1.ACCOUNTS.filter(function (acc) { return acc.ownedBy.clientID == id; }));
        return mock_accounts_1.ACCOUNTS.filter(function (acc) { return acc.ownedBy.clientID == id; });
    };
    DataService.prototype.getClients = function () {
        return mock_clients_1.CLIENTS;
    };
    DataService.prototype.getClientById = function (id) {
        return mock_clients_1.CLIENTS.find(function (c) { return c.clientID == id; });
    };
    DataService.prototype.getTransactionByAccount = function (id) {
        return this.localGet('transactions').filter(function (l) { return l.associatedWith.accountId == id; });
    };
    DataService.prototype.initiateTransaction = function (account, fives, tens, twenties, fifties) {
        var trans = {
            associatedWith: null,
            numberFives: 0,
            numberTens: 0,
            numberTwenties: 0,
            numberFifties: 0
        };
        var total = fives * 5 + tens * 10 + twenties * 20 + fifties * 50;
        if (total <= this.getAccountById(account).balance) {
            console.log(this.getAccountById(account));
            trans.associatedWith = this.getAccountById(account);
            trans.numberFives = fives;
            trans.numberTens = tens;
            trans.numberTwenties = twenties;
            trans.numberFifties = fifties;
            this.localSet('transaction', trans);
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