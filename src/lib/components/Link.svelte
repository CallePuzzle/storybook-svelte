<script lang="ts">
	import type { Route } from '$lib/routes.js';
	export interface Props {
		route: Route;
	}

	let { route }: Props = $props();
</script>

<a href={route.url as string}>{route.name}</a>
