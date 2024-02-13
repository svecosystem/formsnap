<script lang="ts" context="module">
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import type { FormPath } from 'sveltekit-superforms';
	type T = Record<string, unknown>;
	type U = unknown;
</script>

<script lang="ts" generics="T extends Record<string, unknown>, U extends FormPath<T>">
	import type { FieldProps } from './types.js';

	import { setFormField } from '$lib/context.js';
	import { writable } from 'svelte/store';

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

	const field = {
		name: writable<U>(name),
		errors: writable<string[]>([]),
		constraints: writable<Record<string, unknown>>({}),
		tainted: writable(false),
		validationId: writable<string | undefined>(undefined),
		descriptionId: writable<string | undefined>(undefined)
	};
	const { tainted } = field;

	$: field.name.set(name);
	$: field.errors.set($formErrors[name] ?? []);
	$: field.constraints.set($formConstraints[name] ?? {});
	$: field.tainted.set($formTainted ? isTainted($formTainted[name]) : false);

	setFormField<T>({
		form,
		...field
	});
</script>

<slot
	value={$formData[name]}
	errors={$formErrors[name]}
	tainted={$tainted}
	constraints={$formConstraints[name]}
/>
