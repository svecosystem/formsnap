<script lang="ts">
	import { FORM_FIELD_CONTEXT, type FormFieldContext } from "$lib/internal/index.js";
	import { getContext } from "svelte";
	import type { HTMLTextareaAttributes } from "svelte/elements";

	type $$Props = HTMLTextareaAttributes;

	const { formItemId, value } = getContext<FormFieldContext>(FORM_FIELD_CONTEXT);
</script>

<textarea id={formItemId} {...$$restProps} bind:value={$value} />
