---
title: Options
description: Configure the behavior of your forms.
---

The `<Form.Root/>` component accepts the same options that can be passed to the `superForm` function when using Superforms, and a list of these options can be found in the [Superforms documentation](https://superforms.rocks/api#superform-options).

So when using Superforms by itself, you would pass the options to the `superForm` function, like so:

```svelte title="+page.svelte"
<script lang="ts">
	import { superForm } from "sveltekit-superforms/client";
	import { schema } from "./schema.ts";
	const { form } = superForm(data.form, {
		validators: schema,
		onSubmit: () => {
			// do something
		},
		onError: () => {
			// do something else
		},
		// ...
	});
</script>
```

But when using Formsnap, you can pass those same options to the `<Form.Root/>` component. We export a type for these options, so you can define it in your `<script>` tag or in a separate file, and then pass it to the component like so:

```svelte title="+page.svelte"
<script lang="ts">
	import { Form, type FormOptions } from "formsnap";
	import { schema } from "./schema.ts";

	export let data: PageData;

	const options: FormOptions<typeof schema> = {
		validators: schema,
		onSubmit: () => {
			// do something
		},
		onError: () => {
			// do something else
		},
		// ...
	};
</script>

<Form.Root {options} form={data.form} {schema}>
	<!-- ... -->
</Form.Root>
```

Alternatively, you can also just pass the options directly to the `<Form.Root />` component, however, your code may become less readable the more options you pass:

```svelte title="+page.svelte.svelte"
<script lang="ts">
	import { Form } from "formsnap";
	import { schema } from "./schema.ts";

	export let data: PageData;
</script>

<Form.Root
	options={{
		validators: schema,
		onSubmit: () => {
			// do something
		},
		onError: () => {
			// do something else
		},
		// ...
	}}
	form={data.form}
	{schema}
>
	<!-- ... -->
</Form.Root>
```

## Default options

We do apply a couple options by default, here's what they are:

```ts title="Form.Root"
const defaultOptions = {
	/**
	 * The schema you pass to the <Form.Root/> component will be
	 * used for client-side validation.
	 */
	validators: schema,

	/**
	 * We disabled the `taintedMessage` option by default, as we
	 * found it to not be desirable in specific situations,
	 * considering you don't always have control over the message
	 * that is displayed, and can potentially be confusing to the user.
	 */
	taintedMessage: null,
};
```

Of course, you can override these options by explicitly passing different values via the `options` prop to the `<Form.Root/>` component. If you don't explicitly pass those options, the default values will be merged with the options you pass, so you can still use the defaults while passing other options.
