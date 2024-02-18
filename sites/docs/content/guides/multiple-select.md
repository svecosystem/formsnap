---
title: Multiple Select
description: Learn how to build multiple select inputs with Formsnap.
tagline: Guides
---

<script>
	import { Steps, LoadingCard } from "$lib/components"
	import MultipleSelectForm from "$lib/components/examples/multiple-select.svelte"
	export let data;
</script>

In the following guide, you'll learn how to setup and validate multiple select fields with Formsnap by building an Ice Cream order form.

## Building a Multiple Select Form

<Steps>

### Define the Schema

Here's the schema we'll use for the form we'll build in this guide. We're assuming you know how to setup the load function and actions, and have already created a `+page.svelte` and `+page.server.ts` file.

```ts title="schema.ts" showLineNumbers
import { z } from "zod";

export const flavors = [
	"vanilla",
	"chocolate",
	"cookies and cream",
	"strawberry",
] as const;

export const toppings = [
	"sprinkles",
	"hot fudge",
	"whipped cream",
	"cherry",
] as const;

export const schema = z
	.object({
		scoops: z.number().min(1).default(1),
		flavors: z.array(z.enum(flavors)).min(1, "You must select at least one flavor."),
		toppings: z
			.array(z.enum(toppings))
			.max(2, "You can only select up to two toppings."),
	})
	.refine((data) => (data.flavors.length > data.scoops ? false : true), {
		message: "You can only select as many flavors as you have scoops.",
		path: ["flavors"],
	});
```

The schema represents an ice cream order form with a `scoops` field, a `flavors` field, and a `toppings` field. The `flavors` and `toppings` fields are arrays of enums, and we've added some custom validation to ensure the user can only select as many flavors as they have scoops. We've also set a minimum of 1 for the `flavors` field and a maximum of 2 for the `toppings` field.

### Create the Form

Let's initialize our SuperForm with the form returned from the `load` function and setup the basic structure of our form. We'll also want to import the `schema`, `flavors`, and `toppings` from the schema file.

```svelte title="+page.svelte" showLineNumbers
<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { schema, flavors, toppings } from "./schema.js";

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

At a minimum we need to import the [Field](/docs/components/field), [Control](/docs/components/control), [Label](/docs/components/label), and [FieldErrors](/docs/components/field-errors) components from Formsnap.

```svelte title="+page.svelte" showLineNumbers {4}
<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { Field, Control, Label, FieldErrors } from "formsnap";
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

### Create the Scoops Field

The first field we'll create is the `scoops` field, which will be a regular select input with a range of 1 to 5 scoops.

```svelte title="+page.svelte" showLineNumbers {3-17}
<!-- script tag -->
<form use:enhance method="POST">
	<Field {form} name="scoops">
		<Control let:attrs>
			<div class="flex flex-col items-start gap-1">
				<Label>Number of scoops</Label>
				<select {...attrs} bind:value={$formData.scoops}>
					{#each Array.from({ length: 5 }, (_, i) => i + 1) as num}
						<option value={num}>
							{num === 1 ? `${num} Scoop` : `${num} Scoops`}
						</option>
					{/each}
				</select>
			</div>
		</Control>
		<FieldErrors />
	</Field>
	<button type="submit">Submit</button>
</form>
```

### Create the Flavors Field

Next, let's create the `flavors` field. This field will be a multiple select input with the available flavors as options.

```svelte title="+page.svelte" showLineNumbers {18-32}
<!-- script tag -->
<form use:enhance method="POST">
	<Field {form} name="scoops">
		<Control let:attrs>
			<div class="flex flex-col items-start gap-1">
				<Label>Number of scoops</Label>
				<select {...attrs} bind:value={$formData.scoops}>
					{#each Array.from({ length: 5 }, (_, i) => i + 1) as num}
						<option value={num}>
							{num === 1 ? `${num} Scoop` : `${num} Scoops`}
						</option>
					{/each}
				</select>
			</div>
		</Control>
		<FieldErrors />
	</Field>
	<Field {form} name="flavors">
		<Control let:attrs>
			<div class="flex flex-col items-start gap-1">
				<Label>What flavors do you fancy?</Label>
				<select multiple bind:value={$formData.flavors} {...attrs}>
					{#each flavors as flavor}
						<option value={flavor} selected={$formData.flavors.includes(flavor)}>
							{flavor}
						</option>
					{/each}
				</select>
			</div>
		</Control>
		<FieldErrors />
	</Field>
	<button type="submit">Submit</button>
</form>
```

Notice that we're using the `multiple` attribute on the `select` element to allow the user to select multiple options. We're also using the `selected` attribute to pre-select the options that are already in the `formData.flavors` array.

### Create the Toppings Field

Finally, let's create the `toppings` field. This field will also be a multiple select input with the available toppings as options.

```svelte title="+page.svelte" showLineNumbers {33-47}
<!-- script tag -->
<form use:enhance method="POST">
	<Field {form} name="scoops">
		<Control let:attrs>
			<div class="flex flex-col items-start gap-1">
				<Label>Number of scoops</Label>
				<select {...attrs} bind:value={$formData.scoops}>
					{#each Array.from({ length: 5 }, (_, i) => i + 1) as num}
						<option value={num}>
							{num === 1 ? `${num} Scoop` : `${num} Scoops`}
						</option>
					{/each}
				</select>
			</div>
		</Control>
		<FieldErrors />
	</Field>
	<Field {form} name="flavors">
		<Control let:attrs>
			<div class="flex flex-col items-start gap-1">
				<Label>What flavors do you fancy?</Label>
				<select multiple bind:value={$formData.flavors} {...attrs}>
					{#each flavors as flavor}
						<option value={flavor} selected={$formData.flavors.includes(flavor)}>
							{flavor}
						</option>
					{/each}
				</select>
			</div>
		</Control>
		<FieldErrors />
	</Field>
	<Field {form} name="toppings">
		<Control let:attrs>
			<div class="flex flex-col items-start gap-1">
				<Label>Select your toppings</Label>
				<select multiple bind:value={$formData.toppings} {...attrs}>
					{#each toppings as topping}
						<option value={topping} selected={$formData.toppings.includes(topping)}>
							{topping}
						</option>
					{/each}
				</select>
			</div>
		</Control>
		<FieldErrors />
	</Field>
	<button type="submit">Submit</button>
</form>
```

### Finished Product

That's it! 🎉

You've created the functionality for a form containing multiple select inputs with validation. With some custom styles and finesse, you can make the form look something like this:

{#await data.multipleSelectForm}

<LoadingCard class="h-[417px]" />

{:then form}

<MultipleSelectForm data={form} />

{:catch}

An error occurred while loading the example.

{/await}

</Steps>
