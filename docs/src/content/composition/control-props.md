---
title: controlProps
description: Retrieves the props from the closest Control component's context.
section: Composition
---

Use the `controlProps` function to retrieve a reactive reference to the props from the closest `Control` component's context.

## Usage

```svelte
<script lang="ts">
	import { Label, Control, controlProps } from "formsnap";
</script>

<Control>
	<Label>Hello</Label>
	<input type="text" {...controlProps()} bind:value={$formData.name} />
</Control>
```
