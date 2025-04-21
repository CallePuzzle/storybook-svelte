import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { supabase } from '$lib/supabaseHandle.js';
import { paraglide } from '$lib/paraglideHandle.js';

export const handle: Handle = sequence(supabase, paraglide);
