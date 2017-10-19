import { Account } from './account';
import { CLIENTS } from './mock-clients'

export var ACCOUNTS: Account[] = [
    {accountID: '1', balance: 2000, ownedBy: CLIENTS[0]},
    {accountID: '2', balance: 500, ownedBy: CLIENTS[0]},
    {accountID: '3', balance: 7000, ownedBy: CLIENTS[1]},
]