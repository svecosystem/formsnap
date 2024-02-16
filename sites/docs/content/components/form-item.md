---
title: <Form.Item />
description: Responsible for associating a label with a control and providing necessary attributes for the control.
---

<script>
	import { Callout } from '$lib/components'
</script>

The `<Form.Item/>` component is used associate a label with a control, and provides the necessary attributes for the **_control_** via a slot prop.

In the context of a form, a **_control_** refers to any interactive element such as an input field, select dropdown, or button. This includes custom components like select dropdowns or checkboxes that function as buttons but still serve as form inputs, typically activated by clicking on a label or pressing a key.

Each control should be wrapped in its own `<Form.Item />` component. This is important for accessibility, as it ensures that the label is associated with the control, and that the label is announced to screen readers when the control receives focus.

## Why a separate component?

A common question is _"why we can't just include this logic in the `<Form.Field />` component?"_.

While we could, doing so would limit the `<Form.Field />` component to a single control, which would limit the ability to use it for checkbox groups, radio groups, and other multi-control components.

## Props

The `<Form.Item/>` component doesn't render an element itself, it strictly provides context and attributes for the control via a slot prop.

```ts
export type ItemProps = {
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

The only slot prop provided by the `<Form.Item />` is the `attrs` prop which should be spread onto the control element/component.

<Callout type="warning" title="Hey!">

Don't forget to spread the `attrs` prop onto the control element/component. Forgetting to do so will result in the control not being associated with the label, which is a critical accessibility issue and will result in a poor user experience for everyone.

</Callout>

```ts
type SlotProps = {
	attrs: {
		name: string;
		id: string;
		"data-fs-error": string | undefined;
		"aria-describedBy": string | undefined;
		"aria-invalid": "true" | undefined;
		"aria-required": "true" | undefined;
	};
};
```

## Composition

Since the `<Form.Item />` component doesn't render any HTML elements, it's a common practice to create a wrapper component around it to have consistent styling and behavior across your forms.

For example, you may want to automatically include the `<Form.Label />` for each item, and you want the label and slot content to be wrapped in a `div`.

Here's how you might do just that:

```svelte showLineNumbers title="CustomItem.svelte"
<script lang="ts">
	import type { Form } from "formsnap";

	type $$Props = Form.ItemProps & {
		label: string;
	};

	export let label: string;
</script>

<Form.Item let:attrs {...$$restProps}>
	<div class="flex flex-col gap-2">
		<Form.Label>{label}</Form.Label>
		<slot {attrs} />
	</div>
</Form.Item>
```
