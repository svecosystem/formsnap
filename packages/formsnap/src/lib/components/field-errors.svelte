<script lang="ts">
	import { getFormField } from '$lib/context.js';
	import { getDataFsError, generateId } from '$lib/internal/utils/index.js';
	import type { FieldErrorsProps } from './types.js';
	import type { FieldErrorsAttrs, ErrorAttrs } from '$lib/attrs.types.js';

	type $$Props = FieldErrorsProps;

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

<!--
@component
## FieldErrors
A component that renders the container for validation errors for a [Field](https://formsnap.dev/docs/components/field), [Fieldset](https://formsnap.dev/docs/components/fieldset), or [ElementField](https://formsnap.dev/docs/components/element-field).

- [FieldErrors Documentation](https://formsnap.dev/docs/components/field-errors)

### Slot Props
- `errors` - An array of errors for the associated field.
- `fieldErrorsAttrs` - A spreadable object of attributes for the container element if `asChild` is `true`.
- `errorAttrs` - A spreadable object of attributes for the individual error elements if `asChild` is `true`.

@param {string} [id] - The id of the field errors container.
@param {el} [HTMLElement] - Bind to the field errors container element.
@param {boolean} [asChild=false] - Whether to opt out of rendering the description element. [[asChild Docs](https://formsnap.dev/docs/aschild)]
-->

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
