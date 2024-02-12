---
title: <Form.Control />
description: Use components that aren't traditional form elements to control the form.
---

The `<Form.Control />` component is designed for use cases where you may have a component that isn't a traditional form element, but you still want to have all the accessibility and state management that comes with formsnap.

For example, let's say we're using a component which has a button that opens a popover with a combobox inside of it. If there is a validation issue with that field, we want to be able to provide that feedback to the user by potentially autofocusing the button, as well as ensuring the correct `aria-` attributes are applied to that button.

```svelte
<Form.Control id="buttonId" let:attrs>
	<button {...attrs} role="combobox" id="buttonId">
		{value}
	</button>
</Form.Control>
```

To see a full example of the `<Form.Control />` component in action, checkout the [Combobox form example](https://www.shadcn-svelte.com/docs/components/combobox#form) for shadcn-svelte.
