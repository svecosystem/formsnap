<script lang="ts">
	import type { DescriptionProps } from "./types.js";
	import { getFormField } from "$lib/context.js";
	import { getDataFsError, useId } from "$lib/internal/utils/index.js";
	import type { DescriptionAttrs } from "$lib/attrs.types.js";

	type $$Props = DescriptionProps;

	const { descriptionId, errors } = getFormField();

	export let id = useId();
	export let asChild: $$Props["asChild"] = false;
	export let el: $$Props["el"] = undefined;

	$: descriptionId.set(id);
	$: descriptionAttrs = {
		id: $descriptionId,
		"data-fs-error": getDataFsError($errors),
		"data-fs-description": "",
		...$$restProps,
	} satisfies DescriptionAttrs;
</script>

<!--
@component
## Description
A component that provides additional context for a field and is associated with the control using the `aria-describedby` attribute.

- [Description Documentation](https://formsnap.dev/docs/components/description)

### Slot Props
- `descriptionAttrs` - A spreadable object of attributes for the description element if `asChild` is `true`.

@param {string} [id] - The id of the description element.
@param {el} [HTMLElement] - Bind to the description element.
@param {boolean} [asChild=false] - Whether to opt out of rendering the description element. [[asChild Docs](https://formsnap.dev/docs/composition/aschild)]
-->

{#if asChild}
	<slot {descriptionAttrs} />
{:else}
	<div {...descriptionAttrs} bind:this={el}>
		<slot {descriptionAttrs} />
	</div>
{/if}
