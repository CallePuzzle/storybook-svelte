<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { type SuperValidated, type Infer } from 'sveltekit-superforms';
	import { loginSchema, type LoginSchema } from '$lib/schemas/login.js';
	import SuperDebug from 'sveltekit-superforms';

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

<form use:enhance class="mx-auto flex max-w-md flex-col" method="POST">
	<FormFields {form} {formData} {fields} />
	<div class="my-2 flex justify-center">
		{#if $delayed}
			<span class="loading loading-dots loading-lg"></span>
		{:else}
			<button class="btn btn-accent">Enviar</button>
		{/if}
	</div>
</form>
{#if debug}
	<SuperDebug data={$formData} />
{/if}
