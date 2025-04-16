import { m } from '$lib/paraglide/messages.js';

type Route = {
	name: string;
	url: string | ((id: string, ...params: string[]) => string);
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
		url: '/profile',
		isProtected: true,
		showInMenu: false
	}
};

export { routes, type Routes, type Route };
