---
title: Bits UI Select
description: How to use the Select component from Bits UI with Formsnap.
tagline: Recipes
---

<script>
	import { Steps, Callout, LoadingCard } from "$lib/components"
	import BitsSelectForm from "$lib/components/examples/bits-ui-select.svelte"
	import BitsMultiSelectForm from "$lib/components/examples/bits-ui-multi-select.svelte"
	export let data;
</script>

The `<Select />` component from [Bits UI](https://bits-ui.com/docs/components/select) is a simple, yet powerful component for building a custom select menu. It powers the `<Select />` component for [shadcn-svelte](https://shadcn-svelte.com/docs/components/select), which is one of the most popular UI projects for Svelte. This recipe will demonstrate how to integrate that component with Formsnap.

## Single Select

We're going to build a "languages" select menu that allows the user to select a single language from a list of pre-defined options. We'll use a code to represent the language's value, and the language's name as the label.

<Steps>

### Define the Schema

Here's the schema we'll use for the form we'll build in this guide. We'll assume you know how to setup the load function and actions in the `+page.server.ts` file.

```ts title="schema.ts"
import { z } from "zod";

export const languages = {
	en: "English",
	es: "Spanish",
	fr: "French",
	de: "German",
	it: "Italian",
	pt: "Portuguese",
	ru: "Russian",
	zh: "Chinese",
	ja: "Japanese",
	ko: "Korean",
} as const;

type Language = keyof typeof languages;

export const schema = z.object({
	language: z
		.enum(Object.keys(languages) as [Language, ...Language[]])
		.default("en"),
});
```

### Setup the Form

```svelte title="+page.svelte"
<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { Select } from "bits-ui";
	import { Field, Control, Label, FieldErrors } from "formsnap";

	import { schema, languages } from "./schema.js";

	export let data;

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});

	const { form: formData, enhance } = form;

	$: selectedLanguage = {
		label: languages[$formData.language],
		value: $formData.language,
	};
</script>

<form method="POST" use:enhance>
	<Field {form} name="languages">
		<Control let:attrs>
			<Label>Language</Label>
			<Select.Root
				selected={selectedLanguage}
				onSelectedChange={(s) => {
					s && ($formData.language = s.value);
				}}
			>
				<Select.Input name={attrs.name} />
				<Select.Trigger {...attrs}>
					<Select.Value placeholder="Select a language" />
				</Select.Trigger>
				<Select.Content>
					{#each Object.entries(languages) as [value, label]}
						<Select.Item {value} {label} />
					{/each}
				</Select.Content>
			</Select.Root>
		</Control>
		<FieldErrors />
	</Field>
	<button type="submit">Submit</button>
</form>
```

We apply the `attrs` to the `Select.Trigger` component so that the label and other accessibility attributes are associated with it instead of the hidden `Select.Input`.

This enables the user to click the label to open the select menu, and also allows validation errors to automatically associate with the trigger element, which is the _control_ in this case.

<Callout type="warning">

Only apply the `name` attribute to the `Select.Input`. **_Do not_** spread the entire `attrs` object onto it or you will have duplicate `id` attributes which creates invalid HTML and a mess of accessibility issues.

</Callout>

### Finished Product

That's it! 🎉

With some additional styles and structure, the form could look something like this:

{#await data.bitsSelectForm}

<LoadingCard class="h-[201.98px]" />

{:then form}

<BitsSelectForm data={form} />

{:catch}

An error occurred while loading the example.

{/await}

</Steps>

## Multiple Select

The `<Select />` component also supports multiple selection. Here's how you can use it to build a multi-select form.

<Steps>

### Define the Schema

Here's the schema we'll use for the form we'll build in this guide. We'll assume you know how to setup the load function and actions in the `+page.server.ts` file.

```ts title="schema.ts"
import { z } from "zod";

export const colors = {
	blu: "Blue",
	red: "Red",
	grn: "Green",
	ylw: "Yellow",
	blk: "Black",
} as const;

type Color = keyof typeof colors;

export const schema = z.object({
	colors: z
		.array(z.enum(Object.keys(colors) as [Color, ...Color[]]))
		.min(1, "Please select at least one color."),
});
```

### Setup the Form

```svelte title="+page.svelte"
<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { Select } from "bits-ui";
	import { Field, Control, Label, FieldErrors } from "formsnap";

	import { schema, colors } from "./schema.js";

	export let data;

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});

	const { form: formData, enhance } = form;

	$: selectedColors = $formData.colors.map((c) => ({ label: colors[c], value: c }));
</script>

<form method="POST" use:form.enhance class="flex flex-col gap-4">
	<Field {form} name="colors">
		<Control let:attrs>
			<Label>Language</Label>
			<Select.Root
				multiple
				selected={selectedColors}
				onSelectedChange={(s) => {
					if (s) {
						$formData.colors = s.map((c) => c.value);
					} else {
						$formData.colors = [];
					}
				}}
			>
				{#each $formData.colors as color}
					<input name={attrs.name} hidden value={color} />
				{/each}
				<Select.Trigger {...attrs}>
					<Select.Value placeholder="Select a language" />
				</Select.Trigger>
				<Select.Content>
					{#each Object.entries(colors) as [value, label]}
						<Select.Item {value} {label} />
					{/each}
				</Select.Content>
			</Select.Root>
			<FieldErrors />
		</Control>
	</Field>
	<button type="submit">Submit</button>
</form>
```

Notice that we need to use a hidden input for _each_ selected value in the multiple select. This enables SuperForms to properly track the values and validate them on the server.

<Callout type="warning">

Only apply the `name` attribute to the `Select.Input`. **_Do not_** spread the entire `attrs` object onto it or you will have duplicate `id` attributes which creates invalid HTML and a mess of accessibility issues.

</Callout>

### Finished Product

That's it! 🎉

With some additional styles and structure, the form could look something like this:

{#await data.bitsMultiSelectForm}

<LoadingCard class="h-[201.98px]" />

{:then form}

<BitsMultiSelectForm data={form} />

{:catch}

An error occurred while loading the example.

{/await}

</Steps>
