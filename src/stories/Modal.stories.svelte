<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Modal from '$lib/components/Modal.svelte';

	const { Story } = defineMeta({
		title: 'Common/Modal',
		component: Modal,
		tags: ['autodocs']
	});
</script>

{#snippet children()}
	<ul>
		<li>option 1</li>
	</ul>
{/snippet}

<Story name="Outside" args={{ title: 'Close outside', children }} />
<Story name="Button" args={{ type: 'button', title: 'Close Button', children }} />
<Story name="X" args={{ type: 'X', title: 'Close X', children }} />
