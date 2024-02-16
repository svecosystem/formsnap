<script lang="ts">
	import { getFormField, getFormGroup } from '$lib/context.js';
	import { generateId } from '$lib/internal/utils/id.js';
	import type { GroupTitleProps } from './types.js';

	type $$Props = GroupTitleProps;

	export let id = generateId();
	export let asChild = false;
	export let el: $$Props['el'] = undefined;

	const { id: groupId } = getFormGroup();
	const { errors } = getFormField();

	$: groupId.set(id);

	$: groupTitleAttrs = {
		id: $groupId,
		'data-fs-group-title': '',
		'data-fs-error': $errors.length > 0 ? '' : undefined,
		...$$restProps
	};
</script>

{#if asChild}
	<slot {groupTitleAttrs} />
{:else}
	<div {...$$restProps} bind:this={el}>
		<slot {groupTitleAttrs} />
	</div>
{/if}
