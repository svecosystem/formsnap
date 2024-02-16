---
title: Quick start
description: Learn how to take off with Formsnap by building a settings form.
---

<script>
	import { Steps } from '$lib/components';
</script>

## Installation

Since Formsnap is built on top of [Superforms](https://superforms.rocks), you'll need to install it as well as a schema validation library of your choice. We'll use [Zod](https://zod.dev).

```bash
npm install formsnap sveltekit-superforms zod
```

## Tutorial: Build a settings form

Before diving into this tutorial, it's important to be confident with [Superforms](https://superforms.rocks), as Formsnap is built on top of it and uses the same APIs.

<Steps>

### Define a Zod schema

This schema will represent the shape of our form data. It's used to validate the form data on the client (optional) and server, along with some other useful things.

```ts title="src/routes/settings/schema.ts" showLineNumbers
import { z } from "zod";

export const themes = ["light", "dark"] as const;
export const languages = ["en", "es", "fr"] as const;
export const allergies = ["peanuts", "dairy", "gluten", "soy", "shellfish"] as const;

export const schema = z.object({
	email: z.string().email("Please enter a valid email."),
	bio: z.string().optional(),
	theme: z.enum(themes).default("light"),
	language: z.enum(languages).default("en"),
	marketingEmails: z.boolean().default(true),
	allergies: z.enum(allergies).array().default([]),
});
```

Looking at the schema above, we know we'll need a few different input types to represent the different data types. Here's how we'll map the schema to input types:

- `email` -> `<input type="email">`
- `bio` -> `<textarea>`
- `theme` -> `<input type="radio">`
- `language` -> `<select>`
- `marketingEmails` -> `<input type="checkbox>`
- `allergies` -> `<input type="checkbox">` (group/multiple)

Of course, there are other ways to represent the data, but this is the approach we'll take for this tutorial.

### Return the form from a load function

In Superforms fashion, we'll return the form from a load function to seamlessly merge our `PageData` and `ActionData`.

```ts title="src/routes/settings/+page.server.ts" showLineNumbers
import type { PageServerLoad } from "./$types";
import { schema } from "./schema";
import { superValidate } from "sveltekit-superforms/server";
import { zod } from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(schema)),
	};
};
```

### Setup the form in the page component

Now that we have our form in the `PageData` object, we can use it, along with the schema we defined earlier, to setup the form in our page component.

```svelte title="src/routes/settings/+page.svelte" showLineNumbers
<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { Form } from "formsnap";
	import { zodClient } from "sveltekit-superforms/adapters";
	import type { PageData } from "./$types.js";
	import { allergies, schema, themes } from "./schema.js";
	import SuperDebug from "sveltekit-superforms";

	export let data: PageData;

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});
	const { form: formData } = form;
</script>

<form method="POST" use:enhance>
	<!-- ... -->
</form>
<SuperDebug data={$formData} />
```

We'll initialize the super form using `superForm` and pass in the form from the `PageData`. We'll also enable client-side validation by passing the `validators` option. Then, we'll setup the form using the `enhance` function, which will progressively enhance the form with client-side validation and other features.

### Constructing a form field

You can think of form fields as the building blocks of your form. Each property of the schema will have a corresponding form field, which will be responsible for displaying the error messages and description.

We'll start with the `email` field and work our way down.

```svelte title="src/routes/settings/+page.svelte" showLineNumbers {15,17}
<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { Form } from "formsnap";
	import { zodClient } from "sveltekit-superforms/adapters";
	import type { PageData } from "./$types.js";
	import { allergies, schema, themes } from "./schema.js";
	import SuperDebug from "sveltekit-superforms";

	export let data: PageData;

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});
	const { form: formData } = form;
</script>

<form method="POST" use:enhance>
	<Form.Field {form} name="email">
		<!-- ... -->
	</Form.Field>
</form>
<SuperDebug data={$formData} />
```

We pass the `form` and `name` to the `Field` component, which will be used to setup the context for the field. The `name` is typed to the keys of the schema, so it's type-safe.

Now let's add the remaining parts of the field:

```svelte title="src/routes/settings/+page.svelte" showLineNumbers {16-19}
<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { Form } from "formsnap";
	import { zodClient } from "sveltekit-superforms/adapters";
	import type { PageData } from "./$types.js";
	import { allergies, schema, themes } from "./schema.js";
	import SuperDebug from "sveltekit-superforms";

	export let data: PageData;

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});
	const { form: formData } = form;
</script>

<form method="POST" use:enhance>
	<Form.Field {form} name="email">
		<Form.Item let:attrs>
			<Form.Label>Email</Form.Label>
			<input {...attrs} type="email" bind:value={$formData.email} />
		</Form.Item>
		<Form.Description>Use your company email if you have one.</Form.Description>
		<Form.Validation />
	</Form.Field>
</form>
<SuperDebug data={$formData} />
```

We've first added the `Item` component. `Item`s are used to represent a form control and its label. They keep the control and label in sync via the `attrs` slot prop, which is spread onto the control. Inside the `Item`, we've added the `Label` component, which will automatically associate itself with the control the `attrs` are spread onto. We've also added the control itself, which is an `input` that we're binding to the `email` property of the form data.

The `Description` component is optional, but it's useful for providing additional context to the user about the field. It'll be synced with the `aria-describedby` attribute on the input, so it's accessible to screen readers.

The `Validation` component is used to display validation errors to the user. It also is synced with the `aria-describedby` attribute on the input, which can receive multiple IDs, so that screen readers are able to read the error messages in addition to the description.

And that's really all it takes to setup a form field. Let's continue on with the rest of the fields.

### Add remaining form fields

```svelte title="src/routes/settings/+page.svelte" showLineNumbers
<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { Form } from "formsnap";
	import { zodClient } from "sveltekit-superforms/adapters";
	import type { PageData } from "./$types.js";
	import { allergies, schema, themes } from "./schema.js";
	import SuperDebug from "sveltekit-superforms";

	export let data: PageData;

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});
	const { form: formData } = form;
</script>

<form use:form.enhance class="mx-auto flex max-w-md flex-col" method="POST">
	<Form.Field {form} name="email">
		<Form.Item let:attrs>
			<Form.Label>Email</Form.Label>
			<input {...attrs} type="email" bind:value={$formData.email} />
		</Form.Item>
		<Form.Description>Company email is preferred</Form.Description>
		<Form.Validation />
	</Form.Field>
	<Form.Field {form} name="bio">
		<Form.Item let:attrs>
			<Form.Label>Bio</Form.Label>
			<textarea {...attrs} bind:value={$formData.bio} />
		</Form.Item>
		<Form.Description>Tell us a bit about yourself.</Form.Description>
		<Form.Validation />
	</Form.Field>
	<Form.Field {form} name="language">
		<Form.Item let:attrs>
			<Form.Label>Language</Form.Label>
			<select {...attrs} bind:value={$formData.language}>
				<option value="fr">French</option>
				<option value="es">Spanish</option>
				<option value="en">English</option>
			</select>
		</Form.Item>
		<Form.Description>Help us address you properly.</Form.Description>
		<Form.Validation />
	</Form.Field>
	<Form.Field {form} name="theme">
		<fieldset>
			<legend>Select your theme</legend>
			{#each themes as theme}
				<Form.Item let:attrs>
					<Form.Label>{theme}</Form.Label>
					<input
						{...attrs}
						type="radio"
						value={theme}
						bind:group={$formData.theme}
					/>
				</Form.Item>
			{/each}
			<Form.Description
				>We prefer dark mode, but the choice is yours.</Form.Description
			>
			<Form.Validation />
		</fieldset>
	</Form.Field>
	<Form.Field {form} name="marketingEmails">
		<Form.Item let:attrs>
			<input {...attrs} type="checkbox" bind:checked={$formData.marketingEmails} />
			<Form.Label>I want to receive marketing emails</Form.Label>
		</Form.Item>
		<Form.Description
			>Stay up to date with our latest news and offers.</Form.Description
		>
		<Form.Validation />
	</Form.Field>
	<Form.Field {form} name="allergies">
		{#each allergies as allergy}
			<Form.Item let:attrs>
				<input
					{...attrs}
					type="checkbox"
					bind:group={$formData.allergies}
					value={allergy}
				/>
				<Form.Label>{allergy}</Form.Label>
			</Form.Item>
		{/each}
		<Form.Description
			>When we provide lunch, we'll accommodate your needs.</Form.Description
		>
		<Form.Validation />
	</Form.Field>
	<button>Submit</button>
</form>
<SuperDebug data={$formData} />
```

You likely noticed for the `theme` field, we only used one `Field` component, but we used an `Item` component for each radio input. This is because the `Item` component is used to represent a form control and its label, and the `Field` component is used to setup the context for the field. Since the radio inputs are related to the same field, we only need one `Field` component to setup the context for the field, and then we can use an `Item` component for each radio input.

The validation and description components are shared across all the radio inputs in that field, so we only need to include them once.

</Steps>

And that's it! You've now successfully built a settings form with Formsnap!

## Next Steps

Now that you've built your first form, you're ready to start building more complex forms with Formsnap & Superforms. Be sure to check out the rest of the documentation to learn more about the different components and APIs available to you.
