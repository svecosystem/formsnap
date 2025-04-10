---
title: Multiple Select
description: Learn how to build multiple select inputs with Formsnap.
section: Recipes
---

<script>
	import { Steps, Step } from "@svecodocs/kit"
	import LoadingCard from "$lib/components/loading-card.svelte"
	import MultipleSelectForm from "$lib/components/examples/multiple-select.svelte"
</script>

In the following guide, you'll learn how to setup and validate multiple select fields with Formsnap by building an Ice Cream order form.

## Building a Multiple Select Form

<Steps>

<Step>Define the Schema</Step>

Here's the schema we'll use for the form we'll build in this guide. We're assuming you know how to setup the load function and actions, and have already created a `+page.svelte` and `+page.server.ts` file.

```ts title="schema.ts"
import { z } from "zod";

export const flavors = ["vanilla", "chocolate", "cookies and cream", "strawberry"] as const;

export const toppings = ["sprinkles", "hot fudge", "whipped cream", "cherry"] as const;

export const schema = z
	.object({
		scoops: z.number().min(1).default(1),
		flavors: z.array(z.enum(flavors)).min(1, "You must select at least one flavor."),
		toppings: z.array(z.enum(toppings)).max(2, "You can only select up to two toppings."),
	})
	.refine((data) => (data.flavors.length > data.scoops ? false : true), {
		message: "You can only select as many flavors as you have scoops.",
		path: ["flavors"],
	});
```

The schema represents an ice cream order form with a `scoops` field, a `flavors` field, and a `toppings` field. The `flavors` and `toppings` fields are arrays of enums, and we've added some custom validation to ensure the user can only select as many flavors as they have scoops. We've also set a minimum of 1 for the `flavors` field and a maximum of 2 for the `toppings` field.

<Step>Create the Form</Step>

Let's initialize our SuperForm with the form returned from the `load` function and setup the basic structure of our form. We'll also want to import the `schema`, `flavors`, and `toppings` from the schema file.

```svelte title="+page.svelte"
<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { schema, flavors, toppings } from "./schema.js";

	let { data } = $props();

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});

	const { form: formData } = form;
</script>

<form use:form.enhance method="POST">
	<!-- ... -->
	<button type="submit">Submit</button>
</form>
```

<Step>Import the Components</Step>

At a minimum we need to import the [Field](/docs/components/field), [Control](/docs/components/control), [Label](/docs/components/label), and [FieldErrors](/docs/components/field-errors) components from Formsnap.

```svelte title="+page.svelte"  {4}
<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { Field, Control, Label, FieldErrors, controlProps } from "formsnap";
	import { schema } from "./schema.js";

	let { data } = $props();

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});

	const { form: formData } = form;
</script>

<form use:form.enhance method="POST">
	<!-- ... -->
	<button type="submit">Submit</button>
</form>
```

<Step>Create the Scoops Field</Step>

The first field we'll create is the `scoops` field, which will be a regular select input with a range of 1 to 5 scoops.

```svelte title="+page.svelte" {3-19}
<!-- script tag -->
<form use:form.enhance method="POST">
	<Field {form} name="scoops">
		<Control>
			<div class="flex flex-col items-start gap-1">
				<Label>Number of scoops</Label>
				<select {...controlProps()} bind:value={$formData.scoops}>
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

<Step>Create the Flavors Field</Step>

Next, let's create the `flavors` field. This field will be a multiple select input with the available flavors as options.

```svelte title="+page.svelte"  {20-36}
<!-- script tag -->
<form use:form.enhance method="POST">
	<Field {form} name="scoops">
		<Control>
			<div class="flex flex-col items-start gap-1">
				<Label>Number of scoops</Label>
				<select {...controlProps()} bind:value={$formData.scoops}>
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
		<Control>
			<div class="flex flex-col items-start gap-1">
				<Label>What flavors do you fancy?</Label>
				<select multiple bind:value={$formData.flavors} {...controlProps()}>
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

<Step>Create the Toppings Field</Step>

Finally, let's create the `toppings` field. This field will also be a multiple select input with the available toppings as options.

```svelte title="+page.svelte"  {37-53}
<!-- script tag -->
<form use:form.enhance method="POST">
	<Field {form} name="scoops">
		<Control>
			<div class="flex flex-col items-start gap-1">
				<Label>Number of scoops</Label>
				<select {...controlProps()} bind:value={$formData.scoops}>
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
		<Control>
			<div class="flex flex-col items-start gap-1">
				<Label>What flavors do you fancy?</Label>
				<select multiple bind:value={$formData.flavors} {...controlProps()}>
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
		<Control>
			<div class="flex flex-col items-start gap-1">
				<Label>Select your toppings</Label>
				<select multiple bind:value={$formData.toppings} {...controlProps()}>
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

<Step>Finished Product</Step>

That's it! 🎉

You've created the functionality for a form containing multiple select inputs with validation. With some custom styles and finesse, you can make the form look something like this:

<MultipleSelectForm />

</Steps>
