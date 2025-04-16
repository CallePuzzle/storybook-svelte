import { m } from '$lib/paraglide/messages.js';

type URL<T extends string = string> = T | ((id: string, ...params: string[]) => T);

type Route = {
	name: string;
	url: URL;
	isProtected: boolean;
	showInMenu: boolean;
};

interface Routes {
	[id: string]: Route;
}

const routes: Routes = {
	home: {
		name: m.routes_home(),
		url: '/',
		isProtected: false,
		showInMenu: false
	},
	profile: {
		name: m.routes_profile(),
		url: '/user/profile',
		isProtected: true,
		showInMenu: false
	},
	login: {
		name: m.routes_login(),
		url: '/user/login',
		isProtected: true,
		showInMenu: false
	},
	logout: {
		name: m.routes_logout(),
		url: '/user/logout',
		isProtected: true,
		showInMenu: false
	},
	notifications: {
		name: m.routes_notifications(),
		url: '/notifications',
		isProtected: true,
		showInMenu: false
	}
};

export { routes, type Routes, type Route };
