<script lang="ts">
	import { box, mergeProps } from "svelte-toolbelt";
	import type { LegendProps } from "./types.js";
	import { useId } from "$lib/internal/utils/id.js";
	import { useLegend } from "$lib/formsnap.svelte.js";

	let {
		id = useId(),
		ref = $bindable(null),
		children,
		child,
		...restProps
	}: LegendProps = $props();

	const legendState = useLegend({
		id: box.with(() => id),
		ref: box.with(
			() => ref,
			(v) => (ref = v)
		),
	});

	const mergedProps = $derived(mergeProps(restProps, legendState.props));
</script>

<!--
@component
## Legend
A component that provides a title for a group of related form controls and should be used within a [Fieldset](https://formsnap.dev/docs/components/fieldset) component.

- [Legend Documentation](https://formsnap.dev/docs/components/legend)

### Snippet Props
- `props` - A spreadable object of attributes for the legend element if `child` snippet is used.
-->

{#if child}
	{@render child({ props: mergedProps })}
{:else}
	<legend {...mergedProps}>
		{@render children?.()}
	</legend>
{/if}
