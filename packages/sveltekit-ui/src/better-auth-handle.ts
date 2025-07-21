import type { Handle } from '@sveltejs/kit';
import { svelteKitHandler } from 'better-auth/svelte-kit';

export const betterAuth =
	(auth: any): Handle =>
	({ event, resolve }) =>
		svelteKitHandler({ event, resolve, auth });
