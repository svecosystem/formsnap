---
title: Bits UI Select
description: How to use the Select component from Bits UI with Formsnap.
section: Recipes
---

<script>
	import { Steps, Step, Callout } from "@svecodocs/kit"
	import LoadingCard from "$lib/components/loading-card.svelte"
	import BitsSelectForm from "$lib/components/examples/bits-ui-select.svelte"
	import BitsMultiSelectForm from "$lib/components/examples/bits-ui-multi-select.svelte"
</script>

The `Select` component from [Bits UI](https://bits-ui.com/docs/components/select) is a simple, yet powerful component for building a custom select menu. It powers the `Select` component for [shadcn-svelte](https://shadcn-svelte.com/docs/components/select), which is one of the most popular UI projects for Svelte. This recipe will demonstrate how to integrate that component with Formsnap.

## Single Select

We're going to build a "languages" select menu that allows the user to select a single language from a list of pre-defined options. We'll use a code to represent the language's value, and the language's name as the label.

<Steps>

<Step>Define the Schema</Step>

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
	language: z.enum(Object.keys(languages) as [Language, ...Language[]]).default("en"),
});
```

<Step>Setup the Form</Step>

```svelte title="+page.svelte"
<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { Select } from "bits-ui";
	import { Field, Control, Label, FieldErrors, controlProps } from "formsnap";
	import { schema, languages } from "./schema.js";

	let { data } = $props();

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});

	const { form: formData, enhance } = form;

	const selectedLanguageLabel = $derived(
		$formData.language ? languages[$formData.language] : "Select a language"
	);
</script>

<form method="POST" use:enhance>
	<Field {form} name="language">
		<Control>
			<Label>Language</Label>
			<Select.Root type="single" bind:value={$formData.language} name={controlProps().name}>
				<Select.Trigger {...controlProps()}>
					{selectedLabel}
				</Select.Trigger>
				<Select.Content>
					{#each Object.entries(languages) as [value, label]}
						<Select.Item {value}>
							{label}
						</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</Control>
		<Description>The docs will be translated to your preferred language.</Description>
		<FieldErrors />
	</Field>
	<button type="submit">Submit</button>
</form>
```

We apply the control `props` to the `Select.Trigger` component so that the label and other accessibility attributes are associated with it.

We apply the `props.name` to the `Select.Root` component so a hidden input is rendered for the select.

<Step>Finished Product</Step>

That's it! 🎉

With some additional styles and structure, the form could look something like this:

<BitsSelectForm />

</Steps>

## Multiple Select

The `<Select />` component also supports multiple selection. Here's how you can use it to build a multi-select form.

<Steps>

<Step>Define the Schema</Step>

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

<Step>Setup the Form</Step>

```svelte title="+page.svelte"
<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { Select } from "bits-ui";
	import { Field, Control, Label, FieldErrors, controlProps } from "formsnap";
	import { schema, colors } from "./schema.js";

	let { data } = $props();

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});

	const { form: formData } = form;

	const selectedColors = $derived(
		$formData.colors.length ? $formData.colors.map((c) => colors[c]).join(",") : "Select colors"
	);
</script>

<form method="POST" use:form.enhance>
	<Field {form} name="colors">
		<Control>
			<Label>Favorite colors</Label>
			<Select.Root type="multiple" bind:value={$formData.colors} name={controlProps().name}>
				<Select.Trigger {...controlProps()}>
					{selectedColors}
				</Select.Trigger>
				<Select.Content>
					{#each Object.entries(colors) as [value, label]}
						<Select.Item {value} {label} />
					{/each}
				</Select.Content>
			</Select.Root>
		</Control>
		<Description>We'll use these colors to customize your experience.</Description>
		<FieldErrors />
	</Field>
	<button type="submit">Submit</button>
</form>
```

We apply the control `props` to the `Select.Trigger` component so that the label and other accessibility attributes are associated with it.

We apply the `props.name` to the `Select.Root` component so a hidden input is rendered for the select.

<Step>Finished Product</Step>

That's it! 🎉

With some additional styles and structure, the form could look something like this:

<BitsMultiSelectForm />

</Steps>
