<script lang="ts">
	import { Control, Field, FieldErrors, Description } from 'formsnap';
	import { m } from '$lib/paraglide/messages.js';
	import type { SuperForm } from 'sveltekit-superforms';
	import type { SuperFormData } from 'sveltekit-superforms/client';

	export type Props = {
		// @ts-expect-error "because this component is generic and I don't know that form can be"
		form: SuperForm<any, any>;
		formData: SuperFormData<any>;
		field: string;
		type: string;
		placeholder: string;
		description?: string;
		required?: boolean;
	};

	let { form, formData, field, type, placeholder, description, required = false }: Props = $props();
</script>

<Field {form} name={field}>
	<Control>
		{#snippet children({ props })}
			<fieldset class="fieldset">
				{#if description}
					<legend class="fieldset-legend"><Description>{description}</Description></legend>
				{/if}
				<input
					class="input"
					{...props}
					{type}
					bind:value={$formData[field]}
					{placeholder}
					{required}
				/>
				{#if required}
					<p class="fieldset-label">{m.form_required()}</p>
				{:else}
					<p class="fieldset-label">{m.form_optional()}</p>
				{/if}
			</fieldset>
		{/snippet}
	</Control>
	<FieldErrors />
</Field>
