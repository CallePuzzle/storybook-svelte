import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { loginSchema } from '$lib/schemas/login.js';

import type { RequestEvent } from '@sveltejs/kit';
import type { AuthOtpResponse } from '@supabase/supabase-js';

export default async (
	event: RequestEvent,
	createUser: boolean,
	redirectTo: string
): Promise<AuthOtpResponse> => {
	const supabase = event.locals.supabase;
	const form = await superValidate(event.request, zod(loginSchema));

	return await supabase.auth.signInWithOtp({
		email: form.data.email,
		options: {
			// set this to false if you do not want the user to be automatically signed up
			shouldCreateUser: createUser,
			emailRedirectTo: redirectTo
		}
	});
};
