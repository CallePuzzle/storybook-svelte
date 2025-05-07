<script lang="ts">
	import '../app.css';
	import { defaults } from 'sveltekit-superforms/client';
	import { zod } from 'sveltekit-superforms/adapters';
	import Header from '$lib/components/Header.svelte';
	import { routes } from '$lib/routes.js';
	import { loginSchema } from '$lib/schemas/login.js';

	import type { PageData } from './$types';
	import type { Snippet } from 'svelte';

	let { children, data }: { children: Snippet; data: PageData } = $props();

	console.log(data.session);

	const formValidated = defaults({ email: '' }, zod(loginSchema));
</script>

<Header
	title="NavNar Title"
	{routes}
	{formValidated}
	userIsLogged={data.session?.user ? true : false}
>
	{@render children()}
</Header>
