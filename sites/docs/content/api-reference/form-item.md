---
title: <Form.Item />
description: The component responsible for associating a label with a control.
---

<script>
	import { Callout } from '$lib/components'
</script>

The `<Form.Item/>` component is used associate a label with a control, and provides the necessary attributes for the **_control_** via a slot prop.

In the context of a form, a **_control_** refers to any interactive element such as an input field, select dropdown, or button. This includes custom components like select dropdowns or checkboxes that function as buttons but still serve as form inputs, typically activated by clicking on a label or pressing a key.

Each control should be wrapped in its own `<Form.Item />` component. This is important for accessibility, as it ensures that the label is associated with the control, and that the control is announced to screen readers when the label is focused.

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
type SlotProps<T extends Record<string, unknown>, U extends FormPath<T>> = {
	/**
	 * The value of the value store of the field.
	 */
	value: T[U];

	/**
	 * The value of the errors store for the field.
	 */
	errors: string[] | undefined;

	/**
	 * The constraints for the field.
	 */
	constraints: Record<string, unknown>;

	/**
	 * Whether the field is tainted or not.
	 */
	tainted: boolean;
};
```

## Composition

Since the `<Form.Field />` component doesn't render anything itself, it's a common practice to create a wrapper component around it.

For example, you may always want to render the `<Form.Validation />` component for every field. Instead of manually including it every time, you can create a wrapper `<CustomField />` component that includes it automatically.

To maintain the type safety of the component, we'll need to use some generics, which eslint sometimes complains about, so if you see a yellow squiggly line, it's likely a false positive and you can ignore it.

```svelte title="CustomField.svelte"
<script lang="ts" context="module">
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import type { FormPath } from "sveltekit-superforms";

	// the form object
	type T = Record<string, unknown>;
	// the path/name of the field in the form object
	type U = unknown;
</script>

<script
	lang="ts"
	generics="T extends Record<string, unknown>, U extends FormPath<T>"
>
	import type { Form } from "formsnap";
	import type { SuperForm } from "sveltekit-superforms";

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = FieldProps<T, U>;

	export let form: SuperForm<T>;
	export let name: U;
</script>

<!-- passing the slot props down are optional -->
<Form.Field {form} {name} let:value let:errors let:tainted let:contraints>
	<slot {value} {errors} {tainted} {constraints} />
	<Form.Validation />
</Form.Field>
```
