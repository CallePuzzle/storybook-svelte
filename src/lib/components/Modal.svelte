<script lang="ts">
	import type { Snippet } from 'svelte';
	import { onMount } from 'svelte';
	import { m } from '$lib/paraglide/messages.js';

	export interface Props {
		title: string;
		children: Snippet;
	}

	let { title, children }: Props = $props();
	let modal: HTMLDialogElement;

	const uid = $props.id();

	function showModal() {
		modal.showModal();
	}

	onMount(() => {
		modal = document.getElementById('modal-' + uid) as HTMLDialogElement;
	});
</script>

<button class="btn" onclick={showModal}>{title}</button>
<dialog id="modal-{uid}" class="modal">
	<div class="modal-box">
		{@render children()}
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>{m.close()}</button>
	</form>
</dialog>
