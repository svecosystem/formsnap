<script lang="ts">
	import { getFormField, getCleansedErrors } from "@/lib/index.js";
	import type { ValidationProps } from "../types.js";

	type $$Props = ValidationProps;
	export let tag = "p";
	const { actions, errors, ids } = getFormField();

	$: internalErrors = getCleansedErrors($errors);

	$: attrs = {
		"data-fs-validation": "",
		"data-fs-error": internalErrors ? "" : undefined,
		id: $ids.validation
	};
</script>

<svelte:element this={tag} use:actions.validation {...attrs} {...$$restProps}>
	{#if internalErrors}
		{internalErrors}
	{/if}
</svelte:element>
