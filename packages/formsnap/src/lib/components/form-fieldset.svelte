<script lang="ts">
	import { getFormField } from '$lib/context.js';
	import type { FieldsetProps } from './types.js';

	type $$Props = FieldsetProps;

	export let asChild: $$Props['asChild'] = false;
	export let el: $$Props['el'] = undefined;

	const { errors } = getFormField();

	$: fieldsetAttrs = {
		role: 'group',
		'data-fs-group': '',
		'data-fs-error': $errors.length > 0 ? '' : undefined,
		...$$restProps
	};
</script>

{#if asChild}
	<slot {fieldsetAttrs} />
{:else}
	<fieldset {...fieldsetAttrs} bind:this={el}>
		<slot {fieldsetAttrs} />
	</fieldset>
{/if}
