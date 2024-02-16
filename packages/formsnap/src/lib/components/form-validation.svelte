<script lang="ts">
	import { getFormField } from '$lib/context.js';
	import { getDataFsError, generateId } from '$lib/internal/utils/index.js';
	import type { ValidationProps } from './types.js';
	import type { ValidationAttrs, ValidationErrorAttrs } from '$lib/attrs.types.js';

	type $$Props = ValidationProps;

	const { validationId, errors } = getFormField();

	export let id = generateId();
	export let asChild: $$Props['asChild'] = false;
	export let el: $$Props['el'] = undefined;

	$: errorAttr = getDataFsError($errors);

	$: validationId.set(id);
	$: validationAttrs = {
		id: $validationId,
		'data-fs-error': errorAttr,
		'data-fs-validation': '',
		'aria-live': 'assertive' as const,
		...$$restProps
	} satisfies ValidationAttrs;

	$: validationErrorAttrs = {
		'data-fs-validation-error': '',
		'data-fs-error': errorAttr
	} satisfies ValidationErrorAttrs;
</script>

{#if asChild}
	<slot errors={$errors} {validationAttrs} {validationErrorAttrs} />
{:else}
	<div {...validationAttrs} bind:this={el}>
		<slot errors={$errors} {validationAttrs} {validationErrorAttrs}>
			{#each $errors as error}
				<div {...validationErrorAttrs}>{error}</div>
			{/each}
		</slot>
	</div>
{/if}
