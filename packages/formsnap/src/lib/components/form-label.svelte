<script lang="ts">
	import { getFormField, getFormItem } from '$lib/context.js';
	import type { HTMLLabelAttributes } from 'svelte/elements';

	type $$Props = HTMLLabelAttributes;

	const { errors } = getFormField();
	const { id } = getFormItem();

	$: attrs = {
		for: $id,
		'data-fs-label': '',
		'data-error': $errors.length > 0 ? '' : undefined
	};
</script>

<label {...attrs} {...$$restProps}>
	<slot {attrs} />
</label>
