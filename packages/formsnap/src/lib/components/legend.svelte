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

### Slot Props
- `legendAttrs` - A spreadable object of attributes for the legend element if `asChild` is `true`.

@param {boolean} [asChild=false] - Whether to opt out of rendering the legend element. [[asChild Docs](https://formsnap.dev/docs/composition/aschild)]
-->

{#if child}
	{@render child({ props: mergedProps })}
{:else}
	<legend {...mergedProps}>
		{@render children?.()}
	</legend>
{/if}
