<script lang="ts" context="module">
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import type { FormPathLeaves, FormPath } from 'sveltekit-superforms';
	type T = Record<string, unknown>;
	type U = unknown;
</script>

<script lang="ts" generics="T extends Record<string, unknown>, U extends FormPath<T>">
	import { setFormField } from '$lib/context.js';
	import { writable } from 'svelte/store';

	import type { SuperForm } from 'sveltekit-superforms';

	export let form: SuperForm<T>;
	export let name: U;

	$: ({
		errors: formErrors,
		constraints: formConstraints,
		tainted: formTainted,
		form: theForm,
		isTainted
	} = form);

	const fieldNameStore = writable<U>();
	const fieldErrorsStore = writable<string[]>([]);
	const fieldConstraintsStore = writable<Record<string, unknown>>({});
	const fieldTaintedStore = writable(false);
	const fieldValidationIdStore = writable<string | undefined>(undefined);
	const fieldDescriptionIdStore = writable<string | undefined>(undefined);

	$: fieldNameStore.set(name);
	$: fieldErrorsStore.set($formErrors[name] ?? []);
	$: fieldConstraintsStore.set($formConstraints[name] ?? {});
	$: fieldTaintedStore.set($formTainted ? isTainted($formTainted[name]) : false);

	setFormField<T>({
		form,
		name: fieldNameStore,
		errors: fieldErrorsStore,
		constraints: fieldConstraintsStore,
		tainted: fieldTaintedStore,
		validationId: fieldValidationIdStore,
		descriptionId: fieldDescriptionIdStore
	});
</script>

<slot value={$theForm[name]} />
