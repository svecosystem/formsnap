<script lang="ts">
	import { getFormField, setFormItem } from '$lib/context.js';
	import { getAriaDescribedBy } from '$lib/internal/utils/aria.js';
	import { generateId } from '$lib/internal/utils/id.js';
	import { writable } from 'svelte/store';
	import type { ItemProps } from './types.js';

	type $$Props = ItemProps;

	export let id = generateId();

	const { name, validationId, descriptionId, errors } = getFormField();

	const itemContext = {
		id: writable(id),
		attrs: writable<Record<string, unknown>>({}),
		labelAttrs: writable<Record<string, unknown>>({})
	};
	const { id: idStore } = itemContext;

	$: itemContext.id.set(id);

	setFormItem(itemContext);

	$: hasErrors = $errors.length > 0;

	$: attrs = {
		name: $name,
		id: $idStore,
		'aria-describedBy': getAriaDescribedBy({
			validationId: $validationId,
			descriptionId: $descriptionId,
			errors: $errors
		}),
		'aria-invalid': hasErrors ? ('true' as const) : undefined,
		'data-error': hasErrors ? '' : undefined
	};

	$: labelAttrs = {
		for: $idStore,
		'data-fs-label': '',
		'data-error': hasErrors ? '' : undefined
	};

	$: itemContext.attrs.set(attrs);
	$: itemContext.labelAttrs.set(labelAttrs);
</script>

<slot {attrs} />
