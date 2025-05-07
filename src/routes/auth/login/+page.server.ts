import SignIn from '$lib/form-actions/sign-in.js';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	signin: async (event) => {
		const { data, error } = await SignIn(event, true, 'http://localhost:5173');
		console.log(data);
		if (error) {
			console.error(error);
			redirect(303, '/auth/error');
		} else {
			redirect(303, '/');
		}
	}
};
