<script lang="ts">
	import { getContext } from "svelte";
	import { FORM_FIELD_CONTEXT, type FormFieldContext, labelAction } from "@/lib/internal/index.js";

	const { formItemId } = getContext<FormFieldContext>(FORM_FIELD_CONTEXT);

	export let asChild = false;

	const attrs = {
		id: formItemId
	};
</script>

{#if asChild}
	<slot {attrs} />
{:else}
	<label for={formItemId} use:labelAction>
		<slot />
	</label>
{/if}
