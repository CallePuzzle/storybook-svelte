<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import SuperDebug from 'sveltekit-superforms';

	import FormString from '$lib/components/FormString.svelte';

	let { formValidated, schema } = $props();

	const form = superForm(formValidated, {
		validators: zodClient(schema)
	});
	const { form: formData, enhance } = form;
</script>

<form use:enhance class="mx-auto flex max-w-md flex-col" method="POST">
	<FormString
		{form}
		{formData}
		field="email"
		type="email"
		name="Email"
		description="Company email is preferred"
	/>
</form>
<SuperDebug data={$formData} />
