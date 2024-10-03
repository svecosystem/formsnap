<script lang="ts">
	import { box, mergeProps } from "svelte-toolbelt";
	import type { FieldErrorsProps } from "./types.js";
	import { useId } from "$lib/internal/utils/index.js";
	import { useFieldErrors } from "$lib/formsnap.svelte.js";

	let {
		id = useId(),
		ref = $bindable(null),
		children,
		child,
		...restProps
	}: FieldErrorsProps = $props();

	const fieldErrorsState = useFieldErrors({
		id: box.with(() => id),
		ref: box.with(
			() => ref,
			(v) => (ref = v)
		),
	});

	const mergedProps = $derived(mergeProps(restProps, fieldErrorsState.fieldErrorsProps));
</script>

<!--
@component
## FieldErrors
A component that renders the container for validation errors for a [Field](https://formsnap.dev/docs/components/field), [Fieldset](https://formsnap.dev/docs/components/fieldset), or [ElementField](https://formsnap.dev/docs/components/element-field).

- [FieldErrors Documentation](https://formsnap.dev/docs/components/field-errors)

### Snippet Props
- `errors` - An array of errors for the associated field.
- `fieldErrorsAttrs` - A spreadable object of attributes for the container element if `asChild` is `true`.
- `errorAttrs` - A spreadable object of attributes for the individual error elements if `asChild` is `true`.

@param {string} [id] - The id of the field errors container.
@param {el} [HTMLElement] - Bind to the field errors container element.
@param {boolean} [asChild=false] - Whether to opt out of rendering the description element. [[asChild Docs](https://formsnap.dev/docs/composition/aschild)]
-->
{#if child}
	{@render child({
		props: mergedProps,
		errors: fieldErrorsState.field.errors,
		errorProps: fieldErrorsState.errorProps,
	})}
{:else}
	<div {...mergedProps}>
		{#if children}
			{@render children({
				errorProps: fieldErrorsState.errorProps,
				errors: fieldErrorsState.field.errors,
			})}
		{:else}
			{#each fieldErrorsState.field.errors as error}
				<div {...fieldErrorsState.errorProps}>{error}</div>
			{/each}
		{/if}
	</div>
{/if}
