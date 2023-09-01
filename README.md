# Formsnap

The goal of this library is to make working with the already incredible [sveltekit-superforms](https://github.com/ciscoheat/sveltekit-superforms) even more pleasant, by wrapping it with accessible form components.

🚧 WORK IN PROGRESS 🚧

## Installation

```bash
npm i formsnap
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
	theme: z.enum(["light", "dark"]).default("light")
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
		form: superValidate(settingsFormSchema)
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
	data={data.form}
	let:form
	method="POST"
	action="?/someAction"
>
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
		<Form.Message />
	</Form.Field>
	<Form.Field {form} name="marketingEmails">
		<Form.Checkbox />
		<Form.Label>Receive marketing emails from us</Form.Label>
		<Form.Message />
	</Form.Field>
	<Form.Field {form} name="theme">
		<Form.RadioItem value="light" />
		<Form.Label>Light</Form.Label>
		<Form.Message />
	</Form.Field>
	<Form.Field {form} name="theme">
		<Form.RadioItem value="dark" />
		<Form.Label>Dark</Form.Label>
		<Form.Message />
	</Form.Field>
	<button type="submit">Submit</button>
</Form.Root>
```

## API

### Form.Root

The form root component is responsible for setting up the form and passing it down to the rest of the components via a slot prop.

#### Props

| Name    | Type                            | Default | Description                                                                                          |
| ------- | ------------------------------- | ------- | ---------------------------------------------------------------------------------------------------- |
| schema  | `AnyZodObject`                  | -       | The Zod schema to validate the form against.                                                         |
| data    | `SuperValidated<typeof schema>` | -       | The form object returned from superforms.                                                            |
| options | `FormOptions`                   | -       | Options you would normally use to initialize Superforms.                                             |
| debug   | `boolean`                       | `false` | Whether to render Superforms' `<SuperDebug />` on the page. Useful for debugging during development. |
| ...     | `HTMLFormAttributes`            | -       | Any other props you want to pass to the form element.                                                |

#### Slot Props

| Name | Type                                       | Description                                                                                                                                 |
| ---- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| form | `{ form: SuperForm; schema: AnyZodObject}` | The form object returned from superforms along with it's schema. This is passed as a prop to the `Form.Field`s for typesafe values & names. |

### Form.Field

The form field component is responsible for managing the context of the field which will be used by its children.

#### Props

| Name | Type                                        | Default | Description                                             |
| ---- | ------------------------------------------- | ------- | ------------------------------------------------------- |
| form | `{ form: SuperForm; schema: AnyZodObject }` | -       | The `form` from the `Form.Root` component's slot props. |

#### Slot Props

| Name  | Type                          | Description                                                                        |
| ----- | ----------------------------- | ---------------------------------------------------------------------------------- |
| field | [`FieldHelper`](#fieldhelper) | An object containing helpers useful when using your own form elements / components |

### Form.Label

Automatically associates the label with the input element within the same `Form.Field` component.

### Form.Message

Renders validation messages for the field.

### Form.Description

Renders a description for the field.

#### `FieldHelper`

```ts
type FieldHelpers<T> = {
	/**
	 * The attributes to be spread onto your input element.
	 */
	attrs: Record<PropertyKey, string>;

	/**
	 * A function which updates the Superforms `form` store value for this field.
	 *
	 * @param v - The value to set the field to.
	 */
	updateValue: (v: unknown) => void;

	/**
	 * A helper function which handles the input event from your input element.
	 * It automatically updates the Superforms `form` store value for this field with the input's value.
	 *
	 * @param e - The input event from your input element.
	 */
	handleInput: (e: Event) => void;

	/**
	 * The value of the field.
	 */
	value: T;
};
```
