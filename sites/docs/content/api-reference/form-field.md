---
title: <Form.Field />
description: The component used to define a form field.
---

The `<Form.Field/>` component provides the necessary context for it's children to react
to changes in the form state, as well as provides necessary information about the field,
such as the ids needed for aria attributes, and a lot more.

Each `<Form.Field/>` creates its own context, and the children of the field only access
the immediate parent's context. This means that if you have nested fields, the children
of the nested field will not have access to the parent field's context.

## Props

The `<Form.Field/>` component doesn't render an element itself, it strictly provides context.

```ts
export type FieldProps<T extends Record<string, unknown>, U extends FormPath<T>> = {
	/**
	 * The form object returned from calling `superForm` in your component.
	 */
	form: SuperForm<T>;

	/**
	 * The path to the field in the form object.
	 */
	name: U;
};
```

## Slot Props

The following slot props are provided for convenience when using the `<Form.Field />` component. None of these props are required, but you can use them as you see fit.

```ts
type SlotProps<T extends Record<string, unknown>, U extends FormPath<T>> = {
	/**
	 * The value of the value store of the field.
	 */
	value: T[U];

	/**
	 * The value of the errors store for the field.
	 */
	errors: string[] | undefined;

	/**
	 * The constraints for the field.
	 */
	constraints: Record<string, unknown>;

	/**
	 * Whether the field is tainted or not.
	 */
	tainted: boolean;
};
```

## Composition

Since the `<Form.Field />` component doesn't render anything itself, it's a common practice to create a wrapper component around it.

For example, you may always want to render the `<Form.Validation />` component for every field. Instead of manually including it every time, you can create a wrapper `<CustomField />` component that includes it automatically.

To maintain the type safety of the component, we'll need to use some generics, which eslint sometimes complains about, so if you see a yellow squiggly line, it's likely a false positive and you can ignore it.

```svelte title="CustomField.svelte"
<script lang="ts" context="module">
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import type { FormPath } from "sveltekit-superforms";

	// the form object
	type T = Record<string, unknown>;
	// the path/name of the field in the form object
	type U = unknown;
</script>

<script
	lang="ts"
	generics="T extends Record<string, unknown>, U extends FormPath<T>"
>
	import type { Form } from "formsnap";
	import type { SuperForm } from "sveltekit-superforms";

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = FieldProps<T, U>;

	export let form: SuperForm<T>;
	export let name: U;
</script>

<!-- passing the slot props down are optional -->
<Form.Field {form} {name} let:value let:errors let:tainted let:contraints>
	<slot {value} {errors} {tainted} {constraints} />
	<Form.Validation />
</Form.Field>
```
