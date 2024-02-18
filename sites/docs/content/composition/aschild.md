---
title: asChild Prop
description: Use your own elements or components with Formsnap.
tagline: Composition
---

<script>
	import { Callout } from '$lib/components'
</script>

Although the provided components are the recommended and easiest way to use Formsnap, they aren't the only way. If you prefer to bring your own components or use native HTML elements, that's fine too.

The `asChild` prop is available on all components that render native HTML elements under the hood. When set to `true`, Formsnap won't render the default element and will expect you to spread the `*Attrs` slot prop into a custom element or component of your choosing.

## Usage Example

If you wanted to use your own custom `Label` component or use scoped styles with a `<label />` element, you can do so by passing the `asChild` prop to the [Label](/docs/components/label) component.

```svelte {5-6}
<script lang="ts">
	import { Label } from "formsnap";
</script>

<Label asChild let:labelAttrs>
	<label {...labelAttrs} class="label">Name</label>
</Label>

<style>
	label {
		color: green;
	}
</style>
```

We expose the attributes that need to be applied to the element as a slot prop, so you can apply them to your own elements or components. This same pattern is used for all Formsnap components that render native HTML elements under the hood.

<Callout type="tip">

The documentation for each component will tell you which slot props are available and what attributes they contain.

</Callout>
