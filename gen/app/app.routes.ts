import { provideRouter, RouterConfig }  from '@angular/router';

import { LoginComponent } from './views/login.component';
import { MainMenuComponent } from './views/mainMenu.component';
import { DenominationComponent } from './views/denomination.component';

export const routes: RouterConfig = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'mainMenu',
		component: MainMenuComponent
	},
	{
		path: 'denomination',
		component: DenominationComponent
	},
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	}
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];
