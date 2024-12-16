---
title: Quick start
description: Learn how to take off with Formsnap by building a settings form.
section: Anchors
---

<script>
	import { Steps, Step } from '@svecodocs/kit';
</script>

## Installation

Since Formsnap is built on top of [Superforms](https://superforms.rocks), you'll need to install it as well as a schema validation library of your choice. We'll use [Zod](https://zod.dev).

```bash
npm install formsnap sveltekit-superforms zod
```

## Tutorial: Build a settings form

Before diving into this tutorial, it's important to be confident with [Superforms](https://superforms.rocks), as Formsnap is built on top of it and uses the same APIs.

<Steps>

<Step>Define a Zod schema</Step>

This schema will represent the shape of our form data. It's used to validate the form data on the client (optional) and server, along with some other useful things.

```ts title="src/routes/settings/schema.ts"
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
	allergies: z.array(z.enum(allergies)),
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

<Step>Return the form from a load function</Step>

In Superforms fashion, we'll return the form from a load function to seamlessly merge our `PageData` and `ActionData`.

```ts title="src/routes/settings/+page.server.ts"
import type { PageServerLoad } from "./$types";
import { schema } from "./schema";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(schema)),
	};
};
```

<Step>Setup the form in the page component</Step>

Now that we have our form in the `PageData` object, we can use it, along with the schema we defined earlier, to setup the form in our page component.

```svelte title="src/routes/settings/+page.svelte"
<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { Field } from "formsnap";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { allergies, schema, themes } from "./schema.js";
	import SuperDebug from "sveltekit-superforms";

	let { data } = $props();

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});
	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
	<!-- ... -->
</form>
<SuperDebug data={$formData} />
```

We'll initialize the super form using `superForm` and pass in the form from the `PageData`. We'll also enable client-side validation by passing the `validators` option. Then, we'll setup the form using the `enhance` function, which will progressively enhance the form with client-side validation and other features.

<Step>Constructing a form field</Step>

You can think of form fields as the building blocks of your form. Each property of the schema will have a corresponding form field, which will be responsible for displaying the error messages and description.

We'll start with the `email` field and work our way down.

```svelte title="src/routes/settings/+page.svelte"
<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { Field } from "formsnap";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { allergies, schema, themes } from "./schema.js";
	import SuperDebug from "sveltekit-superforms";

	let { data } = $props();

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});
	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
	<Field {form} name="email">
		<!-- ... -->
	</Field>
</form>
<SuperDebug data={$formData} />
```

We pass the `form` and `name` to the `Field` component, which will be used to setup the context for the field. The `name` is typed to the keys of the schema, so it's type-safe.

Now let's add the remaining parts of the field:

```svelte title="src/routes/settings/+page.svelte"
<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { Field, Control, Label, Description, FieldErrors, controlProps } from "formsnap";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { allergies, schema, themes } from "./schema.js";
	import SuperDebug from "sveltekit-superforms";

	let { data } = $props();

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});
	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
	<Field {form} name="email">
		<Control>
			<Label>Email</Label>
			<input {...controlProps()} type="email" bind:value={$formData.email} />
		</Control>
		<Description>Use your company email if you have one.</Description>
		<FieldErrors />
	</Field>
</form>
<SuperDebug data={$formData} />
```

We've first added the [Control](/docs/components/control) component. `Control`s are used to represent a form control and its label. They keep the control and label in sync via the `controlProps()` function, which is provided by the `Control` component and is spread onto the control element. Inside the `Control`, we've added the [Label](/docs/components/label) component, which will automatically associate itself with the control the `props` are spread onto. We've also added the control itself, which is an `input` that we're binding to the `email` property of the form data.

The [Description](/docs/components/description) component is optional, but it's useful for providing additional context to the user about the field. It'll be synced with the `aria-describedby` attribute on the input, so it's accessible to screen readers.

The [FieldErrors](/docs/components/field-errors) component is used to display validation errors to the user. It also is synced with the `aria-describedby` attribute on the input, which can receive multiple IDs, so that screen readers are able to read the error messages in addition to the description.

And that's really all it takes to setup a form field. Let's continue on with the rest of the fields.

<Step>Add remaining form fields</Step>

```svelte title="src/routes/settings/+page.svelte"
<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import {
		Field,
		Control,
		Label,
		Description,
		FieldErrors,
		Fieldset,
		Legend,
		controlProps,
	} from "formsnap";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { allergies, schema, themes } from "./schema.js";
	import SuperDebug from "sveltekit-superforms";

	let { data } = $props();

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});
	const { form: formData, enhance } = form;
</script>

<form use:enhance class="mx-auto flex max-w-md flex-col" method="POST">
	<Field {form} name="email">
		<Control>
			<Label>Email</Label>
			<input {...controlProps()} type="email" bind:value={$formData.email} />
		</Control>
		<Description>Company email is preferred</Description>
		<FieldErrors />
	</Field>
	<Field {form} name="bio">
		<Control>
			<Label>Bio</Label>
			<textarea {...controlProps()} bind:value={$formData.bio} />
		</Control>
		<Description>Tell us a bit about yourself.</Description>
		<FieldErrors />
	</Field>
	<Field {form} name="language">
		<Control>
			<Label>Language</Label>
			<select {...controlProps()} bind:value={$formData.language}>
				<option value="fr">French</option>
				<option value="es">Spanish</option>
				<option value="en">English</option>
			</select>
		</Control>
		<Description>Help us address you properly.</Description>
		<FieldErrors />
	</Field>
	<Fieldset {form} name="theme">
		<Legend>Select your theme</Legend>
		{#each themes as theme}
			<Control>
				<Label>{theme}</Label>
				<input
					{...controlProps()}
					type="radio"
					value={theme}
					bind:group={$formData.theme}
				/>
			</Control>
		{/each}
		<Description>We prefer dark mode, but the choice is yours.</Description>
		<FieldErrors />
	</Fieldset>
	<Field {form} name="marketingEmails">
		<Control>
			<input {...controlProps()} type="checkbox" bind:checked={$formData.marketingEmails} />
			<Label>I want to receive marketing emails</Label>
		</Control>
		<Description>Stay up to date with our latest news and offers.</Description>
		<FieldErrors />
	</Field>
	<Fieldset {form} name="allergies">
		<Legend>Food allergies</Legend>
		{#each allergies as allergy}
			<Control>
				<input
					{...controlProps()}
					type="checkbox"
					bind:group={$formData.allergies}
					value={allergy}
				/>
				<Label>{allergy}</Label>
			</Control>
		{/each}
		<Description>When we provide lunch, we'll accommodate your needs.</Description>
		<FieldErrors />
	</Fieldset>
	<button>Submit</button>
</form>
<SuperDebug data={$formData} />
```

You may have noticed for the `allergies` and `theme` fields, we used the [Fieldset](/docs/components/fieldset) and [Legend](/docs/components/legend) components. These are used to group related fields together and provide a title for the group, which is great for accessibility and organization. Additionally, we only use a single [FieldError](/docs/components/field-errors) and [Description](/docs/components/description) component for the entire group, and use an [Control](/docs/components/control) for each field in the group to associate the label with the control.

</Steps>

And that's it! You've now successfully built a settings form with Formsnap!

## Next Steps

Now that you've built your first form, you're ready to start building more complex forms with Formsnap & Superforms. Be sure to check out the rest of the documentation to learn more about the different components and APIs available to you.
