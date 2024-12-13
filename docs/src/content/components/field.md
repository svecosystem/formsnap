---
title: Field
description: Provides the necessary context for a form field.
section: Components
---

<script>
	import { PropField, Callout } from '@svecodocs/kit'
</script>

The `Field` component provides the necessary context for its children to react
to changes in the form state, as well as provides necessary information about the field,
such as the ids needed for aria attributes, and a lot more.

Each `Field` creates its own context, and the children of the field only access
the immediate parent's context.

<Callout>

The `Field` component doesn't render an element, it strictly provides context.

</Callout>

## API Reference

### Props

<PropField type="SuperForm<T>" name="form" required>

The form object returned from calling `superForm` in your component.

</PropField>

<PropField type="FormPath<T>" name="name" required>

The path to the field in the form object.

</PropField>

### Snippet Props

The following snippet props are provided to the `children` snippet for convenience and ease of composition when using the `Field` component.

<PropField type="T[U]" name="value">

The value of the value store of the field.

</PropField>

<PropField type="string[] | undefined" name="errors">

The value of the errors store for the field.

</PropField>

<PropField type="Record<string, unknown>" name="constraints">

The constraints for the field.

</PropField>

<PropField type="boolean" name="tainted">

Whether the field is tainted or not.

</PropField>

## Composition

Since the `Field` component doesn't render any HTML elements, it's a common practice to create a wrapper component around it to have consistent styling and behavior across your forms.

For example, you may always want to render the [FieldErrors](/docs/components/field-errors) component for every field. Instead of manually including it every time, you can create a wrapper `<CustomField />` component that includes it automatically.

To maintain the type safety of the component, we'll need to use some generics, which eslint sometimes complains about, so if you see a warning, it's likely a false positive and you can ignore it.

```svelte title="CustomField.svelte"
<script lang="ts" module>
	import type { FormPath } from "sveltekit-superforms";

	// the form object
	type T = Record<string, unknown>;
	// the path/name of the field in the form object
	type U = unknown;
</script>

<script lang="ts" generics="T extends Record<string, unknown>, U extends FormPath<T>">
	import { Field, type FieldProps, FieldErrors } from "formsnap";
	import type { SuperForm } from "sveltekit-superforms";

	let { form, name, children: childrenProp }: FieldProps<T, U> = $props();
</script>

<Field {form} {name}>
	{#snippet children(snippetProps)}
		{@render childrenProp(snippetProps)}
		<FieldErrors />
	{/snippet}
</Field>
```
