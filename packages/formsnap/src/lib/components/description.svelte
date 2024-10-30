<script lang="ts">
	import { box, mergeProps } from "svelte-toolbelt";
	import type { DescriptionProps } from "./types.js";
	import { useId } from "$lib/internal/utils/index.js";
	import { useDescription } from "$lib/formsnap.svelte.js";

	let {
		id = useId(),
		ref = $bindable(null),
		children,
		child,
		...restProps
	}: DescriptionProps = $props();

	const descriptionState = useDescription({
		id: box.with(() => id),
		ref: box.with(
			() => ref,
			(v) => (ref = v)
		),
	});

	const mergedProps = $derived(mergeProps(restProps, descriptionState.props));
</script>

<!--
@component
## Description
A component that provides additional context for a field and is associated with the control using the `aria-describedby` attribute.

- [Description Documentation](https://formsnap.dev/docs/components/description)
-->

{#if child}
	{@render child({ props: mergedProps })}
{:else}
	<div {...mergedProps}>
		{@render children?.()}
	</div>
{/if}
