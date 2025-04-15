<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Routes } from '$lib/routes';

	import Menu from '@lucide/svelte/icons/menu';
	import NavBarList from '$lib/components/NavBarList.svelte';

	export interface Props {
		title: string;
		routes: Routes;
		children: Snippet;
	}

	let { title, routes, children }: Props = $props();
</script>

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="navbar bg-base-300 w-full">
			<div class="flex-none lg:hidden">
				<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<Menu />
				</label>
			</div>
			<div class="mx-2 flex-1 px-2">{title}</div>
			<nav class="hidden flex-none lg:block">
				<ul class="">
					<NavBarList type="horizontal" {routes} />
				</ul>
			</nav>
		</div>
		<!-- Page content here -->
		{@render children()}
	</div>
	<nav class="drawer-side">
		<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
		<NavBarList type="drawer" {routes} />
	</nav>
</div>
