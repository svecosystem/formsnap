---
title: getForm
description: A helper function to access the original superform stores
---

Although you can prop drill the values of the various stores Superforms provides to your custom components, that could get tedious and quite annoying. Instead, you can use the `getForm` function within the context of a `<Form.Root>` component and access the original stores directly.

For example, let's say we want to show an alert when a `message` is returned from the server. We can use the `getForm` function to access the `message` store, and setup a subscription to it to conditionally display the message.

The important thing is that the `<MessageAlert />` component is within the context scope of a `<Form.Root />` component, otherwise the `getForm` function will return `undefined`:

```svelte title="MyCustomForm.svelte"
<Form.Root>
	<MessageAlert />
</Form.Root>
```

```svelte title="MessageAlert.svelte"
<script lang="ts">
	import { getForm } from "formsnap";
	const { message } = getForm();
</script>

{#if $message}
	<div>
		<h3>Alert!</h3>
		<p>{$message}</p>
	</div>
{/if}
```

This works fine for generic components where you don't care about the type of the form schema. However, if you want to create a custom component that is specific to a form schema, you can pass the type of the form schema to the `getForm` function:

```svelte title="AccountMessage.svelte"
<script lang="ts">
	import { getForm } from "formsnap";
	import { accountFormSchema } from "./schemas";
	const { message } = getForm<typeof accountFormSchema>();
</script>
```

This will ensure the `form`, `fields`, `errors`, etc. are typed correctly.

The `getForm` function returns an object with the following type, this is the same type the `superForm` function returns. See the [superForm return type](https://superforms.rocks/api#superform-return-type) for reference.

```ts
type SuperForm<T extends AnyZodObject, M = any> = {
	form: {
		subscribe: (data: S) => void
		set: (value: S, options?: { taint?: boolean | 'untaint' | 'untaint-all' }) => void
		update: (updater: (S) => S, options?: { taint?: boolean | 'untaint' | 'untaint-all' }) => void
	};
	errors: Writable<Nested<S, string[] | undefined>>;
	constraints: Writable<Nested<S, InputConstraints | undefined>>;
	message: Writable<M | undefined>;
	tainted: Writable<Nested<S, boolean | undefined> | undefined>;

	submitting: Readable<boolean>;
	delayed: Readable<boolean>;
	timeout: Readable<boolean>;
	posted: Readable<boolean>;

	formId: Writable<string | undefined>;
	fields: Record<keyof S, FormField<T>>;
	allErrors: Readable<{ path: string; messages: string[] }[]>;

	options: FormOptions<T, M>;

	enhance: (el: HTMLFormElement, events?: {
		onSubmit, onResult, onError, onUpdate, onUpdated
	}) => ReturnType<typeof $app/forms/enhance>;

	reset: (options?: {
		keepMessage?: boolean;
		id?: string;
		data?: Partial<S>;
	}) => void;

	capture: () => SuperFormSnapshot<T, M>;
	restore: (snapshot: SuperFormSnapshot<T, M>) => void;

	validate: (path?: FormPathLeaves<S>, opts?: {
		value: FormPathType<FormPathLeaves<S>>;
		update: boolean | 'errors' | 'value';
		taint: boolean | 'untaint' | 'untaint-all';
		errors: string | string[];
	}) => Promise<(string[] | undefined) | SuperValidated<T, M>>;
};

FormField<S, Prop extends keyof S> = {
  readonly name: Prop;
  value: Writable<S[Prop]>;
  errors?: Writable<ValidationErrors<S[Prop]>>;
  constraints?: Writable<InputConstraints<S[Prop]>>;
};
```

This is useful for creating custom form components that need access to the original stores, and you don't want to prop drill the stores down to the component.
