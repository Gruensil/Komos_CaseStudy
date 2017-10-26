import { Transaction } from './transaction';
import { ACCOUNTS } from './mock-accounts';

export var TRANSACTIONS: Transaction[] = [
    {numberFives: 5, numberTens: 2, numberTwenties: 0, numberFifties: 2, totalAmount: 145, associatedWith: ACCOUNTS[0]},
    {numberFives: 2, numberTens: 2, numberTwenties: 5, numberFifties: 0, totalAmount: 130, associatedWith: ACCOUNTS[0]},
    {numberFives: 5, numberTens: 5, numberTwenties: 4, numberFifties: 4, totalAmount: 355, associatedWith: ACCOUNTS[1]},
    {numberFives: 2, numberTens: 4, numberTwenties: 6, numberFifties: 5, totalAmount: 420, associatedWith: ACCOUNTS[2]},
]