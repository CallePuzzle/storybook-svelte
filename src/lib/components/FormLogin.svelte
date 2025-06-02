<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { loginSchema } from '$lib/schemas/login.js';
	import SuperDebug from 'sveltekit-superforms';
	import { m } from '$lib/paraglide/messages.js';
	import Inbox from '@lucide/svelte/icons/inbox';
	import { defaults } from 'sveltekit-superforms/client';
	import { zod } from 'sveltekit-superforms/adapters';
	import { signIn } from '$lib/auth-client';

	import FormFields from '$lib/components/FormFields.svelte';
	import { zodToFieldsJsonSchema } from '$lib/schemas/utils.js';

	export type Props = {
		debug?: boolean;
		afterCancelCallback?: () => void;
	};

	let { debug = false, afterCancelCallback = () => {} }: Props = $props();

	const uid = $props.id();

	const formValidated = defaults({ email: '' }, zod(loginSchema));

	const form = superForm(formValidated, {
		id: uid,
		validators: zodClient(loginSchema),
		dataType: 'json',
		async onSubmit({ cancel }) {
			await signIn.magicLink({
				email: $formData.email
			});
			cancel();
			afterCancelCallback();
		}
	});
	const { form: formData, enhance, delayed } = form;

	const fields = zodToFieldsJsonSchema(loginSchema);
</script>

<form use:enhance class="mx-auto flex max-w-xs flex-col" method="POST">
	<FormFields {form} {formData} {fields} />
	<div class="my-2 flex justify-center">
		{#if $delayed}
			<span class="loading loading-dots loading-lg"></span>
		{:else}
			<button class="btn btn-accent"><Inbox />{m.form_login_sign_in()}</button>
		{/if}
	</div>
</form>
{#if debug}
	<SuperDebug data={$formData} />
{/if}
