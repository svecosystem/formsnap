<script lang="ts">
	import { FORM_FIELD_CONTEXT, type FormFieldContext } from "@/lib/internal/index.js";
	import { getContext } from "svelte";

	const { formValidationId, errors } = getContext<FormFieldContext>(FORM_FIELD_CONTEXT);

	const attrs = {
		id: formValidationId,
		"aria-live": "assertive"
	} as const;
</script>

<span {...attrs} {...$$restProps}>
	{#if $errors}
		{$errors}
	{/if}
</span>
