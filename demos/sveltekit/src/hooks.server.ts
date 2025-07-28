import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import { betterAuthHandle } from "@repo/library/better-auth";
import { paraglideHandle } from "$lib/paraglide-handle";
import { auth } from "$lib/server/auth.js";

export const handle: Handle = sequence(betterAuthHandle(auth), paraglideHandle);
