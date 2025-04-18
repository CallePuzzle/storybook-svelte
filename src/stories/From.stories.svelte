<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Form from '$lib/components/Form.svelte';

	import { z } from 'zod';
	import { defaults } from 'sveltekit-superforms/client';
	import { zod } from 'sveltekit-superforms/adapters';

	const { Story } = defineMeta({
		title: 'Form/Generic',
		component: Form,
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

	const schema = z.object({
		email: z.string().email('Please enter a valid email.').describe('Company email is preferred')
		// otherfield: z.string(),
		// optionalString: z.string().optional()
	});

	const formValidated = defaults({ email: 'pepe@pepe.es' }, zod(schema));
</script>

<Story
	name="Generic"
	args={{
		formValidated,
		schema
	}}
/>
