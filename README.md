# Formsnap

The goal of this library is to make working with the already incredible [sveltekit-superforms](https://github.com/ciscoheat/sveltekit-superforms) even more pleasant, by wrapping it with accessible form components.

## Installation

```bash
npm i formsnap sveltekit-superforms <your-schema-library>
```

## Usage

You'll handle the initial Superforms setup just as you normally would, where you define a schema and return the form from your load function. The magic happens once you have access to that form inside of your page component.

#### 1. Define a Zod schema

```ts
// schemas.ts
import { z } from "zod";
export const settingsFormSchema = z.object({
	email: z.string().email(),
	bio: z.string().max(250).optional(),
	language: z.enum(["en", "es", "fr"]),
	marketingEmails: z.boolean().default(true),
	theme: z.enum(["light", "dark"]).default("light"),
});
```

#### 2. Return the form from your load function

```ts
// +page.server.ts
import { superValidate } from "sveltekit-superforms/server";
import type { PageServerLoad } from "./$types";
import { settingsFormSchema } from "./schemas";

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(settingsFormSchema),
	};
};
```

#### 3. Construct the form in your page

```svelte
<script lang="ts">
	import { Form } from "@huntabyte/form";
	import { settingsFormSchema } from "./schemas";
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<Form.Root
	schema={settingsFormSchema}
	form={data.form}
	let:config
	action="?/someAction"
>
	<Form.Field {config} name="email">
		<Form.Label>Email</Form.Label>
		<Form.Input />
		<Form.Validation />
	</Form.Field>
	<Form.Field {config} name="bio">
		<Form.Label>Bio</Form.Label>
		<Form.Textarea />
		<Form.Validation />
	</Form.Field>
	<Form.Field {config} name="language">
		<Form.Label>Language</Form.Label>
		<Form.Select>
			<option value="en">English</option>
			<option value="es">Spanish</option>
			<option value="fr">French</option>
		</Form.Select>
		<Form.Validation />
	</Form.Field>
	<Form.Field {config} name="marketingEmails">
		<Form.Checkbox />
		<Form.Label>Receive marketing emails from us</Form.Label>
		<Form.Validation />
	</Form.Field>
	<Form.Field {config} name="theme">
		<Form.RadioItem value="light" />
		<Form.Label>Light</Form.Label>
		<Form.Validation />
	</Form.Field>
	<Form.Field {config} name="theme">
		<Form.RadioItem value="dark" />
		<Form.Label>Dark</Form.Label>
		<Form.Validation />
	</Form.Field>
	<button type="submit">Submit</button>
</Form.Root>
```

Check out [Formsnap.dev](https://formsnap.dev) for more documentation.
