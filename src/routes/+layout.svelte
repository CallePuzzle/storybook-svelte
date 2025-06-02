<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import { routes } from '$lib/routes.js';
	import { useSession } from '$lib/auth-client';

	const userData = useSession();

	import type { PageData } from './$types';
	import type { Snippet } from 'svelte';

	let { children, data }: { children: Snippet; data: PageData } = $props();

	console.log(data.session);
</script>

<Header title="NavNar Title" {routes} userIsLogged={$userData.data ? true : false}>
	{@render children()}
</Header>
