---
title: Migration Guide
description: Learn how to migrate from Formsnap v1 to v2.
section: Anchors
---

<script>
	import { Callout } from '@svecodocs/kit'
</script>

Formsnap v2 introduces significant changes to support Svelte 5, requiring updates to your existing codebase. This guide covers all breaking changes and provides clear migration paths for each component.

<Callout>

`sveltekit-superforms` integration remains unchanged from v1, requiring no modifications to Superforms-specific code.

</Callout>

## Core Changes

Formsnap v2 adopts Svelte 5's new snippet pattern, replacing slots, slot props and other traditional patterns. This change affects multiple components throughout the library.

### asChild -> child Snippet

The `asChild` prop has been replaced with the more flexible `child` snippet pattern.

#### Before (v1)

In v1, the `asChild` prop could be used on any component that rendered an HTML element under the hood to opt out of rendering the element to provide your own.

```svelte title="Formsnap v1 (old)"
<!-- This could apply to any component that rendered an HTML element -->
<Label asChild let:labelAttrs>
	<label {...labelAttrs}>Name</label>
</Label>
```

#### After (v2)

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

### Element References: `el` -> `ref`

Element references now use the `$bindable` `ref` prop.

#### Before (v1)

In v1, you could bind to the `el` prop of any component that rendered an element to receive a reference to that HTML element.

```svelte title="Formsnap v1 (old)"
<script lang="ts">
	import { Label } from "formsnap";
	let labelEl: HTMLLabelElement;
</script>

<Label bind:el={labelEl}>Name</Label>
```

#### After (v2)

In v2, this prop has been replaced by the `ref` prop, which is available for all components that render an HTML element, and exposes a `$bindable` reference to the underlying HTML element.

```svelte title="FOrmsnap v2 (new)"
<script lang="ts">
	import { Label } from "formsnap";
	let labelRef = $state<HTMLLabelElement | null>(null);
</script>

<Label bind:ref={labelRef}>Name</Label>
```

### Slot Props -> Snippet Props

The various `*Field*` components now use snippet props instead of slot props to provide access to their inner state.

#### Before (v1)

In v1, the various `*Field` components provided a number of slot props for your convenience, such as `value`, `errors`, `tainted`, and `constraints`.

```svelte title="Formsnap v1 (old)"
<Field {form} name="name" let:value let:errors let:tainted let:constraints>
	<!-- ... you can access those slot props here -->
</Field>
```

#### After (v2)

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

## Component Changes

### Control

The `Control` component now uses snippet props for attribute passing.

#### Before (v1)

The `Control` component in v1 simply expose an `attrs` slot prop that was spread onto the control element, like so:

```svelte title="Formsnap v1 (old)"
<script lang="ts">
	import { Control } from "formsnap";
</script>

<Control let:attrs>
	<input type="text" {...attrs} bind:value={$formData.name} />
</Control>
```

#### After (v2)

In v2, the `Control` component now provides those attributes via the `controlProps` function which retrieves the props from the closest `Control` component's context.

```svelte title="Formsnap v2 (new)"
<script lang="ts">
	import { Control, controlProps } from "formsnap";
</script>

<Control>
	<input type="text" {...controlProps()} bind:value={$formData.name} />
</Control>
```

Alternatively, you can access the props via the `Control` component's `children` snippet props.

```svelte title="Formsnap v2 (new - alt)"
<Control>
	{#snippet children({ props })}
		<input type="text" {...props} bind:value={$formData.name} />
	{/snippet}
</Control>
```

This change comes with Svelte's deprecation of `<slot />` and slot props in favor of [Snippets](https://svelte.dev/docs/svelte/snippet).

## Composition API Changes

### Form Field Access

`getFormField` is now deprecated in favor of `useFormField` with a new reactive getter pattern.

#### Before (v1)

In v1, the `getFormField` function was used to get a reference to a form field's state for more advance composition patterns.

```svelte title="Formsnap v1 (old)"
<script lang="ts">
	import { getFormField } from "formsnap";

	const { form, errors, tainted, constraints } = getFormField();
</script>

Errors for this field: {$errors}
Constraints for this field: {$constraints}
Is this field tainted? {$tainted}
```

#### After (v2)

In v2, the `getFormField` function is marked as deprecated and is aliased to the new `useFormField`.

`useFormField` returns getters for the various reactive states, rather than an object of stores. This means you should not destructure the object returned by `useFormField` and instead use the getters directly.

```svelte title="Formsnap v2 (new)"
<script lang="ts">
	import { useFormField } from "formsnap";

	const field = useFormField();
</script>

Errors for this field: {field.errors}
Constraints for this field: {field.constraints}
Is this field tainted? {field.tainted}
```

See the [useFormField](/docs/composition/use-form-field) documentation for more information.

### Form Control Access

`getFormControl` is deprecated in favor of `useFormControl` with the new reactive getter pattern.

#### Before (v1)

In v1, the `getFormControl` function was used to hook into the state of the closest parent `Control` component. This function is useful for building custom components that may encompass both the control and the label.

```svelte title="Formsnap v1 (old)"
<script lang="ts">
	import { getFormControl } from "formsnap";
	import { MyLabel, MyInput } from "$lib/components";

	export let label: string;

	const { labelAttrs, attrs } = getFormControl();
</script>

<MyLabel {...$labelAttrs}>
	{label}
</MyLabel>

<MyInput {...$attrs} />
```

#### After (v2)

In v2, the `getFormControl` function is marked as deprecated and is aliased to the new `useFormControl`.

`useFormControl` returns getters for the various reactive states, rather than an object of stores. This means you should not destructure the object returned by `useFormControl` and instead use the getters directly.

```svelte title="Formsnap v2 (new)"
<script lang="ts">
	import { useFormControl } from "formsnap";
	import { MyLabel, MyInput } from "$lib/components";

	let { label }: { label: string } = $props();

	const control = useFormControl();
</script>

<MyLabel {...control.labelProps}>
	{label}
</MyLabel>

<MyInput {...control.props} />
```

## Migration Checklist

- Update all `asChild` instances to use the `child` snippet
- Replace `el` bindings with `ref`
- Update Field components to use `children` snippet props instead of slot props
- Replace `getFormField` with `useFormField`
- Replace `getFormControl` with `useFormControl`
