<script lang="ts">
	import { getContext } from "svelte";
	import { FORM_FIELD_CONTEXT, type FormFieldContext } from "$lib/internal/index.js";

	const { formDescriptionId } = getContext<FormFieldContext>(FORM_FIELD_CONTEXT);
	export let asChild = false;
	$: attrs = {
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
