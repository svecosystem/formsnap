<script lang="ts">
	import { createValidationAction, getCtx } from "@/lib/internal/index.js";
	import type { ValidationProps } from "../types.js";

	type $$Props = ValidationProps;

	const { ids, errors, hasValidation } = getCtx();

	const action = createValidationAction({
		id: ids.validation,
		hasValidation,
		attrs: {
			"aria-live": "assertive"
		}
	});
</script>

<span use:action {...$$restProps}>
	{#if $errors}
		{$errors}
	{/if}
</span>
