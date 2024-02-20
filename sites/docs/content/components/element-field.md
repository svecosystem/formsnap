---
title: ElementField
description: Provides the necessary context for a form field that represents a single element in an array.
tagline: Components
---

The `ElementField` component is used to treat each element of an array as a separate form field. It's useful when you have a dynamic list of items that you want to treat as separate fields in your form.

`ElementField`s should be used within the context of a [Field](/docs/components/field) or [Fieldset](/docs/components/fieldset) component. `ElementField`s create their own context to scope the errors and other states of the field.

## Usage

Here's an example of how you might use the `ElementField` component to create a dynamic list of URLs in a form.

```svelte
<script lang="ts">
	import {
		ElementField,
		FieldErrors,
		Control,
		Label,
		Fieldset,
		Description,
	} from "formsnap";
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { z } from "zod";

	const schema = z.object({
		urls: z.array(z.string().url()).min(2).default(["", ""]),
	});

	export let data;

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
				<Control let:attrs>
					<Input type="url" bind:value={$formData.urls[i]} {...attrs} />
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

## Props

The `ElementField` component doesn't render an element, it strictly provides context for its children. It accepts the following props:

```ts
export type ElementFieldProps<
	T extends Record<string, unknown>,
	U extends FormPathLeaves<T>,
> = {
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

The following slot props are provided for convenience and ease of composition when using the `ElementField` component.

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

Since the `ElementField` component doesn't render any HTML elements, it's common practice to create a wrapper component around it to have consistent styling and behavior across your forms.

For example, you may always want to render the [FieldErrors](/docs/components/field-errors) component for every field. Rather than manually including it each time, you can create a wrapper `<CustomElementField />` component that includes it automatically.

To maintain the type safety of the component, we'll need to use some generics, which eslint sometimes complains about, so if you see a warning, it's likely a false positive and you can ignore it.

```svelte title="CustomElementField.svelte"
<script lang="ts" context="module">
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import type { FormPathArrays, FormPathLeaves } from "sveltekit-superforms";
	type T = Record<string, unknown>;
	type U = unknown;
</script>

<script
	lang="ts"
	generics="T extends Record<string, unknown>, U extends FormPathLeaves<T>"
>
	import { ElementField, type ElementFieldProps, FieldErrors } from "formsnap";
	import type { SuperForm } from "sveltekit-superforms";

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = ElementFieldProps<T, U>;

	export let form: SuperForm<T>;
	export let name: U;
</script>

<!-- passing the slot props down are optional -->
<ElementField {form} {name} let:value let:errors let:tainted let:contraints>
	<slot {value} {errors} {tainted} {constraints} />
	<FieldErrors />
</ElementField>
```
