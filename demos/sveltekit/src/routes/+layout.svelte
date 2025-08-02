<script lang="ts">
  import "../app.css";
  import { page } from "$app/state";
  import { locales, localizeHref } from "$lib/paraglide/runtime";
  import { Header } from "@repo/sveltekit-ui";
  import { routes } from "$lib/routes.js";
  import { session, authClient } from "@repo/library/better-auth";

  import type { PageData } from "./$types";
  import type { Snippet } from "svelte";

  let { children, data }: { children: Snippet; data: PageData } = $props();
</script>

<Header title="NavNar Title" {routes} {session} {authClient}>
  {@render children()}
</Header>

<div style="display:none">
  {#each locales as locale}
    <a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
  {/each}
</div>
