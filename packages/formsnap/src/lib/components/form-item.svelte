<script lang="ts">
	import { getFormField, setFormItem } from '$lib/context.js';
	import { getAriaDescribedBy } from '$lib/internal/utils/aria.js';
	import { generateId } from '$lib/internal/utils/id.js';
	import { writable } from 'svelte/store';
	import type { ItemProps } from './types.js';

	type $$Props = ItemProps;

	export let id = generateId();

	const { name, validationId, descriptionId, errors } = getFormField();

	const itemIdStore = writable(id);

	$: itemIdStore.set(id);

	setFormItem({ id: itemIdStore });

	$: hasErrors = $errors.length > 0;

	$: attrs = {
		name: $name,
		id: $itemIdStore,
		'aria-describedBy': getAriaDescribedBy({
			validationId: $validationId,
			descriptionId: $descriptionId,
			errors: $errors
		}),
		'aria-invalid': hasErrors ? ('true' as const) : undefined,
		'data-error': hasErrors ? '' : undefined
	};
</script>

<slot {attrs} />
