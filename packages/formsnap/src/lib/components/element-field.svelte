<script lang="ts" context="module">
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import type { FormPathArrays, FormPathLeaves } from 'sveltekit-superforms';
	type T = Record<string, unknown>;
	type U = unknown;
</script>

<script lang="ts" generics="T extends Record<string, unknown>, U extends FormPathLeaves<T>">
	import { getValueAtPath } from '$lib/internal/utils/path.js';

	import type { ElementFieldProps } from './types.js';
	import type { PrimitiveFromIndex } from '$lib/internal/types.js';

	import { setFormField, type FieldContext, getFormField } from '$lib/context.js';
	import { writable } from 'svelte/store';
	import { extractErrorArray } from '$lib/internal/utils/index.js';

	import type { SuperForm } from 'sveltekit-superforms';

	type $$Props = ElementFieldProps<T, U>;

	export let form: SuperForm<T>;
	export let name: U;

	$: ({
		errors: formErrors,
		constraints: formConstraints,
		tainted: formTainted,
		form: formData
	} = form);

	// If the individual array field doesn't have a description, use the parent's description
	const { descriptionId: parentDescriptionId } = getFormField();

	$: [path] = splitArrayPath(name);

	const elementField: FieldContext<T, U> = {
		name: writable<U>(path as U),
		errors: writable<string[]>([]),
		constraints: writable<Record<string, unknown>>({}),
		tainted: writable(false),
		fieldErrorsId: writable<string>(),
		descriptionId: writable<string>($parentDescriptionId),
		form
	};

	const { tainted, errors, descriptionId } = elementField;

	// takes a string like "urls[0]" and returns ["urls", "0"]
	// so we can access the specific array index properties
	// since datatype: json is not supported with regular form
	// submission, this should be fine
	function splitArrayPath(name: string) {
		const [path, index] = name.split(/[[\]]/);
		return [path, index] as [FormPathArrays<T>, string];
	}

	$: elementField.name.set(path as U);
	$: errors.set(extractErrorArray(getValueAtPath(name, $formErrors)));
	$: elementField.constraints.set(getValueAtPath(name, $formConstraints) ?? {});
	$: tainted.set(
		$formTainted ? (getValueAtPath(name, $formTainted) === true ? true : false) : false
	);

	// If the individual array field doesn't have a description, use the parent's description
	// this allows for `FieldSet` or `Field` to have a description and not require it on each
	// child field.
	$: if (!$descriptionId && $parentDescriptionId) {
		elementField.descriptionId.set($parentDescriptionId);
	}

	setFormField<T, U>(elementField);

	$: value = getValueAtPath(name, $formData) as PrimitiveFromIndex<T, U>;
</script>

<!--
@component
## ElementField
A component that provides the necessary context for a form field that represents a single element in an array.

- [ElementField Documentation](https://formsnap.dev/docs/components/element-field)

### Slot Props
- `value` - The value of the field.
- `errors` - The errors of the field.
- `tainted` - The tainted state of the field.
- `constraints` - The constraints of the field.

@param {SuperForm} form - The form object.
@param {FormPathLeaves<T>} name - The name and index of the field. For example, `urls[0]`.
-->

<slot {value} errors={$errors} tainted={$tainted} constraints={$formConstraints[name]} />
