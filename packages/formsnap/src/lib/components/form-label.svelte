<script lang="ts">
	import { getFormItem } from '$lib/context.js';
	import type { LabelProps } from './types.js';

	type $$Props = LabelProps;

	export let asChild: $$Props['asChild'] = false;

	const { labelAttrs: labelAttrsStore } = getFormItem();

	$: localLabelAttrs = {
		...$labelAttrsStore,
		...$$restProps
	};
</script>

{#if asChild}
	<slot labelAttrs={localLabelAttrs} />
{:else}
	<label {...localLabelAttrs}>
		<slot labelAttrs={localLabelAttrs} />
	</label>
{/if}
