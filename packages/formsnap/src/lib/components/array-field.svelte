<script lang="ts" context="module">
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import type { FormPathArrays, FormPathLeaves } from 'sveltekit-superforms';
	type T = Record<string, unknown>;
	type U = unknown;
</script>

<script lang="ts" generics="T extends Record<string, unknown>, U extends FormPathLeaves<T>">
	import type { ArrayFieldProps } from './types.js';
	import type { PrimitiveFromIndex } from '$lib/internal/types.js';

	import { setFormField, type FormFieldContext, getFormField } from '$lib/context.js';
	import { writable } from 'svelte/store';
	import { extractErrorArray } from '$lib/internal/utils/index.js';

	import type { SuperForm } from 'sveltekit-superforms';

	type $$Props = ArrayFieldProps<T, U>;

	export let form: SuperForm<T>;
	export let name: U;

	$: ({
		errors: formErrors,
		constraints: formConstraints,
		tainted: formTainted,
		form: formData,
		isTainted
	} = form);

	// If the individual array field doesn't have a description, use the parent's description
	const { descriptionId: parentDescriptionId } = getFormField();

	$: [path, index] = splitArrayPath(name);

	const arrayField: FormFieldContext<T, U> = {
		name: writable<U>(path as U),
		errors: writable<string[]>([]),
		constraints: writable<Record<string, unknown>>({}),
		tainted: writable(false),
		fieldErrorsId: writable<string>(),
		descriptionId: writable<string>($parentDescriptionId),
		form
	};

	const { tainted, errors, descriptionId } = arrayField;

	// takes a string like "urls[0]" and returns ["urls", "0"]
	// so we can access the specific array index properties
	function splitArrayPath(name: string) {
		const [path, index] = name.split(/[[\]]/);
		return [path, index] as [FormPathArrays<T>, string];
	}

	$: arrayField.name.set(path as U);
	//@ts-expect-error - this works but ideally we'd type this better
	$: arrayField.errors.set(extractErrorArray($formErrors?.[path]?.[index]));
	$: arrayField.constraints.set($formConstraints[path] ?? {});
	// @ts-expect-error - this works but ideally we'd type this better
	$: arrayField.tainted.set($formTainted ? isTainted($formTainted?.[path]?.[index]) : false);

	// If the individual array field doesn't have a description, use the parent's description
	$: if (!$descriptionId && $parentDescriptionId) {
		arrayField.descriptionId.set($parentDescriptionId);
	}

	setFormField<T, U>(arrayField);

	// @ts-expect-error - this works but ideally we'd type this better though unsure how atm
	$: value = $formData?.[path]?.[index] as PrimitiveFromIndex<T, U>;
</script>

<slot {value} errors={$errors} tainted={$tainted} constraints={$formConstraints[name]} />
