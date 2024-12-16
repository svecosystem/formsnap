---
title: Control
description: Associates a label with and provides necessary attributes for a form control.
section: Components
---

<script>
	import { Callout, PropField } from '@svecodocs/kit'
</script>

In the context of a form, a **_control_** refers to any interactive element such as an input field, a select dropdown, or a button. This includes custom components like select dropdowns or checkboxes that function as buttons but still serve as form inputs, typically activated by clicking on a label or pressing a key.

Each control and its label should be wrapped in its own `Control` component. This is important for accessibility, as it ensures that the label is associated with the control, and that the label is announced to screen readers when the control receives focus.

<Callout title="Why a separate component?">

A common question is _"why we can't just include this logic in the various `Field` components?"_.

Doing so would limit the `Field` component to a single control, which would prevent them from being used for checkbox groups, radio groups, and other multi-control components. The APIs are flexible enough that you could create your own custom wrapper components to make them more convenient to use for your specific use case.

</Callout>

The `Control` component doesn't render an element itself, it strictly provides context and attributes for the control via a snippet prop and state for the [Label](/docs/components/label).

## Usage

```svelte title="+page.svelte"
<script lang="ts">
	import { Control, controlProps } from "formsnap";
</script>

<Control>
	<input type="text" {...controlProps()} bind:value={$formData.name} />
</Control>
```

## controlProps

The `controlProps` function returns the props for the closest ancestor `Control` component. Use this function to spread the props onto the control element/component.

```svelte
<script lang="ts">
	import { Control, controlProps } from "formsnap";
</script>

<Control>
	<!-- controlProps() gets the props from the closest <Control> -->
	<input type="text" {...controlProps()} bind:value={$formData.name} />
</Control>
```

## API Reference

### Props

<PropField type="string" name="id">

Optionally provide a unique id for the form item/control. If not provided, a unique ID will be generated for you.

This is useful when another library automatically generates IDs for form items. You can pass that ID to the `id` prop and the label will be associated with that control.

</PropField>

<PropField type="Snippet" name="children" required>

The children snippet is used to provide attributes for the control element/component.

</PropField>

## Composition

Since the `Control` component doesn't render an HTML element, it's a common practice to create a wrapper component around it to have consistent styling and behavior across your forms.

For example, you may want to automatically include the [Label](/docs/components/label) for each item, and you want the label and children content to be wrapped in a `<div>`.

Here's how you might do just that:

```svelte title="CustomControl.svelte"
<script lang="ts">
	import { Control, Label, controlProps } from "formsnap";
	import type { ComponentProps } from "svelte";

	let {
		label,
		// Rename the children prop to childrenProp to avoid
		// conflicts with the Control component
		children: childrenProp,
		...restProps
	}: ComponentProps<typeof Control> & {
		label: string;
	} = $props();
</script>

<Control {...restProps}>
	<div class="flex flex-col gap-2">
		<Label>{label}</Label>
		<!-- Forward the props to the children snippet -->
		{@render childrenProp({ props: controlProps() })}
	</div>
</Control>
```
