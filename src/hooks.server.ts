import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { supabase } from '$lib/supabase-handle.js';
import { paraglide } from '$lib/paraglide-handle.js';

export const handle: Handle = sequence(supabase, paraglide);
