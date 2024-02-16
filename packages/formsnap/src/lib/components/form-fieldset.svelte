<script lang="ts">
	import { getFormField } from '$lib/context.js';
	import { getDataFsError } from '$lib/internal/utils/attributes.js';
	import type { FieldsetProps } from './types.js';
	import type { FieldsetAttrs } from '$lib/attrs.types.js';

	type $$Props = FieldsetProps;

	export let asChild: $$Props['asChild'] = false;
	export let el: $$Props['el'] = undefined;

	const { errors } = getFormField();

	$: fieldsetAttrs = {
		'data-fs-fieldset': '',
		'data-fs-error': getDataFsError($errors),
		...$$restProps
	} satisfies FieldsetAttrs;
</script>

{#if asChild}
	<slot {fieldsetAttrs} />
{:else}
	<fieldset {...fieldsetAttrs} bind:this={el}>
		<slot {fieldsetAttrs} />
	</fieldset>
{/if}
