import { betterAuth } from 'better-auth';
import { magicLink } from 'better-auth/plugins';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import db from './db';
import sender from './sender';

export const auth = betterAuth({
	database: prismaAdapter(db, {
		provider: 'sqlite'
	}),
	plugins: [
		magicLink({
			sendMagicLink: async ({ email, token, url }, request) => {
				console.log(request);
				await sender(email, 'sign in', 'token: ' + token + ' -- url: ' + url);
			}
		})
	]
});
