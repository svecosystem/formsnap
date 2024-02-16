<script lang="ts">
	import { getFormItem } from '$lib/context.js';
	import type { LabelProps } from './types.js';
	import type { LabelAttrs } from '$lib/attrs.types.js';

	type $$Props = LabelProps;

	export let asChild = false;
	export let el: $$Props['el'] = undefined;

	const { labelAttrs: labelAttrsStore } = getFormItem();

	$: localLabelAttrs = {
		...$labelAttrsStore,
		...$$restProps
	} satisfies LabelAttrs;
</script>

{#if asChild}
	<slot labelAttrs={localLabelAttrs} />
{:else}
	<label {...localLabelAttrs} bind:this={el}>
		<slot labelAttrs={localLabelAttrs} />
	</label>
{/if}
