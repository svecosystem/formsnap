<script lang="ts" context="module">
	type T = Record<string, unknown>;
	type U = unknown;
</script>

<script lang="ts" generics="T extends Record<string, unknown>, U extends keyof T">
	import { setFormFieldCtx, type FieldIdObj } from '$lib/context.js';

	import { writable } from 'svelte/store';

	import { generateId } from '$lib/internal/utils/id.js';

	import type { SuperForm } from 'sveltekit-superforms';

	export let form: SuperForm<T>;
	export let name: U;
	export let id = generateId();

	const fieldIdStore = writable<FieldIdObj>({
		field: id
	});

	const fieldNameStore = writable<U>(name);

	$: if (name) {
		fieldNameStore.set(name);
	}

	$: setFormFieldCtx<T>({ form: form, ids: fieldIdStore, name: fieldNameStore });

	$: ({ form: theForm } = form);

	$: attrs = {
		id,
		name
	};
</script>

<slot value={$theForm[name]} {attrs} />
