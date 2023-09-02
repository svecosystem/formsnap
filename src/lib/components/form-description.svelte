<script lang="ts">
	import { getContext } from "svelte";
	import { FORM_FIELD_CONTEXT, type FormFieldContext } from "@/lib/internal/index.js";

	const { formDescriptionId, hasDescription } = getContext<FormFieldContext>(FORM_FIELD_CONTEXT);
	export let asChild = false;
	hasDescription.set(true);

	const attrs = {
		id: formDescriptionId
	};
</script>

{#if asChild}
	<slot {attrs} />
{:else}
	<p id={formDescriptionId} {...$$restProps}>
		<slot {attrs} />
	</p>
{/if}
