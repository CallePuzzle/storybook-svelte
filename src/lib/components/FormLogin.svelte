<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { type SuperValidated, type Infer } from 'sveltekit-superforms';
	import { loginSchema, type LoginSchema } from '$lib/schemas/login.js';
	import SuperDebug from 'sveltekit-superforms';
	import { m } from '$lib/paraglide/messages.js';
	import Inbox from '@lucide/svelte/icons/inbox';
	import { routes } from '$lib/routes.js';

	import FormFields from '$lib/components/FormFields.svelte';
	import { zodToFieldsJsonSchema } from '$lib/schemas/utils.js';

	export type Props = {
		formValidated: SuperValidated<Infer<LoginSchema>>;
		debug?: boolean;
	};

	let { formValidated, debug = false }: Props = $props();

	const uid = $props.id();

	const form = superForm(formValidated, {
		id: uid,
		validators: zodClient(loginSchema)
	});
	const { form: formData, enhance, delayed } = form;

	const fields = zodToFieldsJsonSchema(loginSchema);
</script>

<form
	use:enhance
	class="mx-auto flex max-w-xs flex-col"
	method="POST"
	action={routes.login.url + '?/signin'}
>
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
