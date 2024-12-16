---
title: Checkbox Groups
description: Learn how to build checkbox group inputs with Formsnap.
section: Recipes
---

<script>
	import { Steps, Step } from '@svecodocs/kit'
	import LoadingCard from '$lib/components/loading-card.svelte'
	import CheckboxGroup from '$lib/components/examples/checkbox-group.svelte'
</script>

Checkbox groups are a set of checkboxes that allow users to select multiple options from a list, and are quite common in forms.

In this guide, you'll learn how to build a checkbox group with Formsnap by building an "Allergies" checkbox group, where a user must select any food allergies they have. We'll start with very basic functionality and then look at more advanced refinements for validation.

## Create a Checkbox Group

For the purposes of this guide, we'll assume you're using the `zod` and `zodClient` adapters from [Superforms](https://superforms.rocks), but the same principles apply to all adapters.

<Steps>

<Step>Define the Schema</Step>

Let's start by defining a schema that contains an `array` to hold the selected options. We'll create this inside the `context="module"` script tag of our Svelte component so we can access it in our component and `+page.server.ts` file.

```svelte title="+page.svelte"
<script lang="ts" context="module">
	import { z } from "zod";

	const allergies = ["None", "Peanuts", "Shellfish", "Lactose", "Gluten"] as const;

	export const schema = z.object({
		allergies: z
			.array(z.enum(allergies))
			.min(1, "If you don't have any allergies, select 'None'."),
	});
</script>
```

We've defined an array named `allergies` that holds the possible enum values, and then created a schema that requires at least one option to be selected.

<Step>Setup the Load Function & Actions</Step>

Next, we'll create a `+page.server.ts` file where we'll define our `load` function and `actions` to handle the form submission.

```ts title="+page.server.ts"
import { superValidate } from "sveltekit-superforms";
import type { Actions, PageServerLoad } from "./$types";
import { schema } from "./+page.svelte";
import { zod } from "sveltekit-superforms/adapters";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(schema)),
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(schema));

		if (!form.valid) {
			return fail(400, { form });
		}

		return { form };
	},
};
```

Notice we're importing that schema we defined in our `+page.svelte` file and using it to validate the form data in the `load` function and `actions`.

<Step>Initialize the SuperForm</Step>

Now that we have our schema defined and our `load` function and `actions` set up, we can initialize the SuperForm in our Svelte component.

```svelte title="+page.svelte"
<!-- script context="module" tag -->
<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import SuperDebug from "sveltekit-superforms";

	let { data } = $props();

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});
	const { form: formData } = form;
</script>
```

We're using the `superForm` function to initialize the form, passing in the `form` object from our `load` function and the `zodClient` adapter to handle client-side validation.

<Step>Import Components and Enhance the Form</Step>

Now that our SuperForm is initialized, we can use it to construct our checkbox group.

We'll first import the components we'll need from Formsnap, and then setup a `form` element with the `enhance` action to progressively enhance the form with client-side validation.

```svelte title="+page.svelte" {5-13,15-19}
<!-- script context="module" tag  -->
<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import {
		Fieldset,
		Legend,
		Label,
		Control,
		FieldErrors,
		Description,
		controlProps,
	} from "formsnap";

	let { data } = $props();

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});
	const { form: formData } = form;
</script>

<form method="POST" use:form.enhance>
	<!-- ... -->
	<button type="submit">Submit</button>
</form>
```

<Step>Construct the Fieldset</Step>

Since each checkbox in the group is related to a single field, we'll use a `Fieldset` component with a `Legend` to group them together. We'll use the `Description` component to provide more context about the fieldset and the `FieldErrors` component to display validation errors.

```svelte {3-8}
<!-- script tags -->
<form method="POST" use:form.enhance>
	<Fieldset {form} name="allergies">
		<Legend>Select your allergies</Legend>
		<!-- ... -->
		<Description>We'll accommodate your dietary restrictions.</Description>
		<FieldErrors />
	</Fieldset>
	<button type="submit">Submit</button>
</form>
```

Next, we'll iterate over the `allergies` array and create a [Control](/docs/components/control) that includes a [Label](/docs/components/label) and a checkbox input for each option.

```svelte {5-15}
<!-- script tags -->
<form method="POST" use:form.enhance>
	<Fieldset {form} name="allergies">
		<Legend>Select your allergies</Legend>
		{#each allergies as allergy}
			<Control>
				<input
					type="checkbox"
					{...controlProps()}
					bind:group={$formData.allergies}
					value={allergy}
				/>
				<Label>{value}</Label>
			</Control>
		{/each}
		<Description>We'll accommodate your dietary restrictions.</Description>
		<FieldErrors />
	</Fieldset>
	<button type="submit">Submit</button>
</form>
```

<Step>Improve Validation</Step>

We now have a functional checkbox group that allows users to select multiple options from a list. However, we can make some improvements to enhance the user experience and provide better validation feedback.

You may have noticed that users can select `"None"` and another allergy at the same time, which doesn't make sense. We can address this by adding a refinement to our schema to ensure that if `"None"` is selected, no other allergies can be selected.

```svelte title="+page.svelte"  {10-12}
<script lang="ts" context="module">
	import { z } from "zod";

	const allergies = ["None", "Peanuts", "Shellfish", "Lactose", "Gluten"] as const;

	export const schema = z.object({
		allergies: z
			.array(z.enum(allergies))
			.min(1, "If you don't have any allergies, select 'None'.")
			.refine((v) => {
				return v.includes("None") ? v.length === 1 : true;
			}, "If you select 'None', you can't select any other allergies."),
	});
</script>

<!-- ...rest -->
```

We've added a `refine` method to the `allergies` array to ensure that if `"None"` is selected, no other allergies can be selected. If the user selects `"None"`, the array length must be `1`, otherwise the validation will fail and the custom error message will be displayed.

<Step>Finished Product</Step>

That's it! You've successfully created a checkbox group with Formsnap. With some custom styles and components applied, the finished product might look something like this:

<CheckboxGroup />

</Steps>

## TLDR - Show Me the Code

For those who prefer to skip the guide and get straight to the code, here's the code required to create a checkbox group with Formsnap.

```ts title="+page.server.ts"
import { superValidate } from "sveltekit-superforms";
import type { Actions, PageServerLoad } from "./$types";
import { schema } from "./+page.svelte";
import { zod } from "sveltekit-superforms/adapters";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(schema)),
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(schema));

		if (!form.valid) {
			return fail(400, { form });
		}

		return { form };
	},
};
```

```svelte title="+page.svelte"
<script lang="ts" context="module">
	import { z } from "zod";

	export const allergies = ["None", "Peanuts", "Shellfish", "Lactose", "Gluten"] as const;

	export const schema = z.object({
		allergies: z
			.array(z.enum(allergies))
			.min(1, "If you don't have any allergies, select 'None'.")
			.refine((v) => {
				return v.includes("None") ? v.length === 1 : true;
			}, "If you select 'None', you can't select any other allergies."),
	});
</script>

<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import {
		Fieldset,
		Legend,
		Label,
		Control,
		FieldErrors,
		Description,
		controlProps,
	} from "formsnap";

	let { data } = $props();

	const form = superForm(data, {
		validators: zodClient(schema),
	});
	const { form: formData } = form;
</script>

<form method="POST" use:form.enhance>
	<Fieldset {form} name="allergies">
		<Legend>Select any allergies you may have</Legend>
		{#each allergies as allergy}
			<Control>
				<input
					type="checkbox"
					{...controlProps()}
					bind:group={$formData.allergies}
					value={allergy}
				/>
				<Label>{allergy}</Label>
			</Control>
		{/each}
		<Description>We'll accommodate your dietary restrictions.</Description>
		<FieldErrors />
	</Fieldset>
	<button type="submit">Submit</button>
</form>
```
