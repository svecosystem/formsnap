---
title: Introduction
description: What is this?
---

<script>
	import { Steps, Callout } from "@/components"
	import A from "@/components/markdown/a.svelte"
	import { WarningDiamond } from "@/components/icons"
	import * as Alert from "@/components/ui/alert"
</script>

Formsnap takes the already incredible [sveltekit-superforms](https://github.com/ciscoheat/sveltekit-superforms) (winner of [Svelte Hack 2023](https://hack.sveltesociety.dev/winners) for best library), made by the brilliant [Andreas Söderlund](https://github.com/ciscoheat) and adds a component layer of abstraction to make it even simpler to use while also providing more accessible forms by default.

By design, [Superforms](https://superforms.rocks) is a very low-level library that gives you the tools to build and customize the behavior of your forms to your liking. Unfortunately, this also comes at the cost of writing some boilerplate code to get a form up and running. Since most applications are form heavy, this can become quite tedious, time consuming, and error prone.

Formsnap aims to solve this by providing you with a set of components that _automagically_ handle a lot of the boilerplate, while still giving you the ability to customize the behavior of your forms. Additionally, your forms will be accessible by default. You don't even have to think about it. Everyone wins!

To better demonstrate the value-add, let's look at what it takes to build an accessible signup form that has custom client-side validation using _only_ Superforms, and compare it to the same when you combine it with Formsnap.

## Initializing a Superform

Since the following steps are the same whether you're just using Superforms, or combining it with Formsnap, we'll use this same initialization code for both examples.

If you aren't already familiar with Superforms, it's highly recommended that you check out the [documentation](https://superforms.rocks) before continuing. It's a fantastic library that you'll need to understand the basics of in order to get the most out of this project.

<Steps>

### Define a Zod schema

Superforms requires us to define a [Zod](https://zod.dev) schema that describes the shape of our form. This schema is then used to validate the form data on the client (optional) and server, along with some other useful things.

```ts title="src/routes/sign-up/schema.ts" showLineNumbers
import { z } from "zod";

const signupFormSchema = z.object({
	name: z.string().min(2).max(100),
	email: z.string().email(),
	password: z.string().min(10)
});
```

### Return the form from a load function

To seamlessly merge `PageData` and `ActionData`, we need to return the form from a load function. While this may seem a bit strange, if you've ever tried to wrangle `PageData` and `ActionData` together manually, then you know why this is necessary.

```ts title="src/routes/sign-up/+page.server.ts" showLineNumbers
import type { PageServerLoad } from "./$types";
import { signupFormSchema } from "./schema";
import { superValidate } from "sveltekit-superforms/server";

export const load: PageServerLoad = () => {
	return {
		form: superValidate(signupFormSchema)
	};
};
```

</Steps>

Before we dive into the following code examples, it's important to note that we're intentionally opting out of the native form validation provided by the browser, and instead using our own client-side validation. The reason for this is quite simple. Native browser validation while accessible, is not very customizable, and certainly not pretty.

Having this in mind, we now have the responsibility of ensuring our form is still accessible to users who may be using assistive technology. We'll be using the [WAI ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) spec to help us with this. If you discover any accessibility issues with the code in this guide or with Formsnap in general, please [open an issue](https://github.com/huntabyte/formsnap/issues/new) so we can address it.

## Using _only_ Superforms

```svelte title="src/routes/sign-up/+page.svelte" showLineNumbers
<script lang="ts">
	import type { PageData } from "./$types";
	import { superForm } from "sveltekit-superforms/client";
	import { signupFormSchema } from "./schemas.ts";
	export let data: PageData;

	const { form, errors, enhance } = superForm(data.form, {
		validators: signupFormSchema
	});
</script>

<form method="POST" use:enhance>
	<fieldset>
		<label for="name">Name</label>
		<input
			id="name"
			name="name"
			aria-describedby={$errors.name ? "name-error name-desc" : "name-desc"}
			aria-invalid={$errors.name ? "true" : undefined}
			bind:value={$form.name}
		/>
		<span id="name-desc">Be sure to use your real name.</span>
		<span id="name-error" aria-live="assertive">
			{#if $errors.name}
				{$errors.name}
			{/if}
		</span>
	</fieldset>
	<fieldset>
		<label for="email">Email</label>
		<input
			id="email"
			name="email"
			type="email"
			aria-describedby={$errors.email ? "email-error email-desc" : "email-desc"}
			aria-invalid={$errors.email ? "true" : undefined}
			bind:value={$form.email}
		/>
		<span id="email-desc">It's preferred that you use your company email.</span>
		<span id="email-error" aria-live="assertive">
			{#if $errors.email}
				{$errors.email}
			{/if}
		</span>
	</fieldset>
	<fieldset>
		<label for="password">Password</label>
		<input
			id="password"
			name="password"
			type="password"
			aria-describedby={$errors.password
				? "password-error password-desc"
				: "password-desc"}
			aria-invalid={$errors.password ? "true" : undefined}
			bind:value={$form.password}
		/>
		<span id="password-desc">Ensure the password is at least 10 characters.</span>
		<span id="password-error" aria-live="assertive">
			{#if $errors.password}
				{$errors.password}
			{/if}
		</span>
	</fieldset>
	<button>Submit</button>
</form>
```

That's quite a bit of code required to get a simple, accessible form up and running. While clearly possible, we can't move as quickly as we'd like to, it's not very DRY, and it's a bit ugly to look at.

All is not lost though, as the whole idea behind Formsnap is to make this process simpler, without sacrificing too much of the flexibility that Superforms provides.

## Using Superforms _and_ Formsnap

```svelte title="src/routes/sign-up/+page.svelte" showLineNumbers
<script lang="ts">
	import type { PageData } from "./$types";
	import { signupFormSchema } from "./schemas.ts";
	import { Form } from "formsnap";
	export let data: PageData;
</script>

<Form.Root method="POST" data={data.form} schema={signupFormSchema} let:form>
	<Form.Field {form} name="name">
		<Form.Label>Name</Form.Label>
		<Form.Input />
		<Form.Description />
		<Form.Validation />
	</Form.Field>
	<Form.Field {form} name="email">
		<Form.Label>Email</Form.Label>
		<Form.Input type="email" />
		<Form.Description />
		<Form.Validation />
	</Form.Field>
	<Form.Field {form} name="password">
		<Form.Label>Name</Form.Label>
		<Form.Input type="password" />
		<Form.Description />
		<Form.Validation />
	</Form.Field>
</Form.Root>
```

That's it! We just condensed 66 lines of code into 27, while retaining the same functionality. Now I know some of you (looking at you Kevin) might be thinking, "gross, how many times do I have to type `Form`", but don't you think that tradeoff might be worth it?

You can also alias the names to whatever floats your boat, here's an example:

```ts title="src/lib/no-form-form.ts" showLineNumbers
import { Form as FormSnap } from "formsnap";

const Form = FormSnap.Root;
const Field = FormSnap.Field;
const Label = FormSnap.Label;
const Input = FormSnap.Input;
const Description = FormSnap.Description;
const Validation = FormSnap.Validation;

export { Form, Field, Label, Input, Description, Validation };
```

If aliasing isn't your cup of tea either, there are alternative ways to use Formsnap that while a bit more verbose, still provide the same functionality, while giving you the ability to use native HTML elements or your own custom components. You can read more about this in the [Bring Your Own](/docs/bring-your-own) section of the docs.

To get started using Formsnap, head over to the [Getting Started](/docs/getting-started) section of the docs, where you'll learn how to install and use the library.
