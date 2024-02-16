<script lang="ts">
	import { getFormField } from '$lib/context.js';
	import type { LegendProps } from './types.js';

	type $$Props = LegendProps;

	export let asChild = false;
	export let el: $$Props['el'] = undefined;

	const { errors } = getFormField();

	$: legendAttrs = {
		'data-fs-legend': '',
		'data-fs-error': $errors.length > 0 ? '' : undefined,
		...$$restProps
	};
</script>

{#if asChild}
	<slot {legendAttrs} />
{:else}
	<legend {...$$restProps} bind:this={el}>
		<slot {legendAttrs} />
	</legend>
{/if}
