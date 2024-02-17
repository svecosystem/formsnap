<script lang="ts" context="module">
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import type { FormPath } from 'sveltekit-superforms';
	type T = Record<string, unknown>;
	type U = unknown;
</script>

<script lang="ts" generics="T extends Record<string, unknown>, U extends FormPath<T>">
	import { getDataFsError } from '$lib/internal/utils/attributes.js';
	import type { FieldsetProps } from './types.js';
	import type { SuperForm } from 'sveltekit-superforms';
	import Field from './field.svelte';

	type $$Props = FieldsetProps<T, U>;

	export let form: SuperForm<T>;
	export let name: U;

	export let asChild: $$Props['asChild'] = false;
	export let el: $$Props['el'] = undefined;

	$: fieldsetAttrs = {
		'data-fs-fieldset': '',
		...$$restProps
	};
</script>

<Field {form} {name} let:value let:errors let:tainted let:constraints>
	{#if asChild}
		<slot {fieldsetAttrs} {value} {errors} {tainted} {constraints} />
	{:else}
		<fieldset {...fieldsetAttrs} data-fs-error={getDataFsError(errors)} bind:this={el}>
			<slot {fieldsetAttrs} {value} {errors} {tainted} {constraints} />
		</fieldset>
	{/if}
</Field>
