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
		placeholder: string;
		description?: string;
	}

	let { form, formData, field, type, placeholder, description }: Props = $props();
</script>

<Field {form} name={field}>
	<Control>
		{#snippet children({ props })}
			<fieldset class="fieldset">
				{#if description}
					<legend class="fieldset-legend"><Description>{description}</Description></legend>
				{/if}
				<input class="input" {...props} {type} bind:value={$formData[field]} {placeholder} />
				<p class="fieldset-label">Optional</p>
			</fieldset>
		{/snippet}
	</Control>
	<FieldErrors />
</Field>
