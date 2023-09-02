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
	theme: z.eum(["light", "dark"]).default("light"),
	language: z.eum(["en", "es", "fr"]).default("en"),
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

export const load: PageServerLoad = () => {
	return {
		form: superValidate(settingsSchema)
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

<Form.Root data={data.form} schema={settingsSchema} let:form method="POST">
	<!-- ... -->
</Form.Root>
```

`Form.Root` is the component which renders a `<form>` element and provides the context for its children. It requires a `data` prop which is the form we return from our load function, and a `schema` prop which is the Zod schema we defined earlier.

In addition to the required props, it also accepts any attribute you could normally pass to a `<form>` element, as well as an `options` prop, which allows us to customize the form's behavior with the same options we can pass to `superForm` when using it directly.

It also provides a `form` slot prop, which we're accessing with `let:form`. This prop is used to properly type and wire up the form fields, which we'll see in the next step.

### Add a form field

You can think of form fields as the building blocks of your form. Each input will have a form field responsible for managing its state, validation, and accessibility attributes. We'll start with the `email` field and work our way down.

```svelte title="src/routes/settings/+page.svelte" showLineNumbers {9,11}
<script lang="ts">
	import { Form } from "formsnap";
	import type { PageData } from "./$types";
	import { settingsSchema } from "./schemas.ts";
	export let data: PageData;
</script>

<Form.Root data={data.form} schema={settingsSchema} let:form method="POST">
	<Form.Field {form} name="email">
		<!-- ... -->
	</Form.Field>
</Form.Root>
```

We pass the `form` slot prop we received from `Form.Root` to the field, along with the `name` of the field, which is typed to be a property of our schema.

</Steps>
