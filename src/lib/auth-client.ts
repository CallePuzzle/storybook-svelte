import { createAuthClient } from 'better-auth/svelte';
import { magicLinkClient } from 'better-auth/client/plugins';

export const authClient = createAuthClient({
	plugins: [magicLinkClient()]
});

export const { signIn, signUp, useSession } = authClient;

export const session = useSession();

export type AuthClient = typeof authClient;
export type Session = ReturnType<typeof useSession>;
