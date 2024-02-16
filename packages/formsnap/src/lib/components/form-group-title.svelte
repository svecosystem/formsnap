<script lang="ts">
	import { getFormGroup } from '$lib/context.js';
	import { generateId } from '$lib/internal/utils/id.js';
	import type { GroupTitleProps } from './types.js';

	type $$Props = GroupTitleProps;

	export let id = generateId();
	export let asChild = false;
	export let el: $$Props['el'] = undefined;

	const { id: groupId } = getFormGroup();

	$: groupId.set(id);

	$: groupTitleAttrs = {
		id: $groupId,
		'data-fs-group-title': '',
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
