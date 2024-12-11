---
title: Label
description: Renders a label element for a control.
section: Components
---

The `Label` component must be used as a child of a [Control](/docs/components/control) component. It renders a `<label>` element and includes the necessary attributes to associate it with the control.

## Usage

When using a `Label` inside a [Control](/docs/components/control), you don't need to worry about the `for` attribute. Formsnap handles that for you.

```svelte {3}
<Field {form} name="name">
	<Control let:attrs>
		<Label>Name</Label>
		<input type="text" {...attrs} />
	</Control>
</Field>
```

## Props

A `Label` accepts all props that a standard HTML `<label>` element would accept along with a few additional props:

```ts
export type LabelProps = {
	/**
	 * If `true`, Formsnap won't render the default `label` element
	 * and will expect you to spread the `labelAttrs` slot prop into
	 * a custom label element/component of your choosing.
	 *
	 * @see https://formsnap.dev/docs/composition/aschild
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

`Label` provides a single slot prop, `labelAttrs`, which is only necessary when using the [asChild](/docs/composition/aschild) prop.

```ts
type SlotProps = {
	labelAttrs: LabelAttrs;
};
```

## Attributes

The following attributes are automatically applied to the element rendered by the `Label` component. This is also the shape of the `labelAttrs` slot prop when using the [asChild](/docs/composition/aschild) prop.

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
