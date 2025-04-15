import { m } from '$lib/paraglide/messages.js';

interface Route {
	name: string;
	url: string | ((id: string, ...params: string[]) => string);
	isProtected: boolean;
}

interface Routes {
	[id: string]: Route;
}

const routes: Routes = {
	home: {
		name: m.routes_home(),
		url: '/',
		isProtected: false
	},
	profile: {
		name: m.routes_profile(),
		url: '/profile',
		isProtected: true
	}
};

export { routes, type Routes, type Route };
