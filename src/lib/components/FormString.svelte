<script lang="ts">
	import { Control, Field, FieldErrors, Label, Description } from 'formsnap';
	import type { SuperForm } from 'sveltekit-superforms';
	import type { SuperFormData } from 'sveltekit-superforms/client';

	export interface Props {
		// @ts-expect-error "because this component is generic and I don't know that form can be"
		form: SuperForm<any, any>;
		formData: SuperFormData<any>;
		field: string;
		type: string;
		name: string;
		description: string;
	}

	let { form, formData, field, type, name, description }: Props = $props();
</script>

<Field {form} name={field}>
	<Control>
		{#snippet children({ props })}
			<Label>{name}</Label>
			<input {...props} {type} bind:value={$formData[field]} />
		{/snippet}
	</Control>
	{#if description}
		<Description>{description}</Description>
	{/if}
	<FieldErrors />
</Field>
