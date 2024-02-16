<script lang="ts">
	import { getFormField } from '$lib/context.js';
	import { generateId } from '$lib/internal/utils/id.js';
	import type { DescriptionProps } from './types.js';

	type $$Props = DescriptionProps;

	const { descriptionId, errors } = getFormField();

	export let id: $$Props['id'] = generateId();
	export let asChild: $$Props['asChild'] = false;

	$: descriptionId.set(id);
	$: descriptionAttrs = {
		id: $descriptionId,
		'data-fs-error': $errors.length > 0 ? '' : undefined,
		'data-fs-description': '',
		...$$restProps
	};
</script>

{#if asChild}
	<slot {descriptionAttrs} />
{:else}
	<div {...descriptionAttrs}>
		<slot {descriptionAttrs} />
	</div>
{/if}
