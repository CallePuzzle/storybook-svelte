<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import NavBarList from '$lib/components/NavBarList.svelte';
	import { routes } from '$lib/routes';

	const { Story } = defineMeta({
		title: 'Component/NavBarList',
		component: NavBarList,
		tags: ['autodocs']
	});
</script>

<Story name="Horizontal" args={{ type: 'horizontal', routes }} />
<Story name="Drawer" args={{ type: 'drawer', routes }} />
