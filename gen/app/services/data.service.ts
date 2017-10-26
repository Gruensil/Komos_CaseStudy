import { Injectable, OnInit } from '@angular/core';

import { CLIENTS } from '../data/mock-clients';
import { ACCOUNTS } from '../data/mock-accounts';
import { TRANSACTIONS } from '../data/mock-transactions'
import { Transaction } from '../data/transaction';

declare var $: any;

@Injectable()
export class DataService {

  constructor(){
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

  localGet(key: string){
    return JSON.parse(localStorage.getItem(key));
  }

  localSet(key: string, data){
    return localStorage.setItem(key, JSON.stringify(data));
  }

  getAccounts(){
    return ACCOUNTS;
  }

  getAccountById(id: string){
    return ACCOUNTS.find(acc => acc.accountID == id);
  }

  getAccountsByClientId(id: string){
    return ACCOUNTS.filter(acc => acc.ownedBy.clientID == id);
  }

  getClients(){
    return CLIENTS;
  }

  getClientById(id:string){
    return CLIENTS.find(c => c.clientID == id);
  }
  
  getTransactions(){
    var trans = TRANSACTIONS;
    if(this.localGet('transactions') !== null){
      for(let t of JSON.parse(this.localGet('transactions'))){
        trans.push(t)
      }
      // trans.concat(JSON.parse(this.localGet('transactions')));
      console.log(JSON.parse(this.localGet('transactions')));
      console.log(trans)
    }
    return trans;
  }
  
  getTransactionsByAccount(id: string){
    var trans =  this.getTransactions().filter(l => l.associatedWith.accountID === id);
    return trans
  }    

  getTransactionsByClientId(id: string){
    var trans =  this.getTransactions().filter(l => l.associatedWith.ownedBy.clientID === id);
    return trans
  }


  initiateTransaction(account: string, fives: number, tens: number, twenties: number, fifties: number){
    var trans: Transaction = {
      associatedWith: null,
      numberFives: 0,
      numberTens: 0,
      numberTwenties: 0,
      numberFifties: 0,
      totalAmount: 0
    };
    var total = fives*5 + tens*10 + twenties*20 + fifties*50;
    if(total <= this.getAccountById(account).balance){
      trans.associatedWith = this.getAccountById(account);
      trans.numberFives = fives;
      trans.numberTens = tens;
      trans.numberTwenties = twenties;
      trans.numberFifties = fifties;
      trans.totalAmount = total;

      // Add Transactions in localStorage
      if(this.localGet('transactions') === null){
        var newTrans = []
        newTrans.push(trans)
        this.localSet('transactions', JSON.stringify(newTrans));
      }else{
        var oldTrans = []
        oldTrans = JSON.parse(this.localGet('transactions'))
        oldTrans.push(trans)
        this.localSet('transactions', JSON.stringify(oldTrans));
      }
      this.getAccountById(account).balance -= total;
    }
  }
}
