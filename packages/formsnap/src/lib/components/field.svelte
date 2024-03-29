<script lang="ts" context="module">
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import type { FormPath } from 'sveltekit-superforms';
	type T = Record<string, unknown>;
	type U = unknown;
</script>

<script lang="ts" generics="T extends Record<string, unknown>, U extends FormPath<T>">
	import { getValueAtPath } from '$lib/internal/utils/path.js';

	import type { FieldProps } from './types.js';

	import { setFormField, type FieldContext } from '$lib/context.js';
	import { writable } from 'svelte/store';
	import { extractErrorArray } from '$lib/internal/utils/index.js';

	import type { SuperForm } from 'sveltekit-superforms';

	type $$Props = FieldProps<T, U>;

	export let form: SuperForm<T>;
	export let name: U;

	$: ({
		errors: formErrors,
		constraints: formConstraints,
		tainted: formTainted,
		form: formData
	} = form);

	const field: FieldContext<T, U> = {
		name: writable(name),
		errors: writable([]),
		constraints: writable({}),
		tainted: writable(false),
		fieldErrorsId: writable(),
		descriptionId: writable(),
		form
	};

	const { tainted, errors } = field;

	$: field.name.set(name);
	$: field.errors.set(extractErrorArray(getValueAtPath(name, $formErrors)));
	$: field.constraints.set(getValueAtPath(name, $formConstraints) ?? {});
	$: field.tainted.set($formTainted ? getValueAtPath(name, $formTainted) === true : false);

	setFormField<T, U>(field);
</script>

<!--
@component
## Field
A component that provides the necessary context for a form field.

- [Field Documentation](https://formsnap.dev/docs/components/field)

### Slot Props
- `value` - The value of the field.
- `errors` - The errors of the field.
- `tainted` - The tainted state of the field.
- `constraints` - The constraints of the field.

@param {SuperForm} form - The form object.
@param {FormPath<T>} name - The name of the field.
-->

<slot
	value={$formData[name]}
	errors={$errors}
	tainted={$tainted}
	constraints={$formConstraints[name]}
/>
