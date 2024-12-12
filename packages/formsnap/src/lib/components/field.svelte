<script lang="ts" module>
	import type { FormPath as _FormPath } from "sveltekit-superforms";
	type T = unknown;
	type U = unknown;
</script>

<script lang="ts" generics="T extends Record<string, unknown>, U extends _FormPath<T>">
	import { box } from "svelte-toolbelt";
	import type { FieldProps } from "./types.js";
	import { useFormField } from "$lib/formsnap.svelte.js";

	let { form, name, children }: FieldProps<T, U> = $props();

	const fieldState = useFormField({
		form: box.with(() => form),
		name: box.with(() => name),
	});
</script>

<!--
@component
## Field
A component that provides the necessary context for a form field.

- [Field Documentation](https://formsnap.dev/docs/components/field)

### Snippet Props
- `value` - The value of the field.
- `errors` - The errors of the field.
- `tainted` - The tainted state of the field.
- `constraints` - The constraints of the field.

@param {SuperForm} form - The form object.
@param {FormPath<T>} name - The name of the field.
-->

{@render children?.(fieldState.snippetProps)}
