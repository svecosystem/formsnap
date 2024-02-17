<script lang="ts">
	import { getFormField, setFormControl, type FormControlContext } from '$lib/context.js';
	import type { LabelAttrs, ControlAttrs } from '$lib/attrs.types.js';
	import {
		getAriaDescribedBy,
		getAriaRequired,
		getDataFsError,
		generateId,
		getAriaInvalid
	} from '$lib/internal/utils/index.js';
	import { writable } from 'svelte/store';
	import type { ControlProps } from './types.js';

	type $$Props = ControlProps;

	export let id = generateId();

	const { name, fieldErrorsId, descriptionId, errors, constraints } = getFormField();

	const controlContext: FormControlContext = {
		id: writable(id),
		attrs: writable<ControlAttrs>(),
		labelAttrs: writable<LabelAttrs>()
	};

	const { id: idStore } = controlContext;

	$: controlContext.id.set(id);

	setFormControl(controlContext);

	$: errorAttr = getDataFsError($errors);

	$: attrs = {
		name: $name,
		id: $idStore,
		'data-fs-error': errorAttr,
		'aria-describedby': getAriaDescribedBy({
			fieldErrorsId: $fieldErrorsId,
			descriptionId: $descriptionId,
			errors: $errors
		}),
		'aria-invalid': getAriaInvalid($errors),
		'aria-required': getAriaRequired($constraints),
		'data-fs-control': ''
	} satisfies ControlAttrs;

	$: labelAttrs = {
		for: $idStore,
		'data-fs-label': '',
		'data-fs-error': errorAttr
	} satisfies LabelAttrs;

	$: controlContext.attrs.set(attrs);
	$: controlContext.labelAttrs.set(labelAttrs);
</script>

<slot {attrs} />
