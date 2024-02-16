---
title: asChild
description: Use your own elements or components with Formsnap.
---

Although the provided components are the recommended and easiest way to use Formsnap, they aren't the only way. If you prefer to bring your own components or use native HTML elements, that's fine too.

The `asChild` prop is available on all components that render native HTML elements under the hood. When set to `true`, Formsnap won't render the default element and will expect you to spread the `*Attrs` slot prop into a custom element or component of your choosing.

For example, if you wanted to use your own custom `Label` component or use scoped styles with a `<label />` element, you can do so by passing the `asChild` prop to the `Form.Label` component.

```svelte showLineNumbers {5-6}
<script lang="ts">
	import { Form } from "formsnap";
</script>

<Form.Label asChild let:labelAttrs>
	<label {...labelAttrs} class="label">Name</label>
</Form.Label>

<style>
	label {
		color: green;
	}
</style>
```

We expose the attributes that need to be applied to the element as a slot prop, so you can apply them to your own elements or components. This same pattern is used for all Formsnap components that render native HTML elements under the hood.
