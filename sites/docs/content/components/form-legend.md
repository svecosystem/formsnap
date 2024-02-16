---
title: <Form.Legend />
description: A component used to provide a title for a fieldset.
---

You should always use the `<Form.Legend />` component in conjunction with the `<Form.Fieldset />` component to provide a title for a group of related form controls.

## When to use a legend

See the the [Fieldset](/docs/api-reference/) component's documentation for more information on when to use a fieldset.

## Props

The `<Form.Legend />` component renders a `<legend />` element and accepts all props that a standard HTML `<legend />` element would accept along with a few additional props.

```ts
export type LegendProps = {
	/**
	 * If `true`, Formsnap won't render the default `div` element
	 * and will expect you to spread the `groupTitleAttrs` slot prop into
	 * a custom label element/component of your choosing.
	 *
	 * @see https://formsnap.dev/docs/asChild
	 * @defaultValue `false`
	 */
	asChild?: boolean;

	/**
	 * You can bind to this prop to receive a reference to the
	 * underling HTML element rendered for the group title.
	 */
	el?: HTMLLegendElement;
} & HTMLAttributes<HTMLLegendElement>;
```

## Slot Props

The `<Form.Legend />` component provides a single slot prop, `legendAttrs`, which is only necessary when using the [asChild](/docs/aschild) prop.

```ts
type SlotProps = {
	legendAttrs: {
		"data-fs-legend": string;
		"data-fs-error": string | undefined;
		// any other props you pass to `<Form.Legend />`
		[key: string]: any;
	};
};
```

## Attributes

The following attributes are automatically applied to the element rendered by the `<Form.Legend />` component. This is also the shape of the `legendAttrs` slot prop when using the [asChild](/docs/aschild) prop.

```ts
export type LegendAttrs = {
	/** Used for selection during styling or otherwise */
	"data-fs-legend": string;

	/** Present when a validation error exists on the field. */
	"data-fs-error": string | undefined;

	/* Any additional props provided to `<Form.Legend />` */
	[key: string]: any;
};
```
