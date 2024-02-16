---
title: getFormField
description: Use the form field's state for advanced composition with custom form components.
---

You can use `getFormField` within the context of a `<Form.Field>` component to access the state of the field and use it to build custom form components.

For example, let's say we have the following form component with a custom input:

```svelte
<Form.Field>
	<CustomInput />
</Form.Field>
```

Since the `<CustomInput />` is within the context scope of a `<Form.Field />`, we can use `getFormField` inside of it to access to the form field's state.

```svelte title="CustomInput.svelte"
<script lang="ts">
	import { getFormField } from "formsnap";
	const { errors } = getFormField();
</script>

{#if $errors.length}
	<p>{$errors[0]}</p>
{/if}
<input />

<style>
	input {
		/* ... */
	}
</style>
```

The `getFormField` function returns an object with the following types:
