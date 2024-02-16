---
title: getFormItem
description: Use the form item's state for more advanced composition.
---

You can use `getFormItem` within the context of a `<Form.Item>` component to access the state of the item and use it as you see fit.

## Usage

```svelte showLineNumbers
<script lang="ts">
	import { getFormItem } from "formsnap";

	const item = getFormItem();
</script>
```

## API

The `getFormItem` function returns an object with the following types:

```ts
export type FormItemContext = {
	/** A store containing the ID of the form control. */
	id: Writable<string>;

	/** A store containing the attributes for the label element. */
	labelAttrs: Writable<LabelAttrs>;

	/** A store containing the attributes for the control element. */
	attrs: Writable<ControlAttrs>;
};
```
