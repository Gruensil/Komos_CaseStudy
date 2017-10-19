import { Client } from './client';

export class Account {
	constructor(
		public accountID: string,			
		public balance: number,			
		public ownedBy: Client			
	){};
}
