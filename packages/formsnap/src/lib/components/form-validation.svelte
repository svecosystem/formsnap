<script lang="ts">
	import { getFormField } from '$lib/context.js';
	import { generateId } from '$lib/internal/utils/id.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		id?: string;
	};

	const { validationId, errors } = getFormField();

	export let id = generateId();

	$: errorAttr = $errors.length > 0 ? '' : undefined;

	$: validationId.set(id);
	$: validationAttrs = {
		id: $validationId,
		'data-fs-error': errorAttr,
		'data-fs-validation': '',
		'aria-live': 'assertive' as const,
		...$$restProps
	};
</script>

<div {...validationAttrs}>
	<slot errors={$errors}>
		{#each $errors as error}
			<div data-fs-validation-error="" data-fs-error={errorAttr}>{error}</div>
		{/each}
	</slot>
</div>
