<script lang="ts">
	import { getFormField, getFormItem } from '$lib/context.js';
	import type { LabelProps } from './types.js';

	type $$Props = LabelProps;

	export let asChild: $$Props['asChild'] = false;

	const { errors } = getFormField();
	const { id } = getFormItem();

	$: labelAttrs = {
		for: $id,
		'data-fs-label': '',
		'data-error': $errors.length > 0 ? '' : undefined,
		...$$restProps
	};
</script>

{#if asChild}
	<slot {labelAttrs} />
{:else}
	<label {...labelAttrs}>
		<slot {labelAttrs} />
	</label>
{/if}
