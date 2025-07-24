import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import { betterAuthHandle, paraglideHandle } from "@repo/sveltekit-ui";
import { auth } from "./lib/server/auth.js";

export const handle: Handle = sequence(betterAuthHandle(auth), paraglideHandle);
