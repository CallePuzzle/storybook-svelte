import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { paraglide } from '$lib/paraglide-handle.js';
import { betterAuth } from '$lib/better-auth-handle.js';

export const handle: Handle = sequence(paraglide, betterAuth);
