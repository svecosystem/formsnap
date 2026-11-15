---
title: Remote Functions
description: Submit a Formsnap form through a SvelteKit remote command.
section: Recipes
---

Formsnap gets its field values, constraints, and validation errors from Superforms. You can keep that integration and use a SvelteKit remote `command()` to submit the enhanced form. A regular SvelteKit form action handles submissions when JavaScript is unavailable.

Use Formsnap 2.1, Svelte 5, and Zod 4. The same form code works with SvelteKit 2.70 and Superforms 2.31, or SvelteKit 3 and Superforms 3.1.

Enable remote functions by passing `experimental: { remoteFunctions: true }` to the `sveltekit()` plugin in `vite.config.js`. If your SvelteKit 2 app uses `svelte.config.js`, set `kit.experimental.remoteFunctions` there instead. See the [SvelteKit remote functions guide](https://svelte.dev/docs/kit/remote-functions) for setup.

## Share validation between the action and command

Use the same server-side validation for both submission paths. This example checks an email address and returns a message on success.

```ts title="schema.ts"
import { z } from "zod";

export const emailInput = z.object({ email: z.string() });
export const schema = emailInput.extend({
	email: z.email("Enter a valid email address."),
});
```

```ts title="email.server.ts"
import { superValidate } from "sveltekit-superforms";
import { zod4 } from "sveltekit-superforms/adapters";
import { schema } from "./schema.js";

export async function validateEmail(input: FormData | { email: string }) {
	const form = await superValidate(input, zod4(schema));

	if (form.valid) {
		form.message = "Email address accepted.";
	}

	return form;
}
```

```ts title="+page.server.ts"
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { zod4 } from "sveltekit-superforms/adapters";
import type { Actions, PageServerLoad } from "./$types";
import { validateEmail } from "./email.server.js";
import { schema } from "./schema.js";

export const load: PageServerLoad = async () => ({
	form: await superValidate(zod4(schema)),
});

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await validateEmail(await request.formData());

		return form.valid ? { form } : fail(400, { form });
	},
};
```

```ts title="email.remote.ts"
import { command } from "$app/server";
import { validateEmail } from "./email.server.js";
import { emailInput } from "./schema.js";

export const submitEmail = command(emailInput, validateEmail);
```

The command schema checks the payload shape. Superforms validates the email in the shared server function so an invalid address comes back as a field error.

## Submit through the remote command

Use Superforms' `onSubmit` hook to register a `customRequest`. Return a SvelteKit action result containing the validated form so Superforms can update its stores and Formsnap can render the errors. Include the page action’s location in both results for SvelteKit 3.

```svelte title="+page.svelte"
<script lang="ts">
	import { Control, Description, Field, FieldErrors, Label } from "formsnap";
	import { untrack } from "svelte";
	import { superForm } from "sveltekit-superforms";
	import type { PageProps } from "./$types";
	import { submitEmail } from "./email.remote.js";

	let { data, form: actionData }: PageProps = $props();

	let submissionError = $state("");

	const form = superForm(untrack(() => actionData?.form ?? data.form), {
		onSubmit({ customRequest }) {
			submissionError = "";
			customRequest(async ({ action, formData }) => {
				const location = action.pathname + action.search;
				const email = formData.get("email");

				try {
					const submitted = await submitEmail({
						email: typeof email === "string" ? email : "",
					});

					return submitted.valid
						? { type: "success", status: 200, location, data: { form: submitted } }
						: { type: "failure", status: 400, location, data: { form: submitted } };
				} catch {
					return {
						type: "error",
						status: 500,
						error: { status: 500, message: "Could not submit the form. Try again." },
					};
				}
			});
		},
		onError({ result }) {
			submissionError = result.error.message;
		},
	});

	const { form: values, enhance, message, submitting } = form;
</script>

<form method="POST" use:enhance novalidate>
	<Field {form} name="email">
		<Control>
			{#snippet children({ props })}
				<Label>Email address</Label>
				<input {...props} type="email" autocomplete="email" bind:value={$values.email} />
			{/snippet}
		</Control>
		<Description>Enter the email address you want to validate.</Description>
		<FieldErrors />
	</Field>
	<button type="submit" disabled={$submitting}>Submit</button>
	<p role="status">{submissionError || $message || ""}</p>
</form>
```

The example uses `novalidate` so you can see the server-side error by submitting an invalid email address. Remove it to also let the browser validate the email before submission.

See the [Superforms remote functions discussion](https://github.com/ciscoheat/sveltekit-superforms/issues/616) for the origins of the `command()` approach and the [Formsnap discussion](https://github.com/svecosystem/formsnap/discussions/226) for the proposed native `form()` integration.
