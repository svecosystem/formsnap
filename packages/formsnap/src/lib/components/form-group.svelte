<script lang="ts">
	import { setFormGroup } from '$lib/context.js';
	import { writable } from 'svelte/store';

	export let asChild = false;

	const formGroupId = writable<string>();

	setFormGroup({
		id: formGroupId
	});

	$: groupAttrs = {
		role: 'group',
		'data-fs-group': '',
		'aria-labelledby': $formGroupId,
		...$$restProps
	};
</script>

{#if asChild}
	<slot {groupAttrs} />
{:else}
	<div {...groupAttrs}>
		<slot {groupAttrs} />
	</div>
{/if}
