import { Account } from './account';

export class Transaction {
	constructor(
		public numberFives: number,			
		public numberTens: number,			
		public numberTwenties: number,			
		public numberFifties: number,			
		public totalAmount: number,			
		public associatedWith: Account			
	){};
}
