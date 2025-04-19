<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Header from '$lib/components/Header.svelte';
	import { loginSchema } from '$lib/schemas/login.js';
	import { routes } from '$lib/routes.js';
	import { defaults } from 'sveltekit-superforms/client';
	import { zod } from 'sveltekit-superforms/adapters';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Layout/Header',
		component: Header,
		// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
		tags: ['autodocs'],
		parameters: {
			sveltekit_experimental: {
				forms: {
					enhance: () => {},
					applyAction: () => {}
				},
				stores: {
					page: {}
				}
			}
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

	const formValidated = defaults({ email: 'pepe@pepe.es' }, zod(loginSchema));
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
		searcher: true,
		formValidated
	}}
/>

<Story
	name="User not logged"
	args={{
		title: 'NavNar Title',
		routes: routesToShow,
		children,
		userIsLogged: false,
		userHasNotification: true,
		notification: true,
		searcher: true,
		formValidated
	}}
/>
