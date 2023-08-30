<script lang="ts">
	import { FORM_FIELD_CONTEXT, type FormFieldContext } from "$lib/internal/index.js";
	import { getContext } from "svelte";
	import type { HTMLSelectAttributes } from "svelte/elements";

	type $$Props = HTMLSelectAttributes;

	const { formItemId, value } = getContext<FormFieldContext>(FORM_FIELD_CONTEXT);
</script>

<select id={formItemId} {...$$restProps} bind:value={$value}>
	<slot />
</select>
