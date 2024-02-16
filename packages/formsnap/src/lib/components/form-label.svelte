<script lang="ts">
	import { getFormItem } from '$lib/context.js';
	import type { LabelProps } from './types.js';

	type $$Props = LabelProps;

	export let asChild: $$Props['asChild'] = false;
	export let el: $$Props['el'] = undefined;

	const { labelAttrs: labelAttrsStore } = getFormItem();

	$: localLabelAttrs = {
		...$labelAttrsStore,
		...$$restProps
	};
</script>

{#if asChild}
	<slot labelAttrs={localLabelAttrs} />
{:else}
	<label {...localLabelAttrs} bind:this={el}>
		<slot labelAttrs={localLabelAttrs} />
	</label>
{/if}
