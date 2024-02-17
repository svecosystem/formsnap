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

{#if asChild}
	<slot {legendAttrs} />
{:else}
	<legend {...legendAttrs} bind:this={el}>
		<slot {legendAttrs} />
	</legend>
{/if}
