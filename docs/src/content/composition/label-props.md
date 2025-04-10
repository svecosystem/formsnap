---
title: labelProps
description: Retrieves the label props from the closest Control component's context.
section: Composition
---

Use the `labelProps` function to retrieve a reactive reference to the label props from the closest `Control` component's context. The label props are used to associate the control element with the label.

## Usage

```svelte
<script lang="ts">
	import { Control, controlProps, labelProps } from "formsnap";
</script>

<Control>
	<label {...labelProps()}>Hello</label>
	<input type="text" {...controlProps()} bind:value={$formData.name} />
</Control>
```
