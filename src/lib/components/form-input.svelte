<script lang="ts">
	import { FORM_FIELD_CONTEXT, type FormFieldContext } from "$lib/internal/index.js";
	import { getContext } from "svelte";
	import type { HTMLInputAttributes } from "svelte/elements";

	type $$Props = HTMLInputAttributes;

	const { formItemId, value } = getContext<FormFieldContext>(FORM_FIELD_CONTEXT);
</script>

<input id={formItemId} {...$$restProps} bind:value={$value} />
