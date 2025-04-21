<script lang="ts">
	import '../app.css';
	import { defaults } from 'sveltekit-superforms/client';
	import { zod } from 'sveltekit-superforms/adapters';
	import Header from '$lib/components/Header.svelte';
	import { routes } from '$lib/routes.js';
	import { loginSchema } from '$lib/schemas/login.js';

	let { children } = $props();

	const formValidated = defaults({ email: '' }, zod(loginSchema));
</script>

<Header title="NavNar Title" {routes} {formValidated}>
	{@render children()}
</Header>
