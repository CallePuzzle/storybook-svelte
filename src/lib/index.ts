import Header from './components/Header.svelte';
import { routes } from './routes.js';
import { paraglide as paraglideHandle } from '$lib/paraglide-handle.js';
import { betterAuth as betterAuthHandle } from '$lib/better-auth-handle.js';

export { paraglideHandle, betterAuthHandle };
export { routes };
export { Header };
