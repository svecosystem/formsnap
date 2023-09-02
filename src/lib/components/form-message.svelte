<script lang="ts">
	import { FORM_FIELD_CONTEXT, type FormFieldContext } from "@/lib/internal/index.js";
	import { getContext } from "svelte";
	export let asChild = false;

	const { formMessageId, errors } = getContext<FormFieldContext>(FORM_FIELD_CONTEXT);

	const attrs = {
		id: formMessageId
	};
</script>

{#if asChild}
	<slot {attrs} errors={$errors} />
{:else if $errors}
	<p id={formMessageId} {...$$restProps}>
		{$errors}
	</p>
{/if}
