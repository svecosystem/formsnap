---
title: Dynamic Fields
description: Learn how to creating dynamic fields by building a URLs field with Formsnap.
tagline: Guides
---

<script>
	import { Steps, Callout, LoadingCard } from '$lib/components'
	import DynamicFieldsForm from '$lib/components/examples/dynamic-fields.svelte'
	export let data;
</script>

To create a dynamic field, you'll need to use the [ElementField](/docs/components/element-field) component, that allows you to treat each element of an array as it's own field.

In this guide, we'll create a URLs field where users can add and remove URLs from their profile.

## Create Dynamic Fields

<Steps>

### Define the Schema

Here's the schema we'll use for the form we'll build in this guide. We'll assume you know how to setup the load function and actions, and have already created a `+page.svelte` and `+page.server.ts` file.

```ts title="schema.ts"
import { z } from "zod";

export const schema = z.object({
	urls: z
		.array(z.string().url({ message: "Please enter a valid URL." }))
		.min(2, "You must include at least two URLs on your profile.")
		.default(["", ""]),
});
```

We've defined an array named `urls` that contains strings that must be valid URLs. We've also set a minimum length of 2 for the array itself, and provided two default values to start with. The minimum length of 2 may sounds strange, but we're only doing so to demonstrate different validation errors for the array and its elements.

### Create the Form

We'll need to initialize our SuperForm with the form returned from the `load` function, and then setup the basic structure of our form.

```svelte title="+page.svelte" showLineNumbers
<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { schema } from "./schema.js";

	export let data;

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});

	const { form: formData, enhance } = form;
</script>

<form use:enhance method="POST">
	<!-- ... -->
	<button type="submit">Submit</button>
</form>
```

### Import the Components

We have a few components we need to import to build the form.

```svelte title="+page.svelte" showLineNumbers {4-12}
<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import {
		Fieldset,
		Legend,
		ElementField,
		Control,
		Label,
		FieldErrors,
		Description,
	} from "formsnap";
	import { schema } from "./schema.js";

	export let data;

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});

	const { form: formData, enhance } = form;
</script>

<form use:enhance method="POST">
	<!-- ... -->
	<button type="submit">Submit</button>
</form>
```

### Scaffold the Fieldset

Since our individual URL inputs will be part of the same field, we'll use a [Fieldset](/docs/components/fieldset) component to group them together and a [Legend](/docs/components/legend) to provide a title.

```svelte title="+page.svelte" showLineNumbers {3-10}
<!-- script tag -->
<form use:enhance method="POST">
	<Fieldset {form} name="urls">
		<Legend>Public URLs</Legend>
		<!-- ... -->
		<Description>
			Add URLs to your profile that you'd like to share with others.
		</Description>
		<FieldErrors />
	</Fieldset>
	<button type="submit">Submit</button>
</form>
```

The [FieldErrors](/docs/components/field-errors) component will display any validation errors for the array itself. In our case, it will display an error if the array doesn't contain at least two URLs (we'll add the erros for the individual URLs in the next step).

The [Description](/docs/components/description) component will provide additional context about the fields once we've created them, but each field will share the same description from the [Fieldset](/docs/components/fieldset) scope.

### Render the URL Fields

Now that we've scaffolded the `Fieldset`, we can iterate over the `$formData.urls` array to render the individual URL fields, which are represented by the [ElementField](/docs/components/element-field) component.

```svelte title="+page.svelte" showLineNumbers {5-12}
<!-- script tag -->
<form use:enhance method="POST">
	<Fieldset {form} name="urls">
		<Legend>Public URLs</Legend>
		{#each $formData.urls as _, i}
			<ElementField {form} name="urls[{i}]">
				<Control let:attrs>
					<Label class="sr-only">URL {i + 1}</Label>
					<input type="url" {...attrs} bind:value={$formData.urls[i]} />
				</Control>
			</ElementField>
		{/each}
		<Description>
			Add URLs to your profile that you'd like to share with others.
		</Description>
		<FieldErrors />
	</Fieldset>
	<button type="submit">Submit</button>
</form>
```

We're using the `ElementField` component to treat each element of the `urls` array as a separate field with its own state and validation. We're also using the `Control` component to create a label and input for each URL, and binding the input's value to the corresponding element of the `urls` array.

<Callout type="tip">

You should always include a label for each input for accessibility purposes. In this case, because we don't want to display a label visually for each input, we've added a class to the label to visually hide it while still making it available to screen readers.

</Callout>

### Make the Fields Dynamic

At the moment, the user can only have two URLs in their profile. We want to allow them to add and remove URLs as needed. We can achieve this by adding buttons to add and remove URLs.

```svelte title="+page.svelte" showLineNumbers {23-29,40-42,50}
<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import {
		Fieldset,
		Legend,
		ElementField,
		Control,
		Label,
		FieldErrors,
		Description,
	} from "formsnap";
	import { schema } from "./schema.js";

	export let data;

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});

	const { form: formData, enhance } = form;

	function removeUrlByIndex(index: number) {
		$formData.urls = $formData.urls.filter((_, i) => i !== index);
	}

	function addUrl() {
		$formData.urls = [...$formData.urls, ""];
	}
</script>

<form use:enhance method="POST">
	<Fieldset {form} name="urls">
		<Legend>Public URLs</Legend>
		{#each $formData.urls as _, i}
			<ElementField {form} name="urls[{i}]">
				<Control let:attrs>
					<Label class="sr-only">URL {i + 1}</Label>
					<input type="url" {...attrs} bind:value={$formData.urls[i]} />
					<button type="button" on:click={() => removeUrlByIndex(i)}>
						Remove URL
					</button>
				</Control>
			</ElementField>
		{/each}
		<Description>
			Add URLs to your profile that you'd like to share with others.
		</Description>
		<FieldErrors />
		<button type="button" on:click={addUrl}>Add URL</button>
	</Fieldset>

	<button type="submit">Submit</button>
</form>
```

We've added a `removeUrlByIndex` function that removes a URL from the `urls` array by its index, and a `addUrl` function that adds a new URL to the `urls` array. We've also added a button to remove each URL and a button to add a new URL.

Now the user can add and remove URLs as needed, and the form will validate the array and its elements according to the schema we defined.

### Finished Product

That's it! 🎉

You've created a dynamic field that allows users to add and remove URLs from their profile. With some custom styles and finesse, you can make the form look something like this:

{#await data.dynamicFieldsForm}

<LoadingCard class="h-[292px]" />

{:then form}

<DynamicFieldsForm data={form} />

{:catch}

An error occurred while loading the example.

{/await}

</Steps>

## TLDR - Show Me the Code

Here's the complete code for the form we built in this guide:

```ts title="schema.ts"
import { z } from "zod";

export const schema = z.object({
	urls: z
		.array(z.string().url({ message: "Please enter a valid URL." }))
		.min(2, "You must include at least two URLs on your profile.")
		.default(["", ""]),
});
```

```svelte title="+page.svelte" showLineNumbers
<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import {
		Fieldset,
		Legend,
		ElementField,
		Control,
		Label,
		FieldErrors,
		Description,
	} from "formsnap";
	import { schema } from "./schema.js";

	export let data;

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});

	const { form: formData, enhance } = form;

	function removeUrlByIndex(index: number) {
		$formData.urls = $formData.urls.filter((_, i) => i !== index);
	}

	function addUrl() {
		$formData.urls = [...$formData.urls, ""];
	}
</script>

<form use:enhance method="POST">
	<Fieldset {form} name="urls">
		<Legend>Public URLs</Legend>
		{#each $formData.urls as _, i}
			<ElementField {form} name="urls[{i}]">
				<Control let:attrs>
					<Label class="sr-only">URL {i + 1}</Label>
					<input type="url" {...attrs} bind:value={$formData.urls[i]} />
					<button type="button" on:click={() => removeUrlByIndex(i)}>
						Remove URL
					</button>
				</Control>
			</ElementField>
		{/each}
		<Description>
			Add URLs to your profile that you'd like to share with others.
		</Description>
		<FieldErrors />
		<button type="button" on:click={addUrl}>Add URL</button>
	</Fieldset>

	<button type="submit">Submit</button>
</form>
```
