---
title: Introduction
description: What is this?
---

<script>
	import { Steps, Callout } from "$lib/components"
</script>

Formsnap takes the already incredible [sveltekit-superforms](https://github.com/ciscoheat/sveltekit-superforms) (winner of [Svelte Hack 2023](https://hack.sveltesociety.dev/winners) for best library), made by the brilliant [Andreas Söderlund](https://github.com/ciscoheat) and wraps it with components that make it simpler to use while making your forms accessible by default.

To better demonstrate the value-add, let's take a look at a simple form using Superforms, and then the same form using Formsnap.

## Initializing a Superform

The following steps are the same whether you're just using Superforms, or combining it with Formsnap, so we'll use this same initialization code for both examples.

If you aren't already familiar with Superforms, it's **_highly_** recommended that you check out the [documentation](https://superforms.rocks) before continuing. You'll need to understand Superforms to use this project effectively.

<Steps>

### Define a schema

Superforms requires us to define a schema to represent our form. They have adapters for a few popular schema libraries, but we'll be using [Zod](https://zod.dev) for this example. However, you can use any of the other supported libraries, or even write your own adapter.

This schema is used to validate the form data on the client (optional) and server, as well as provide a bit of type safety to our form data.

```ts title="src/routes/sign-up/schema.ts"
import { z } from "zod";

const signupFormSchema = z.object({
	name: z.string().min(2).max(100),
	email: z.string().email(),
	password: z.string().min(10),
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
		form: superValidate(zod(signupFormSchema)),
	};
};
```

</Steps>

Before we dive into the following code examples, it's important to note that we're intentionally opting out of the native form validation provided by the browser, and instead using our own client-side validation. The reason for this is quite simple. Native browser validation while accessible, is not very customizable, and certainly not pretty.

Having this in mind, we now have the responsibility of ensuring our form is still accessible to users using assistive technology. We'll use the [WAI ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) spec to help us with this. If you discover any accessibility issues with the code in this guide or with Formsnap in general, please [open an issue](https://github.com/huntabyte/formsnap/issues/new) and it will be promptly addressed.

## Using _only_ Superforms

```svelte title="src/routes/sign-up/+page.svelte" showLineNumbers
<script lang="ts">
	import type { PageData } from "./$types";
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { signupFormSchema } from "./schema";
	export let data: PageData;

	const { form, errors, enhance, constraints } = superForm(data.form, {
		validators: zodClient(signupFormSchema),
	});
</script>

<form method="POST" use:enhance>
	<label for="name">Name</label>
	<input
		id="name"
		name="name"
		aria-describedby={$errors.name ? "name-error name-desc" : "name-desc"}
		aria-invalid={$errors.name ? "true" : undefined}
		aria-required={$constraints.name?.required ? "true" : undefined}
		bind:value={$form.name}
	/>
	<span id="name-desc">Be sure to use your real name.</span>
	<span id="name-error" aria-live="assertive">
		{#if $errors.name.length}
			{#each $errors.name as err}
				{err}
			{/each}
		{/if}
	</span>
	<label for="email">Email</label>
	<input
		id="email"
		name="email"
		type="email"
		aria-describedby={$errors.email ? "email-error email-desc" : "email-desc"}
		aria-invalid={$errors.email ? "true" : undefined}
		aria-required={$constraints.email?.required ? "true" : undefined}
		bind:value={$form.email}
	/>
	<span id="email-desc">It's preferred that you use your company email.</span>
	<span id="email-error" aria-live="assertive">
		{#if $errors.email.length}
			{#each $errors.email as err}
				{err}
			{/each}
		{/if}
	</span>
	<label for="password">Password</label>
	<input
		id="password"
		name="password"
		type="password"
		aria-describedby={$errors.password
			? "password-error password-desc"
			: "password-desc"}
		aria-invalid={$errors.password ? "true" : undefined}
		aria-required={$constraints.password?.required ? "true" : undefined}
		bind:value={$form.password}
	/>
	<span id="password-desc">Ensure the password is at least 10 characters.</span>
	<span id="password-error" aria-live="assertive">
		{#if $errors.password.length}
			{#each $errors.password as err}
				{err}
			{/each}
		{/if}
	</span>
	<button>Submit</button>
</form>
```

That's quite a bit of code required to get a simple, accessible form up and running. While clearly possible, we can't move as quickly as we'd like to, it's not very DRY, and is ripe for some copy-paste errors.

All is not lost though, as the whole idea behind Formsnap is to make this process simpler, without sacrificing the flexibility that Superforms provides.

## Using Superforms _and_ Formsnap

```svelte title="src/routes/sign-up/+page.svelte" showLineNumbers
<script lang="ts">
	import { Field, Control, Label, FieldErrors, Description } from "formsnap";
	import type { PageData } from "./$types";
	import { signupFormSchema } from "./schema.ts";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { superForm } from "sveltekit-superforms";
	export let data: PageData;

	const form = superForm(data.form, {
		validators: zodClient(signupFormSchema),
	});
	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
	<Field {form} name="name">
		<Control let:attrs>
			<Label>Name</Label>
			<input {...attrs} bind:value={$formData.name} />
		</Control>
		<Description>Be sure to use your real name.</Description>
		<FieldErrors />
	</Field>
	<Field {form} name="email">
		<Control let:attrs>
			<Label>Email</Label>
			<input {...attrs} type="email" bind:value={$formData.email} />
		</Control>
		<Description>It's preferred that you use your company email.</Description>
		<FieldErrors />
	</Field>
	<Field {form} name="password">
		<Control let:attrs>
			<Label>Password</Label>
			<input {...attrs} type="password" bind:value={$formData.password} />
		</Control>
		<Description>Ensure the password is at least 10 characters.</Description>
		<FieldErrors />
	</Field>
</form>
```

That's it! We just condensed a bunch of code, while retaining the same functionality.

## Next Steps

To get started using Formsnap, head over to the [Quick start](/docs/quick-start) section of the docs, where you'll learn how to install and use the library.
