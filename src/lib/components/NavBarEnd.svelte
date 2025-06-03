<script lang="ts">
	import Search from '@lucide/svelte/icons/search';
	import BellRing from '@lucide/svelte/icons/bell-ring';
	import Link from '$lib/components/Link.svelte';
	import { routes } from '$lib/routes.js';
	import Modal from '$lib/components/Modal.svelte';
	import ModalType from '$lib/components/Modal.svelte';
	import FormLogin from '$lib/components/FormLogin.svelte';
	import { authClient, session } from '$lib/auth-client';
	import type { Props as FormLoginProps } from '$lib/components/FormLogin.svelte';

	export type Props = {
		userHasNotification?: boolean;
		notification?: boolean;
		searcher?: boolean;
	} & FormLoginProps;

	let { userHasNotification = false, notification = false, searcher = false }: Props = $props();

	let modal = $state<ModalType | null>(null);
	let userIsLogged = $state($session?.data ? true : false);

	async function afterCancelCallback() {
		await new Promise((resolve) => setTimeout(resolve, 2000));
		modal?.close();
	}
</script>

<div class="navbar-end">
	{#if searcher}
		<button class="btn btn-ghost btn-circle">
			<Search />
		</button>
	{/if}
	{#if notification}
		<a href={routes.notifications.url as string} class="btn btn-ghost btn-circle">
			<div class="indicator">
				<BellRing />
				{#if userIsLogged && userHasNotification}
					<span class="badge badge-xs badge-primary indicator-item"></span>
				{/if}
			</div>
		</a>
	{/if}

	<div class="dropdown dropdown-end">
		{#if userIsLogged}
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img
						alt="Tailwind CSS Navbar component"
						src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
					/>
				</div>
			</div>
			<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
			>
				<li><Link route={routes.profile} /></li>
				<li>
					<button
						onclick={async () => {
							await authClient.signOut();
						}}
					>
						Sign Out
					</button>
				</li>
			</ul>
		{:else}
			<Modal title="Login" bind:this={modal}>
				<FormLogin {afterCancelCallback} />
			</Modal>
		{/if}
	</div>
</div>
