<script lang="ts" context="module">
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import type { FormPath } from 'sveltekit-superforms';
	type T = Record<string, unknown>;
	type U = unknown;
</script>

<script lang="ts" generics="T extends Record<string, unknown>, U extends FormPath<T>">
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
		form: formData,
		isTainted
	} = form);

	const field: FieldContext<T, U> = {
		name: writable<U>(name),
		errors: writable<string[]>([]),
		constraints: writable<Record<string, unknown>>({}),
		tainted: writable(false),
		fieldErrorsId: writable<string>(),
		descriptionId: writable<string>(),
		form
	};

	const { tainted, errors } = field;

	$: field.name.set(name);
	$: field.errors.set(extractErrorArray($formErrors[name]));
	$: field.constraints.set($formConstraints[name] ?? {});
	$: field.tainted.set($formTainted ? isTainted($formTainted[name]) : false);

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
