<script lang="ts">
	import { FORM_FIELD_CONTEXT, type FormFieldContext } from "$lib/internal/index.js";
	import { getContext } from "svelte";
	import type { HTMLInputAttributes } from "svelte/elements";

	type $$Props = HTMLInputAttributes & {
		value?: any;
		asChild?: boolean;
	};

	const { formItemId, value } = getContext<FormFieldContext>(FORM_FIELD_CONTEXT);
	export let asChild = false;

	function action(node: HTMLInputElement) {
		node.id = formItemId;
		node.addEventListener("input", (e) => {
			if (e.currentTarget instanceof HTMLInputElement) {
				value.set(e.currentTarget.value);
			}
		});
	}
</script>

{#if asChild}
	<slot id={formItemId} {action} />
{:else}
	<input id={formItemId} {...$$restProps} bind:value={$value} />
{/if}
