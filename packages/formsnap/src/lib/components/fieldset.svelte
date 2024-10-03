<script lang="ts" context="module">
	import type { FormPath as _FormPath } from "sveltekit-superforms";
	type T = Record<string, unknown>;
	type U = unknown;
</script>

<script lang="ts" generics="T extends Record<string, unknown>, U extends _FormPath<T>">
	import type { SuperForm } from "sveltekit-superforms";
	import type { FieldsetProps } from "./types.js";
	import Field from "./field.svelte";
	import { getDataFsError } from "$lib/internal/utils/attributes.js";

	type $$Props = FieldsetProps<T, U>;

	export let form: SuperForm<T>;
	export let name: U;

	export let asChild: $$Props["asChild"] = false;
	export let el: $$Props["el"] = undefined;

	$: fieldsetAttrs = {
		"data-fs-fieldset": "",
		...$$restProps,
	};
</script>

<!--
@component
## Fieldset
A component that groups related form controls or fields and extends the [Field](https://formsnap.dev/docs/components/field) component.

- [Fieldset Documentation](https://formsnap.dev/docs/components/fieldset)
- [Field Documentation](https://formsnap.dev/docs/components/field)

### Slot Props
- `value` - The value of the field.
- `errors` - The errors of the field.
- `tainted` - The tainted state of the field.
- `constraints` - The constraints of the field.
- `fieldsetAttrs` - A spreadable object of attributes for the fieldset element if `asChild` is `true`.

@param {SuperForm} form - The form object.
@param {FormPath<T>} name - The name of the field.
@param {boolean} [asChild=false] - Whether to opt out of rendering the fieldset element. [[asChild Docs](https://formsnap.dev/docs/composition/aschild)]
-->

<Field {form} {name} let:value let:errors let:tainted let:constraints>
	{#if asChild}
		<slot {fieldsetAttrs} {value} {errors} {tainted} {constraints} />
	{:else}
		<fieldset {...fieldsetAttrs} data-fs-error={getDataFsError(errors)} bind:this={el}>
			<slot {fieldsetAttrs} {value} {errors} {tainted} {constraints} />
		</fieldset>
	{/if}
</Field>
