<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Header from '$lib/components/Header.svelte';
	import { routes } from '$lib/routes';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Layout/Header',
		component: Header,
		// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
		tags: ['autodocs'],
		parameters: {
			// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
			layout: 'fullscreen'
		}
	});

	const testRoutes = {
		site1: {
			name: 'site1',
			url: '/site1',
			isProtected: false,
			showInMenu: true
		},
		site2: {
			name: 'site2',
			url: '/site2',
			isProtected: false,
			showInMenu: true
		}
	};

	const routesToShow = { ...routes, ...testRoutes };
</script>

{#snippet children()}
	<ul>
		<li>option 1</li>
	</ul>
{/snippet}

<Story
	name="Full"
	args={{
		title: 'NavNar Title',
		routes: routesToShow,
		children,
		userIsLogged: true,
		userHasNotification: true,
		notification: true,
		searcher: true
	}}
/>
