---
title: Quick start
description: Learn how to take off with Formsnap by building a settings form.
---

<script>
	import { Steps } from '@/components';
</script>

## Installation

Since Formsnap is built on top of [Superforms](https://superforms.rocks), you'll need to install it as well as [Zod](https://zod.dev).

```bash
npm install formsnap sveltekit-superforms zod
```

## Tutorial: Build a settings form

Before diving into this tutorial, it's important to have some familiarity with [Superforms](https://superforms.rocks), as Formsnap is built on top of it and uses the same APIs.

<Steps>

### Define a Zod schema

This schema will represent the shape of our form data. It's used to validate the form data on the client (optional) and server, along with some other useful things.

```ts title="src/routes/settings/schema.ts" showLineNumbers
import { z } from "zod";

const settingsSchema = z.object({
	email: z.string().email("Please enter a valid email."),
	bio: z.string().optional(),
	theme: z.enum(["light", "dark"]).default("light"),
	language: z.enum(["en", "es", "fr"]).default("en"),
	marketingEmails: z.boolean().default(true)
});
```

Looking at the schema above, we know we'll need a few different input types to represent the different data types. We'll likely want to use a regular input for the email, a textarea for the bio, a select for language, a radio group for the theme, and a checkbox for the marketing email opt-in.

Of course, there are other ways to represent the data, but this is the approach we'll take for this tutorial.

### Return the form from a load function

In Superforms fashion, we'll return the form from a load function to seamlessly merge our `PageData` and `ActionData`.

```ts title="src/routes/settings/+page.server.ts" showLineNumbers
import type { PageServerLoad } from "./$types";
import { settingsSchema } from "./schema";
import { superValidate } from "sveltekit-superforms/server";

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(settingsSchema)
	};
};
```

### Setup the form in the page component

Now that we have our form in the `PageData` object, we can use it, along with the schema we defined earlier, to setup the form in our page component.

```svelte title="src/routes/settings/+page.svelte" showLineNumbers
<script lang="ts">
	import { Form } from "formsnap";
	import type { PageData } from "./$types";
	import { settingsSchema } from "./schemas.ts";
	export let data: PageData;
</script>

<Form.Root form={data.form} schema={settingsSchema} let:config debug={true}>
	<!-- ... -->
</Form.Root>
```

`Form.Root` is the component which renders a `<form>` element and provides the context for its children. It requires a `form` prop which is the form we return from our load function, and a `schema` prop which is the Zod schema we defined earlier.

In addition to the required props, it also accepts any attribute you could normally pass to a `<form>` element, as well as an `options` prop, which allows us to customize the form's behavior with the same options we can pass to `superForm` when using it directly.

It also provides a `config` slot prop, which we're accessing with `let:config`. This prop is used to properly type and wire up the form fields, which we'll see in the next step.

And lastly, we can pass a `debug` prop to enable debug mode, which will display Superform's `<SuperDebug />` component at the bottom of the form to help with debugging.

### Constructing a form field

You can think of form fields as the building blocks of your form. Each input will have a form field responsible for managing its state, validation, and accessibility attributes. We'll start with the `email` field and work our way down.

```svelte title="src/routes/settings/+page.svelte" showLineNumbers {15,17}
<script lang="ts">
	import { Form } from "formsnap";
	import type { PageData } from "./$types";
	import { settingsSchema } from "./schemas.ts";
	export let data: PageData;
</script>

<Form.Root form={data.form} schema={settingsSchema} let:config debug={true}>
	<Form.Field {config} name="email">
		<!-- ... -->
	</Form.Field>
</Form.Root>
```

We pass the `config` slot prop we received from `Form.Root` to the field, along with the `name` of the field, which is typed to be a property of our schema.

Now that we have our field and the context has been setup under the hood, we can start adding the components that bring the field to life.

```svelte title="src/routes/settings/+page.svelte" showLineNumbers {16-19}
<script lang="ts">
	import { Form } from "formsnap";
	import type { PageData } from "./$types";
	import { settingsSchema } from "./schemas.ts";
	export let data: PageData;
</script>

<Form.Root form={data.form} schema={settingsSchema} let:config debug={true}>
	<Form.Field {config} name="email">
		<Form.Label>Email</Form.Label>
		<Form.Input />
		<Form.Description>Use your company email if you have one.</Form.Description>
		<Form.Validation />
	</Form.Field>
</Form.Root>
```

We've added `Label`, `Input`, `Description`, and `Validation` components to our field. The label and input are pretty self-explanatory, they render `<label>` and `<input>` elements respectively, and the ids are synced up so that clicking the label focuses the input.

The `Description` component is optional, but it's useful for providing additional context to the user about the field. It'll be synced with the `aria-describedby` attribute on the input, so it's accessible to screen readers.

The `Validation` component is used to display validation errors to the user. It also is synced with the `aria-describedby` attribute on the input, which can receive multiple IDs, so that screen readers are able to read the error messages in addition to the description.

And that's really all it takes to setup a form field. Let's continue on with the rest of the fields.

### Add remaining form fields

```svelte title="src/routes/settings/+page.svelte" showLineNumbers
<script lang="ts">
	import { Form } from "formsnap";
	import type { PageData } from "./$types";
	import { settingsSchema } from "./schemas.ts";
	export let data: PageData;
</script>

<Form.Root form={data.form} schema={settingsSchema} let:config debug={true}>
	<Form.Field {config} name="email">
		<Form.Label>Email</Form.Label>
		<Form.Input />
		<Form.Description>Use your company email if you have one.</Form.Description>
		<Form.Validation />
	</Form.Field>
	<Form.Field {config} name="bio">
		<Form.Label>Bio</Form.Label>
		<Form.Textarea />
		<Form.Description>
			Your bio will be visible on your public profile.
		</Form.Description>
		<Form.Validation />
	</Form.Field>
	<fieldset>
		<legend>Select your theme</legend>
		<Form.Field {config} name="theme">
			<Form.Radio value="light" />
			<Form.Label>Light</Form.Label>
			<Form.Validation />
		</Form.Field>
		<Form.Field {config} name="theme">
			<Form.Radio value="dark" />
			<Form.Label>Dark</Form.Label>
		</Form.Field>
	</fieldset>
	<Form.Field {config} name="language">
		<Form.Label>Language</Form.Label>
		<Form.Select>
			<option value="en">English</option>
			<option value="es">Spanish</option>
			<option value="fr">French</option>
		</Form.Select>
		<Form.Description>
			Select your preferred language to use in the app.
		</Form.Description>
		<Form.Validation />
	</Form.Field>
	<button type="submit"> Save </button>
</Form.Root>
```

We're still working on the best way to handle radio groups, but for now, we can use a fieldset and wrap each radio in its own field. We're only adding the `Validation` component to the first radio field, since they're both using the same name, and we only want to display the error once, so that we aren't spamming the screen reader or cluttering the UI with redundant validation messages.

</Steps>

And that's it! You've now successfully built a settings form with Formsnap!

## Next Steps

Now that you've built your first form, you're ready to start building more complex forms with Formsnap & Superforms. Be sure to check out the rest of the documentation to learn more about the different components and APIs available to you.
