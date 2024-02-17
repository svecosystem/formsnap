---
title: ArrayField
description: Treat each index of an array as a separate form field.
tagline: Components
---

The `ArrayField` component is used to treat each index of an array as a separate form field. It's useful when you have a dynamic list of items that you want to treat as separate fields in your form.

`ArrayField`s should be used within the context of a [Field](/docs/components/field) or [Fieldset](/docs/components/fieldset) component. Each `ArrayField` creates its own context, and the children of that field only access the immediate parent's context.

## Usage

Here's an example of how you might use the `ArrayField` component to create a dynamic list of URLs in a form.

```svelte showLineNumbers
<script lang="ts">
	import {
		ArrayField,
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
		<Legend class="pb-2">Enter your URLS</Legend>
		{#each $formData.urls as _, i}
			<ArrayField {form} name="urls[{i}]">
				<Control let:attrs>
					<Input
						type="url"
						bind:value={$formData.urls[i]}
						{...attrs}
						class="w-full"
					/>
				</Control>
				<FieldErrors />
			</ArrayField>
		{/each}
		<Description>Your URLs will be displayed on your public profile.</Description>
		<FieldErrors />
	</Fieldset>
	<button type="submit">Submit</button>
</form>
```

As you can see, we're able to display errors for each index within the array, as well as array-level errors for the entire fieldset.

## Props

The `ArrayField` component doesn't render an element, it strictly provides context for its children. It accepts the following props:

```ts
export type ArrayFieldProps<
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

The following slot props are provided for convenience and ease of composition when using the `ArrayField` component.

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

Since the `ArrayField` component doesn't render any HTML elements, it's a common practice to create a wrapper component around it to have consistent styling and behavior across your forms.

For example, you may always want to render the [FieldErrors](/docs/components/field-errors) component for every field. Rather than manually including it each time, you can create a wrapper `<CustomArrayField />` component that includes it automatically.

To maintain the type safety of the component, we'll need to use some generics, which eslint sometimes complains about, so if you see a yellow squiggly line, it's likely a false positive and you can ignore it.

```svelte showLineNumbers title="CustomArrayField.svelte"
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
	import { ArrayField, type ArrayFieldProps, FieldErrors } from "formsnap";
	import type { SuperForm } from "sveltekit-superforms";

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = ArrayFieldProps<T, U>;

	export let form: SuperForm<T>;
	export let name: U;
</script>

<!-- passing the slot props down are optional -->
<ArrayField {form} {name} let:value let:errors let:tainted let:contraints>
	<slot {value} {errors} {tainted} {constraints} />
	<FieldErrors />
</ArrayField>
```
