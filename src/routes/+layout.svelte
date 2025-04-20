<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import { routes } from '$lib/routes.js';

	let { children } = $props();
</script>

<Header title="NavNar Title" {routes}>
	{@render children()}
</Header>
