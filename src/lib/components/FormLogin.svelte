<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { type SuperValidated, type Infer } from 'sveltekit-superforms';
	import { loginSchema, type LoginSchema } from '$lib/schemas/login';
	import SuperDebug from 'sveltekit-superforms';

	import FormFields from '$lib/components/FormFields.svelte';
	import { zodToFieldsJsonSchema } from '$lib/schemas/utils';

	export interface Props {
		formValidated: SuperValidated<Infer<LoginSchema>>;
	}

	let { formValidated }: Props = $props();

	const form = superForm(formValidated, {
		validators: zodClient(loginSchema)
	});
	const { form: formData, enhance } = form;

	const fields = zodToFieldsJsonSchema(loginSchema);
</script>

<form use:enhance class="mx-auto flex max-w-md flex-col" method="POST">
	<FormFields {form} {formData} {fields} />
</form>
<SuperDebug data={$formData} />
