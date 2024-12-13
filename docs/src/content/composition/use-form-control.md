---
title: useFormControl
description: Use the form control's state for more advanced composition.
section: Composition
---

<script>
	import { Callout, PropField } from '@svecodocs/kit'
</script>

You can use `useFormControl` within the context of a [Control](/docs/components/control) component to access the state of the control and use it as you see fit.

## Usage

Say we're building a custom component that contains both a custom input and label.

```svelte title="LabelInput.svelte"
<script lang="ts">
	import { useFormControl } from "formsnap";
	import CustomLabel from "$lib/components/CustomLabel.svelte";
	import CustomInput from "$lib/components/CustomInput.svelte";

	let { label }: { label: string } = $props();

	const control = useFormControl();
</script>

<CustomLabel {...control.labelProps}>
	{label}
</CustomLabel>
<CustomInput {...control.props} />
```

In this example, we're using `useFormControl` to get the spreadable for the label and control elements. We then pass those attributes to our custom components.

We'd then use this within the context of a `Control` component like so:

```svelte
<Field {form} name="email">
	<Control>
		<LabelInput label="Email address" />
	</Control>
</Field>
```

## API Reference

### Props

<PropField type="() => string | undefined | null" name="id">

Optionally provide a getter function that returns a custom ID to override the default control ID.

</PropField>

### Return Type

`useFormControl` returns the following types:

```ts
export type FormControlContext = {
	/** Reactive state containing the ID of the form control. */
	readonly id: string;

	/** Reactive state containing the attributes for the label element. */
	readonly labelProps: Record<string, unknown>;

	/** Reactive state containing the attributes for the control element. */
	readonly props: Record<string, unknown>;
};
```

<Callout type="warning">

The `useFormControl` function returns getters for the various reactive states. You should not destructure the object returned by `useFormControl` and instead use the getters directly.

</Callout>
