---
title: ElementField
description: Provides the necessary context for a form field that represents a single element in an array.
section: Components
---

<script>
	import { PropField, Callout } from '@svecodocs/kit'
</script>

The `ElementField` component is used to treat each element of an array as a separate form field. It's useful when you have a dynamic list of items that you want to treat as separate fields in your form.

`ElementField`s should be used within the context of a [Field](/docs/components/field) or [Fieldset](/docs/components/fieldset) component. `ElementField`s create their own context to scope the errors and other states of the field.

## Usage

Here's an example of how you might use the `ElementField` component to create a dynamic list of URLs in a form.

```svelte title="+page.svelte"
<script lang="ts">
	import { ElementField, FieldErrors, Control, Label, Fieldset, Description } from "formsnap";
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { z } from "zod";

	const schema = z.object({
		urls: z.array(z.string().url()).min(2).default(["", ""]),
	});

	let { data } = $props();

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});

	const { form: formData, enhance } = form;
</script>

<form use:enhance method="POST">
	<Fieldset {form} name="urls">
		<Legend>Enter your URLS</Legend>
		{#each $formData.urls as _, i}
			<ElementField {form} name="urls[{i}]">
				<Control>
					<input type="url" bind:value={$formData.urls[i]} {...controlProps()} />
				</Control>
				<FieldErrors />
			</ElementField>
		{/each}
		<Description>Your URLs will be displayed on your public profile.</Description>
		<FieldErrors />
	</Fieldset>
	<button type="submit">Submit</button>
</form>
```

We're able to display errors for each element of the array, as well as array-level errors for the entire fieldset.

Check out the [Dynamic Fields](/docs/recipes/dynamic-fields) recipe for more advanced usage of the `ElementField` component.

<Callout>

The `ElementField` component doesn't render an element, it strictly provides context for its children.

</Callout>

## API Reference

### Props

<PropField type="SuperForm<T>" name="form" required>

The form object returned from calling `superForm` in your component.

</PropField>

<PropField type="FormPathLeaves<T>" name="name" required>

The path to the field in the form object.

</PropField>

### Snippet Props

The following snippet props are provided to the `children` snippet for convenience and ease of composition when using the `ElementField` component.

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

Since the `ElementField` component doesn't render any HTML elements, it's common practice to create a wrapper component around it to have consistent styling and behavior across your forms.

For example, you may always want to render the [FieldErrors](/docs/components/field-errors) component for every field. Rather than manually including it each time, you can create a wrapper `<CustomElementField />` component that includes it automatically.

To maintain the type safety of the component, we'll need to use some generics, which eslint sometimes complains about, so if you see a warning, it's likely a false positive and you can ignore it.

```svelte title="CustomElementField.svelte"
<script lang="ts" module>
	import type { FormPathArrays, FormPathLeaves } from "sveltekit-superforms";
	type T = Record<string, unknown>;
	type U = unknown;
</script>

<script lang="ts" generics="T extends Record<string, unknown>, U extends FormPathLeaves<T>">
	import { ElementField, type ElementFieldProps, FieldErrors } from "formsnap";
	import type { SuperForm } from "sveltekit-superforms";

	let { form, name, children: childrenProp }: ElementFieldProps<T, U> = $props();
</script>

<ElementField {form} {name}>
	{#snippet children(snippetProps)}
		{@render childrenProp(snippetProps)}
	{/snippet}
	<FieldErrors />
</ElementField>
```
