import { betterAuth } from 'better-auth';
// import { magicLink } from 'better-auth/plugins';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import db from './db';

export const auth = betterAuth({
	database: prismaAdapter(db, {
		provider: 'sqlite'
	}),
	emailAndPassword: {
		enabled: true
	}
	// plugins: [
	// 	magicLink({
	// 		sendMagicLink: async ({ email, token, url }, request) => {
	// 			// send email to user
	// 		}
	// 	})
	// ]
});
