<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { type SuperValidated, type Infer } from 'sveltekit-superforms';
	import SuperDebug from 'sveltekit-superforms';
	import { zodToJsonSchema } from 'zod-to-json-schema';
	import type { z } from 'zod';
	import { m } from '$lib/paraglide/messages.js';

	import FormString from '$lib/components/FormString.svelte';

	export interface Props {
		formValidated: SuperValidated<Infer<any>>;
		schema: z.ZodObject<any>;
	}

	let { formValidated, schema }: Props = $props();

	const form = superForm(formValidated, {
		validators: zodClient(schema)
	});
	const { form: formData, enhance } = form;

	const jsonSchema = zodToJsonSchema(schema) as {
		properties: Record<string, unknown>;
		required: string[];
	};

	let fields: Array<{ name: string } & Record<string, unknown>> = [];
	for (const key in jsonSchema.properties) {
		const properties = jsonSchema.properties[key] as Record<string, unknown>;
		if (jsonSchema.required.includes(key)) {
			properties.required = true;
		}
		fields.push({ ...{ name: key }, ...properties });
	}
	console.log(fields);
</script>

<form use:enhance class="mx-auto flex max-w-md flex-col" method="POST">
	{#each fields as field (field.name)}
		<FormString
			{form}
			{formData}
			field={field.name}
			type={(field.format as string) ?? 'text'}
			placeholder={m['form_' + field.name]()}
			description={(field.description as string) ?? undefined}
			required={(field.required as boolean) ?? false}
		/>
	{/each}
</form>
<SuperDebug data={$formData} />
