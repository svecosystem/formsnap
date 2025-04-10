---
title: Introduction
description: What is this?
section: Anchors
---

Formsnap takes the already incredible [sveltekit-superforms](https://github.com/ciscoheat/sveltekit-superforms) (winner of [Svelte Hack 2023](https://hack.sveltesociety.dev/winners) for best library), made by the brilliant [Andreas Söderlund](https://github.com/ciscoheat) and wraps it with components that make it simpler to use while making your forms accessible by default.

## The Same Form, Two Ways

To showcase the value provided by Formsnap, let's take a look at a simple sign up form using only Superforms, and then using Superforms with Formsnap.

### Superforms Only

```svelte title="+page.svelte"
<script lang="ts">
	import type { PageData } from "./$types";
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { signupFormSchema } from "./schema";
	let { data } = $props();

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
		aria-describedby={$errors.password ? "password-error password-desc" : "password-desc"}
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

That's quite a bit of code required to get a simple, accessible form up and running. We can't move as quickly as we'd like to, it's not very DRY, and is ripe for copy-paste errors.

All is not lost though, as the whole idea behind Formsnap is to make this process simpler, without sacrificing the flexibility that Superforms provides.

### Superforms + Formsnap

```svelte title="+page.svelte"
<script lang="ts">
	import { Field, Control, Label, FieldErrors, Description, controlProps } from "formsnap";
	import { signupFormSchema } from "./schema.ts";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { superForm } from "sveltekit-superforms";
	let { data } = $props();

	const form = superForm(data.form, {
		validators: zodClient(signupFormSchema),
	});
	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
	<Field {form} name="name">
		<Control>
			<Label>Name</Label>
			<input {...controlProps()} bind:value={$formData.name} />
		</Control>
		<Description>Be sure to use your real name.</Description>
		<FieldErrors />
	</Field>
	<Field {form} name="email">
		<Control>
			<Label>Email</Label>
			<input {...controlProps()} type="email" bind:value={$formData.email} />
		</Control>
		<Description>It's preferred that you use your company email.</Description>
		<FieldErrors />
	</Field>
	<Field {form} name="password">
		<Control>
			<Label>Password</Label>
			<input {...controlProps()} type="password" bind:value={$formData.password} />
		</Control>
		<Description>Ensure the password is at least 10 characters.</Description>
		<FieldErrors />
	</Field>
</form>
```

That's it! We just condensed a bunch of code, while retaining the same functionality.

## Next Steps

To get started using Formsnap, head over to the [Quick start](/docs/quick-start) section of the docs, where you'll learn how to install and use the library.
