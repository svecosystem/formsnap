<script lang="ts">
	import { getFormField, setFormGroup } from '$lib/context.js';
	import { writable } from 'svelte/store';
	import type { GroupProps } from './types.js';

	type $$Props = GroupProps;

	export let asChild = false;
	export let el: $$Props['el'] = undefined;

	const formGroupId = writable<string>();
	const { errors } = getFormField();

	setFormGroup({
		id: formGroupId
	});

	$: groupAttrs = {
		role: 'group',
		'data-fs-group': '',
		'data-fs-error': $errors.length > 0 ? '' : undefined,
		'aria-labelledby': $formGroupId,
		...$$restProps
	};
</script>

{#if asChild}
	<slot {groupAttrs} />
{:else}
	<div {...groupAttrs} bind:this={el}>
		<slot {groupAttrs} />
	</div>
{/if}
