<script lang="ts">
	import { getFormField } from '$lib/context.js';
	import { getDataFsError } from '$lib/internal/utils/attributes.js';
	import type { LegendProps } from './types.js';
	import type { LegendAttrs } from '$lib/attrs.types.js';

	type $$Props = LegendProps;

	export let asChild = false;
	export let el: $$Props['el'] = undefined;

	const { errors } = getFormField();

	$: legendAttrs = {
		'data-fs-legend': '',
		'data-fs-error': getDataFsError($errors),
		...$$restProps
	} satisfies LegendAttrs;
</script>

<!--
@component
## Legend
A component that provides a title for a group of related form controls and should be used within a [Fieldset](https://formsnap.dev/docs/components/fieldset) component.

- [Legend Documentation](https://formsnap.dev/docs/components/legend)

### Slot Props
- `legendAttrs` - A spreadable object of attributes for the legend element if `asChild` is `true`.

@param {boolean} [asChild=false] - Whether to opt out of rendering the legend element. [[asChild Docs](https://formsnap.dev/docs/aschild)]
-->

{#if asChild}
	<slot {legendAttrs} />
{:else}
	<legend {...legendAttrs} bind:this={el}>
		<slot {legendAttrs} />
	</legend>
{/if}
