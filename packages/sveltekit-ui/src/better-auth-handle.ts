import type { Handle } from "@sveltejs/kit";
import { svelteKitHandler } from "better-auth/svelte-kit";

export const betterAuthHandle =
  (auth: any): Handle =>
  ({ event, resolve }) =>
    svelteKitHandler({ event, resolve, auth });
