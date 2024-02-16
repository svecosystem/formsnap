---
title: <Form.Label />
description: A label for a form control.
---

The `<Form.Label />` component must be used as a child of a `<Form.Item />` component. It renders a `<label />` element and is automatically linked to the control of the item using the `for` attribute.

## Usage

The `<Form.Label />` component will handle the `for` attribute for you, so you don't need to worry about it. Just make sure to use it within the context of a `<Form.Item />` component.

```svelte {3}
<Form.Field name="name">
	<Form.Item let:attrs>
		<Form.Label>Name</Form.Label>
		<input type="text" {...attrs} />
	</Form.Item>
</Form.Field>
```

## Props

The `<Form.Label />` accepts all props that a standard HTML `<div />` element would accept along with a few additional props.

```ts
export type LabelProps = {
	/**
	 * If `true`, Formsnap won't render the default `label` element
	 * and will expect you to spread the `labelAttrs` slot prop into
	 * a custom label element/component of your choosing.
	 *
	 * @see https://formsnap.dev/docs/asChild
	 * @defaultValue `false`
	 */
	asChild?: boolean;

	/**
	 * You can bind to this prop to receive a reference to the
	 * underling HTML element rendered for the label.
	 */
	el?: HTMLLabelElement;
} & HTMLLabelAttributes;
```

## Slot Props

The `<Form.Label />` component provides a single slot prop, `labelAttrs`, which is only necessary when using the [asChild](/docs/aschild) prop.

```ts
type SlotProps = {
	labelAttrs: {
		for: string;
		"data-fs-error": string | undefined;
		"data-fs-label": string;
		// any other props you pass to `<Form.Label />`
		[key: string]: any;
	};
};
```

## Attributes

The following attributes are automatically applied to the element rendered by the `<Form.Label />` component. This is also the shape of the `labelAttrs` slot prop when using the [asChild](/docs/aschild) prop.

```ts
export type LabelAttrs = {
	/** The ID of the control, used for label association. */
	for: string;

	/** Present when a validation error exists on the field. */
	"data-fs-error": string | undefined;

	/** Used for selection during styling or otherwise */
	"data-fs-label": string;

	/** Any additional props provided to the `<Form.Label />` component */
	[key: string]: any;
};
```
