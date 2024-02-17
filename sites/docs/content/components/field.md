---
title: Field
description: Provides the necessary context for a form field.
tagline: Components
---

The `Field` component provides the necessary context for its children to react
to changes in the form state, as well as provides necessary information about the field,
such as the ids needed for aria attributes, and a lot more.

Each `Field` creates its own context, and the children of the field only access
the immediate parent's context.

## Props

The `Field` component doesn't render an element, it strictly provides context.

```ts
export type FieldProps<T extends Record<string, unknown>, U extends FormPath<T>> = {
	/** The form object returned from calling `superForm` in your component. */
	form: SuperForm<T>;

	/** The path to the field in the form object. */
	name: U;
};
```

## Slot Props

The following slot props are provided for convenience and ease of composition when using the `Field` component.

```ts
type SlotProps<T extends Record<string, unknown>, U extends FormPath<T>> = {
	/** The value of the value store of the field. */
	value: T[U];

	/** The value of the errors store for the field. */
	errors: string[] | undefined;

	/** The constraints for the field. */
	constraints: Record<string, unknown>;

	/** Whether the field is tainted or not. */
	tainted: boolean;
};
```

## Composition

Since the `Field` component doesn't render any HTML elements, it's a common practice to create a wrapper component around it to have consistent styling and behavior across your forms.

For example, you may always want to render the [ValidationError](/docs/components/validation-error) component for every field. Instead of manually including it every time, you can create a wrapper `<CustomField />` component that includes it automatically.

To maintain the type safety of the component, we'll need to use some generics, which eslint sometimes complains about, so if you see a yellow squiggly line, it's likely a false positive and you can ignore it.

```svelte showLineNumbers title="CustomField.svelte"
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
	import { Field, type FieldProps, FieldErrors } from "formsnap";
	import type { SuperForm } from "sveltekit-superforms";

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = FieldProps<T, U>;

	export let form: SuperForm<T>;
	export let name: U;
</script>

<!-- passing the slot props down are optional -->
<Field {form} {name} let:value let:errors let:tainted let:contraints>
	<slot {value} {errors} {tainted} {constraints} />
	<FieldErrors />
</Field>
```
