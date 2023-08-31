# \<Form /> - name tbd..

The goal of this library is to make working with the already incredible [sveltekit-superforms](https://github.com/ciscoheat/sveltekit-superforms) even more pleasant, by wrapping it with accessible form components.

🚧 WORK IN PROGRESS 🚧

## Usage

You'll conduct the intial Superforms setup just as your normally would, where you define a schema and return the form from your load function.

### 1. Define a Zod schema

```ts
// schemas.ts
import { z } from "zod";
export const someFormSchema = z.object({
	username: z
		.string()
		.min(3, "Username must be at least 3 characters")
		.max(20, "Username must be at most 20 characters"),
	email: z.string().email("Invalid email address"),
	language: z.enum(["en", "es", "fr"], {
		required_error: "You must select a language"
	}),
	bio: z.string().max(250, "Bio must be at most 250 characters").optional(),
	website: z.string().url("Invalid URL").optional(),
	terms: z.boolean().refine((v) => v === true, {
		message: "You must agree to the terms and conditions"
	})
});
```

### 2. Return the form from your load function

```ts
// +page.server.ts
import { superValidate } from "sveltekit-superforms/server";
import type { PageServerLoad } from "./$types";
import { someFormSchema } from "./schemas";

export const load: PageServerLoad = async () => {
	return {
		form: superValidate(someFormSchema)
	};
};
```

### 3. Construct the form in your page

```svelte
<script lang="ts">
	import { Form } from "@huntabyte/form";
	import { someFormSchema } from "./schemas";
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<Form.Root schema={someFormSchema} data={data.form} let:form method="POST" action="?/someAction">
	<Form.Field {form} name="username">
		<Form.Label>Username</Form.Label>
		<Form.Input />
		<Form.Message />
	</Form.Field>
	<Form.Field {form} name="email">
		<Form.Label>Email</Form.Label>
		<Form.Input />
		<Form.Message />
	</Form.Field>
	<Form.Field {form} name="bio">
		<Form.Label>Bio</Form.Label>
		<Form.Textarea />
		<Form.Message />
	</Form.Field>
	<Form.Field {form} name="language">
		<Form.Label>Language</Form.Label>
		<Form.Select>
			<option value="en">English</option>
			<option value="es">Spanish</option>
			<option value="fr">French</option>
		</Form.Select>
		<Form.Message class="text-destructive" />
	</Form.Field>
</Form.Root>
```
