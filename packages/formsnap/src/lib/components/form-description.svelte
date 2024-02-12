<script lang="ts">
	import { getFormField } from '$lib/context.js';
	import { generateId } from '$lib/internal/utils/id.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		id?: string;
	};

	const { descriptionId, errors } = getFormField();

	export let id = generateId();

	$: descriptionId.set(id);
	$: attrs = {
		id: $descriptionId,
		'data-error': $errors.length > 0 ? '' : undefined
	};
</script>

<div {...attrs} {...$$restProps}>
	<slot />
</div>
