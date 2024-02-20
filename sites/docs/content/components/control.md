---
title: Control
description: Associates a label with and provides necessary attributes for a form control.
tagline: Components
---

<script>
	import { Callout } from '$lib/components'
</script>

In the context of a form, a **_control_** refers to any interactive element such as an input field, a select dropdown, or a button. This includes custom components like select dropdowns or checkboxes that function as buttons but still serve as form inputs, typically activated by clicking on a label or pressing a key.

Each control and its label should be wrapped in its own `Control` component. This is important for accessibility, as it ensures that the label is associated with the control, and that the label is announced to screen readers when the control receives focus.

<Callout title="Why a separate component?">

A common question is _"why we can't just include this logic in the various `Field` components?"_.

Doing so would limit the `Field` component to a single control, which would prevent them from being used for checkbox groups, radio groups, and other multi-control components. The APIs are flexible enough that you could create your own custom wrapper components to make them more convenient to use for your specific use case.

</Callout>

## Why a separate component?

## Props

The `Control` component doesn't render an element itself, it strictly provides context and attributes for the control via a slot prop and state for the [Label](/docs/components/label).

```ts
export type ControlProps = {
	/**
	 * Optionally provide a unique id for the form item/control.
	 * If not provided, a unique ID will be generated for you.
	 *
	 * This is useful when another library automatically generates
	 * IDs for form items. You can pass that ID to the `id` prop and
	 * the label will be associated with that control.
	 */
	id?: string;
};
```

## Slot Props

The only slot prop provided by the `Control` is the `attrs` prop which should be spread onto the control element/component.

<Callout type="warning" title="Hey!">

Don't forget to spread the `attrs` prop onto the control element/component. Forgetting to do so will result in the control not being associated with the label, which is a critical accessibility issue and will result in a poor user experience for everyone. Additionally, the control won't have the correct `name` attribute, which is necessary for form submission!

</Callout>

```ts
type SlotProps = {
	attrs: ControlAttrs;
};
```

## Attributes

```ts
export type ControlAttrs = {
	/** The name of the control used for form submission. */
	name: string;

	/** The ID of the control, used for label association. */
	id: string;

	/** Present when a validation error exists on the field. */
	"data-fs-error": string | undefined;

	/** Present when description or validation exists. */
	"aria-describedby": string | undefined;

	/** Present when a validation error exists on the field. */
	"aria-invalid": "true" | undefined;

	/** Present when the field is required. */
	"aria-required": "true" | undefined;

	/** Used for selection during styling or otherwise */
	"data-fs-control": string;
};
```

## Composition

Since the `Control` component doesn't render any HTML elements, it's a common practice to create a wrapper component around it to have consistent styling and behavior across your forms.

For example, you may want to automatically include the [Label](/docs/components/label) for each item, and you want the label and slot content to be wrapped in a `<div>`.

Here's how you might do just that:

```svelte title="CustomControl.svelte"
<script lang="ts">
	import { Control, Label, type ControlProps } from "formsnap";

	type $$Props = ControlProps & {
		label: string;
	};

	export let label: string;
</script>

<Control let:attrs {...$$restProps}>
	<div class="flex flex-col gap-2">
		<Label>{label}</Label>
		<slot {attrs} />
	</div>
</Control>
```
