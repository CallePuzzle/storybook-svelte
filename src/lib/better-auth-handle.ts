import type { Handle } from '@sveltejs/kit';
import { auth } from '$lib/server/auth'; // path to your auth file
import { svelteKitHandler } from 'better-auth/svelte-kit';

export const betterAuth: Handle = ({ event, resolve }) =>
	svelteKitHandler({ event, resolve, auth });
