---
title: getFormControl
description: Use the form control's state for more advanced composition.
---

You can use `getFormControl` within the context of a [Control](/docs/components/control) component to access the state of the control and use it as you see fit.

## Usage

```svelte showLineNumbers
<script lang="ts">
	import { getFormControl } from "formsnap";

	const control = getFormControl();
</script>
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
