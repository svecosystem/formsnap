<script lang="ts">
	import { getFormField, setFormItem, type FormItemContext } from '$lib/context.js';
	import type { LabelAttrs, ControlAttrs } from '$lib/attrs.types.js';
	import {
		getAriaDescribedBy,
		getAriaRequired,
		getDataFsError,
		generateId
	} from '$lib/internal/utils/index.js';
	import { writable } from 'svelte/store';
	import type { ItemProps } from './types.js';

	type $$Props = ItemProps;

	export let id = generateId();

	const { name, validationId, descriptionId, errors, constraints } = getFormField();

	const itemContext: FormItemContext = {
		id: writable(id),
		attrs: writable<ControlAttrs>(),
		labelAttrs: writable<LabelAttrs>()
	};

	const { id: idStore } = itemContext;

	$: itemContext.id.set(id);

	setFormItem(itemContext);

	$: errorAttr = getDataFsError($errors);

	$: attrs = {
		name: $name,
		id: $idStore,
		'data-fs-error': errorAttr,
		'aria-describedby': getAriaDescribedBy({
			validationId: $validationId,
			descriptionId: $descriptionId,
			errors: $errors
		}),
		'aria-invalid': getAriaRequired($constraints),
		'aria-required': getAriaRequired($constraints),
		'data-fs-control': ''
	} satisfies ControlAttrs;

	$: labelAttrs = {
		for: $idStore,
		'data-fs-label': '',
		'data-fs-error': errorAttr
	} satisfies LabelAttrs;

	$: itemContext.attrs.set(attrs);
	$: itemContext.labelAttrs.set(labelAttrs);
</script>

<slot {attrs} />
