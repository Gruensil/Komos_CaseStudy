import { provideRouter, RouterConfig }  from '@angular/router';

import { LoginComponent } from './views/login.component';
import { MainMenuComponent } from './views/mainMenu.component';
import { PinLoginComponent } from './views/pinLogin.component';

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
		path: 'pinLogin',
		component: PinLoginComponent
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
