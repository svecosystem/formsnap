<script lang="ts">
	import { getFormGroup } from '$lib/context.js';
	import { generateId } from '$lib/internal/utils/id.js';
	import type { GroupTitleProps } from './types.js';

	type $$Props = GroupTitleProps;

	export let id = generateId();
	export let asChild = false;

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
	<div {...$$restProps}>
		<slot {groupTitleAttrs} />
	</div>
{/if}
