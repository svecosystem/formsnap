<script lang="ts" context="module">
	type T = Record<string, unknown>;
	type U = unknown;
</script>

<script lang="ts" generics="T extends Record<string, unknown>, U extends keyof T">
	import { setFormFieldCtx, type FieldIdObj } from '$lib/context.js';

	import { writable } from 'svelte/store';

	import { generateId } from '$lib/internal/utils/id.js';

	import type { SuperForm } from 'sveltekit-superforms';

	export let config: SuperForm<T>;
	export let name: U;
	export let id = generateId();

	const fieldIdStore = writable<FieldIdObj>({
		field: id
	});

	setFormFieldCtx<T>({ form: config, ids: fieldIdStore });

	$: ({ form } = config);

	$: attrs = {
		id
	};
</script>

<slot value={$form[name]} {attrs} />
