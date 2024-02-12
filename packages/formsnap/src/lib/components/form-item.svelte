<script lang="ts">
	import { getFormField, setFormItem } from '$lib/context.js';
	import { getAriaDescribedBy } from '$lib/internal/utils/aria.js';
	import { generateId } from '$lib/internal/utils/id.js';
	import { writable } from 'svelte/store';

	export let id = generateId();

	const { name, validationId, descriptionId, errors } = getFormField();

	const itemIdStore = writable(id);

	$: itemIdStore.set(id);

	setFormItem({ id: itemIdStore });

	$: attrs = {
		name: $name,
		id: $itemIdStore,
		'aria-describedBy': getAriaDescribedBy({
			validationId: $validationId,
			descriptionId: $descriptionId,
			errors: $errors
		}),
		'aria-invalid': $errors.length > 0 ? ('true' as const) : undefined,
		'data-invalid': $errors.length > 0 ? '' : undefined
	};
</script>

<slot {attrs} />
