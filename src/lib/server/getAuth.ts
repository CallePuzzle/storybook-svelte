import { betterAuth } from 'better-auth';
import { magicLink, organization, admin } from 'better-auth/plugins';
import type { BetterAuthOptions } from 'better-auth';

export function getAuth(database: BetterAuthOptions) {
	return betterAuth({
		database: database,
		plugins: [
			magicLink({
				sendMagicLink: async ({ email, token, url }, request) => {
					console.log(request);
					try {
						// await sender(email, 'sign in', 'token: ' + token + ' -- url: ' + url);
						console.log(email, 'sign in', 'token: ' + token + ' -- url: ' + url);
					} catch (error) {
						console.error(error);
						throw error;
					}
				}
			}),
			organization(),
			admin()
		]
	});
}
