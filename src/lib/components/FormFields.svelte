<script lang="ts">
	import FormString from '$lib/components/FormString.svelte';
	import type { SuperForm } from 'sveltekit-superforms';
	import type { SuperFormData } from 'sveltekit-superforms/client';

	export interface Props {
		form: SuperForm<any, any>;
		formData: SuperFormData<any>;
		fields: Array<{
			name: string;
			placeholder: string;
			format?: string;
			description?: string;
			required: boolean;
		}>;
	}

	let { form, formData, fields }: Props = $props();
</script>

<div>
	{#each fields as field (field.name)}
		<FormString
			{form}
			{formData}
			field={field.name}
			type={(field.format as string) ?? 'text'}
			placeholder={field.placeholder}
			description={(field.description as string) ?? undefined}
			required={field.required}
		/>
	{/each}
</div>
