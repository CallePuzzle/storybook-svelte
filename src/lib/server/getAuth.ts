import { betterAuth } from 'better-auth';
import { magicLink } from 'better-auth/plugins';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import type { PrismaClient } from '@prisma/client';

export function getAuth(db: PrismaClient) {
	return betterAuth({
		database: prismaAdapter(db, {
			provider: 'sqlite'
		}),
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
			})
		]
	});
}
