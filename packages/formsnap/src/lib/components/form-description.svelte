<script lang="ts">
	import { getFormField } from '$lib/context.js';
	import { getDataFsError, generateId } from '$lib/internal/utils/index.js';
	import type { DescriptionProps } from './types.js';
	import type { DescriptionAttrs } from '$lib/attrs.types.js';

	type $$Props = DescriptionProps;

	const { descriptionId, errors } = getFormField();

	export let id = generateId();
	export let asChild: $$Props['asChild'] = false;
	export let el: $$Props['el'] = undefined;

	$: descriptionId.set(id);
	$: descriptionAttrs = {
		id: $descriptionId,
		'data-fs-error': getDataFsError($errors),
		'data-fs-description': '',
		...$$restProps
	} satisfies DescriptionAttrs;
</script>

{#if asChild}
	<slot {descriptionAttrs} />
{:else}
	<div {...descriptionAttrs} bind:this={el}>
		<slot {descriptionAttrs} />
	</div>
{/if}
