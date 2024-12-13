---
title: child
description: Use your own elements or components with Formsnap.
section: Composition
---

<script>
	import { Callout } from '@svecodocs/kit'
</script>

Although the provided components are the recommended and easiest way to use Formsnap, they aren't the only way. If you prefer to bring your own components or use native HTML elements, that's fine too.

The `child` snippet is available on all components that render native HTML elements under the hood. When used, Formsnap won't render the default element and will expect you to spread the `props` snippet onto a custom element or component of your choosing.

## Usage Example

If you wanted to use your own custom `Label` component or use scoped styles with a `<label>` element, you can do so by using the `child` snippet within the [Label](/docs/components/label) component.

```svelte {6-8}
<script lang="ts">
	import { Label } from "formsnap";
</script>

<Label>
	{#snippet child({ props })}
		<label {...props} class="label">Name</label>
	{/snippet}
</Label>

<style>
	label {
		color: green;
	}
</style>
```

<Callout type="note">

If you plan to pass a custom ID to your custom element, you should first pass it to the component, which will then forward it down to the `props` snippet prop.

</Callout>
