<script lang="ts" context="module">
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type T = Record<string, unknown>;
	type U = unknown;
</script>

<script lang="ts" generics="T extends Record<string, unknown>, U extends keyof T">
	import type { SuperForm } from 'sveltekit-superforms';

	export let config: SuperForm<T>;
	const { form } = config;

	export let name: U;

	const value = $form[name] as T[U];
</script>

<slot {value} />
