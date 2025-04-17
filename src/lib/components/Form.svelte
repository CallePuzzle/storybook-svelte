<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import SuperDebug from 'sveltekit-superforms';
	import { zodToJsonSchema } from 'zod-to-json-schema';
	import { startCase } from 'lodash-es';

	import FormString from '$lib/components/FormString.svelte';

	let { formValidated, schema } = $props();

	const form = superForm(formValidated, {
		validators: zodClient(schema)
	});
	const { form: formData, enhance } = form;

	const jsonSchema = zodToJsonSchema(schema) as {
		properties?: Record<string, unknown>;
		required?: string[];
	};

	const jsonSchemaProperties = jsonSchema.properties ?? {};
	let fields: Array<{ name: string } & Record<string, unknown>> = [];
	for (const key in jsonSchemaProperties) {
		const properties = jsonSchemaProperties[key] as object;
		fields.push({ ...{ name: key }, ...properties });
	}
</script>

<form use:enhance class="mx-auto flex max-w-md flex-col" method="POST">
	{#each fields as field (field.name)}
		<FormString
			{form}
			{formData}
			field={field.name}
			type={(field.format as string) ?? 'text'}
			placeholder={startCase(field.name)}
			description={(field.description as string) ?? undefined}
		/>
	{/each}
</form>
<SuperDebug data={$formData} />
