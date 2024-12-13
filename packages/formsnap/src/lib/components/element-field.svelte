<script lang="ts" module>
	import type { FormPathLeaves as _FormPathLeaves } from "sveltekit-superforms";
	type T = unknown;
	type U = unknown;
</script>

<script lang="ts" generics="T extends Record<string, unknown>, U extends _FormPathLeaves<T>">
	import { box } from "svelte-toolbelt";
	import type { ElementFieldProps } from "./types.js";
	import { useElementField } from "$lib/formsnap.svelte.js";

	let { form, name, children }: ElementFieldProps<T, U> = $props();

	const elementFieldState = useElementField({
		form: box.with(() => form),
		name: box.with(() => name),
	});
</script>

<!--
@component
## ElementField
A component that provides the necessary context for a form field that represents a single element in an array.

- [ElementField Documentation](https://formsnap.dev/docs/components/element-field)

### Snippet Props
- `value` - The value of the field.
- `errors` - The errors of the field.
- `tainted` - The tainted state of the field.
- `constraints` - The constraints of the field.

@param {SuperForm} form - The form object.
@param {FormPathLeaves<T>} name - The name and index of the field. For example, `urls[0]`.
-->

{@render children?.(elementFieldState.snippetProps)}
