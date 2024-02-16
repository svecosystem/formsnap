<script lang="ts">
	import { getFormField } from '$lib/context.js';
	import { generateId } from '$lib/internal/utils/id.js';
	import type { ValidationProps } from './types.js';

	type $$Props = ValidationProps

	const { validationId, errors } = getFormField();

	export let id = generateId();
	export let asChild: $$Props["asChild"] = false

	$: errorAttr = $errors.length > 0 ? '' : undefined;

	$: validationId.set(id);
	$: validationAttrs = {
		id: $validationId,
		'data-fs-error': errorAttr,
		'data-fs-validation': '',
		'aria-live': 'assertive' as const,
		...$$restProps
	};

	$: validationErrorAttrs = {
		'data-fs-validation-error': '',
		'data-fs-error': errorAttr
	};
</script>

{#if asChild}
	<slot errors={$errors} />
{:else}
<div {...validationAttrs}>
	<slot errors={$errors}>
		{#each $errors as error}
			<div {...validationErrorAttrs}>{error}</div>
		{/each}
	</slot>
</div>
{/if}
