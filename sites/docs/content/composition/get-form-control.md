---
title: getFormControl
description: Use the form control's state for more advanced composition.
tagline: Composition
---

You can use `getFormControl` within the context of a [Control](/docs/components/control) component to access the state of the control and use it as you see fit.

## Usage

Say we're building a custom component that contains both a custom input and label.

```svelte title="LabelInput.svelte"
<script lang="ts">
	import { getFormControl } from "formsnap";
	import CustomLabel from "$lib/components/CustomLabel.svelte";
	import CustomInput from "$lib/components/CustomInput.svelte";

	export let label: string;

	const { labelAttrs, attrs } = getFormControl();
</script>

<CustomLabel {...$labelAttrs}>
	{label}
</CustomLabel>
<CustomInput {...$attrs} />
```

In this example, we're using `getFormControl` to get the attributes for the label and control elements. We then pass those attributes to our custom components.

We'd then use this within the context of a `Control` component like so:

```svelte
<Field {form} name="email">
	<Control>
		<LabelInput label="Email address" />
	</Control>
</Field>
```

## API

The `getFormControl` function returns an object with the following types:

```ts
export type FormControlContext = {
	/** A store containing the ID of the form control. */
	id: Writable<string>;

	/** A store containing the attributes for the label element. */
	labelAttrs: Writable<LabelAttrs>;

	/** A store containing the attributes for the control element. */
	attrs: Writable<ControlAttrs>;
};
```
