<script lang="ts">
	import { getFormField } from '$lib/context.js';
	import { getDataFsError, generateId } from '$lib/internal/utils/index.js';
	import type { ValidationErrorProps } from './types.js';
	import type { FieldErrorsAttrs, ErrorAttrs } from '$lib/attrs.types.js';

	type $$Props = ValidationErrorProps;

	const { fieldErrorsId, errors } = getFormField();

	export let id = generateId();
	export let asChild: $$Props['asChild'] = false;
	export let el: $$Props['el'] = undefined;

	$: errorAttr = getDataFsError($errors);

	$: fieldErrorsId.set(id);
	$: fieldErrorsAttrs = {
		id: $fieldErrorsId,
		'data-fs-error': errorAttr,
		'data-fs-field-errors': '',
		'aria-live': 'assertive' as const,
		...$$restProps
	} satisfies FieldErrorsAttrs;

	$: errorAttrs = {
		'data-fs-field-error': '',
		'data-fs-error': errorAttr
	} satisfies ErrorAttrs;
</script>

{#if asChild}
	<slot errors={$errors} {fieldErrorsAttrs} {errorAttrs} />
{:else}
	<div {...fieldErrorsAttrs} bind:this={el}>
		<slot errors={$errors} {fieldErrorsAttrs} {errorAttrs}>
			{#each $errors as error}
				<div {...errorAttrs}>{error}</div>
			{/each}
		</slot>
	</div>
{/if}
