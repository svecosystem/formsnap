---
title: Migration Guide
description: Learn how to migrate from Formsnap v1 to v2.
section: Anchors
---

Formsnap v2 has been rewritten to support Svelte 5 and with that, comes some breaking changes. This guide will help you migrate your codebase to the new version, one component at a time.

At the time of writing this guide, `sveltekit-superforms` still functions the same as it did for v1, so you won't need to make any changes to the Superforms-specific code.

## Universal Changes

The changes in this section apply to a number of components in Formsnap, and are not specific to any one component.

### asChild -> child Snippet

In v1, the `asChild` prop could be used on any component that rendered an HTML element under the hood to opt out of rendering the element to provide your own.

```svelte title="Formsnap v1 (old)"
<!-- This could apply to any component that rendered an HTML element -->
<Label asChild let:labelAttrs>
	<label {...labelAttrs}>Name</label>
</Label>
```

In v2, this prop has been removed completely in favor of the `child` snippet, which is available for all components that render an HTML element, and exposes a `props` snippet prop that you can spread onto your own element/component.

```svelte title="Formsnap v2 (new)"
<!-- This applies to any component that renders an HTML element -->
<Label>
	{#snippet child({ props })}
		<label {...props}>Name</label>
	{/snippet}
</Label>
```

You can learn more about the `child` snippet in the [child](/docs/composition/child) documentation.

### el -> ref

In v1, you could bind to the `el` prop of any component that rendered an element to receive a reference to that HTML element.

```svelte title="Formsnap v1 (old)"
<script lang="ts">
	import { Label } from "formsnap";
	let labelEl: HTMLLabelElement;
</script>

<Label bind:el={labelEl}>Name</Label>
```

In v2, this prop has been replaced by the `ref` prop, which is available for all components that render an HTML element, and exposes a `$bindable` reference to the underlying HTML element.

```svelte title="FOrmsnap v2 (new)"
<script lang="ts">
	import { Label } from "formsnap";
	let labelRef = $state<HTMLLabelElement | null>(null);
</script>

<Label bind:ref={labelRef}>Name</Label>
```

### Slot Props -> Snippet Props

In v1, the various `*Field` components provided a number of slot props for your convenience, such as `value`, `errors`, `tainted`, and `constraints`.

```svelte title="Formsnap v1 (old)"
<Field {form} name="name" let:value let:errors let:tainted let:constraints>
	<!-- ... you can access those slot props here -->
</Field>
```

In v2, the `*Field*` components now provide those values via snippets props to the `children` snippet that you can use when needing to access those values.

```svelte title="Formsnap v2 (new)"
<Field {form} name="name">
	{#snippet children({ value, errors, tainted, constraints })}
		<!-- ... you can access those snippet props here -->
	{/snippet}
</Field>

<!-- or if you don't need access to those values -->

<Field {form} name="name">
	<!-- ... your form components here -->
</Field>
```

## Control

The `Control` component in v1 simply expose an `attrs` slot prop that was spread onto the control element, like so:

```svelte title="Formsnap v1 (old)"
<Control let:attrs>
	<input type="text" {...attrs} bind:value={$formData.name} />
</Control>
```

In v2, the `Control` component now provides those attributes via a `children` snippet prop, like so:

```svelte title="Formsnap v2 (new)"
<Control>
	{#snippet children({ props })}
		<input type="text" {...props} bind:value={$formData.name} />
	{/snippet}
</Control>
```

This change comes with Svelte's deprecation of `<slot />` and slot props in favor of [Snippets](https://svelte.dev/docs/svelte/snippet).
