<script lang="ts" module>
	import type { FormPath as _FormPath } from "sveltekit-superforms";
</script>

<script lang="ts" generics="T extends Record<string, unknown>, U extends _FormPath<T>">
	import { box, mergeProps, useRefById } from "svelte-toolbelt";
	import type { FieldsetProps } from "./types.js";
	import Field from "./field.svelte";
	import { getDataFsError } from "$lib/internal/utils/attributes.js";
	import { useId } from "$lib/internal/utils/id.js";

	let {
		id = useId(),
		ref = $bindable(null),
		form,
		name,
		child: childProp,
		children: childrenProp,
		...restProps
	}: FieldsetProps<T, U> = $props();

	useRefById({
		id: box.with(() => id),
		ref: box.with(
			() => ref,
			(v) => (ref = v)
		),
	});

	const mergedProps = $derived(
		mergeProps(restProps, {
			id,
			"data-fs-fieldset": "",
		})
	);
</script>

<!--
@component
## Fieldset
A component that groups related form controls or fields and extends the [Field](https://formsnap.dev/docs/components/field) component.

- [Fieldset Documentation](https://formsnap.dev/docs/components/fieldset)
- [Field Documentation](https://formsnap.dev/docs/components/field)

### Snippet Props
- `value` - The value of the field.
- `errors` - The errors of the field.
- `tainted` - The tainted state of the field.
- `constraints` - The constraints of the field.
- `props` - A spreadable object of attributes for the fieldset element if using the `child` snippet.

@param {SuperForm} form - The form object.
@param {FormPath<T>} name - The name of the field.
-->

<Field {form} {name}>
	{#snippet children(snippetProps)}
		{#if childProp}
			{@render childProp({ props: mergedProps, ...snippetProps })}
		{:else}
			<fieldset {...mergedProps} data-fs-error={getDataFsError(snippetProps.errors)}>
				{@render childrenProp?.(snippetProps)}
			</fieldset>
		{/if}
	{/snippet}
</Field>
