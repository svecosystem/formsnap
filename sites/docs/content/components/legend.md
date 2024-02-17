---
title: Legend
description: Provides a title for a group of related form controls.
---

You should always use the `Legend` component in conjunction with the [Fieldset](/docs/components/fieldset) component to provide a title for a group of related form controls. See the the `Fieldset` component's [documentation](/docs/components/fieldset) for more information on when to use a fieldset.

## Props

The `Legend` component renders a `<legend />` element and accepts all props that a standard HTML `legend` element would accept along with a few additional props:

```ts
export type LegendProps = {
	/**
	 * If `true`, Formsnap won't render the default `legend` element
	 * and will expect you to spread the `legendAttrs` slot prop into
	 * a custom legend element/component of your choosing.
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

The `Legend` component provides a single slot prop, `legendAttrs`, which is only necessary when using the [asChild](/docs/aschild) prop.

```ts
type SlotProps = {
	legendAttrs: LegendAttrs;
};
```

## Attributes

The following attributes are automatically applied to the element rendered by the `Legend` component. This is also the shape of the `legendAttrs` slot prop when using the [asChild](/docs/aschild) prop.

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
