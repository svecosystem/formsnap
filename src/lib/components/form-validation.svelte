<script lang="ts">
	import { createValidationAction, getCtx } from "@/lib/internal/index.js";
	import type { ValidationProps } from "../types.js";

	type $$Props = ValidationProps;

	export let tag = "p"

	const { ids, errors, hasValidation } = getCtx();

	const action = createValidationAction({
		id: ids.validation,
		hasValidation,
		attrs: {
			"aria-live": "assertive"
		}
	});
</script>

<svelte:element this={tag} use:action {...$$restProps}>
	{#if $errors}
		{$errors}
	{/if}
</svelte:element>
