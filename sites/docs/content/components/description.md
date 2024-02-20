---
title: Description
description: Provides an accessible description for a form field.
tagline: Components
---

The `Description` component provides an accessible description for a field. It renders a `<div>` element and should be used to provide additional context or instructions for a form field.

Descriptions must be used within the context of a [Field](/docs/components/field), [Fieldset](/docs/components/fieldset), or [ElementField](/docs/components/element-field) component and will automatically be linked to the [Control](/docs/components/control) of the field using the `aria-describedby` attribute.

## Usage

```svelte {6-8}
<Field name="name">
	<Control let:attrs>
		<Label>Name</Label>
		<input type="text" {...attrs} />
	</Control>
	<Description>
		Your full name, including your middle name if you have one.
	</Description>
</Field>
```

## Props

The `Description` component accepts all props that a standard HTML `<div>` element would accept along with a few additional props:

```ts
export type DescriptionProps = {
	/**
	 * Optionally provide a unique id for the description.
	 * If not provided, a unique ID will be generated for you.
	 */
	id?: string;

	/**
	 * If true, Formsnap won't render the default `div` element and will
	 * instead expect you to spread the `descriptionAttrs` slot prop into an
	 * element of your choosing.
	 *
	 * @see https://formsnap.dev/docs/composition/aschild
	 * @defaultValue `false`
	 */
	asChild?: boolean;

	/**
	 * You can bind to this prop to receive a reference to the
	 * underling HTML element rendered for the description.
	 */
	el?: HTMLDivElement;
} & HTMLAttributes<HTMLDivElement>;
```

## Slot Props

The `Description` component provides a single slot prop, `descriptionAttrs`, which is only necessary when using the [asChild](/docs/composition/aschild) prop.

```ts
type SlotProps = {
	descriptionAttrs: DescriptionAttrs;
};
```

## Attributes

The following attributes are automatically applied to the element rendered by the `Description` component. This is also the shape of the `descriptionAttrs` slot prop when using the [asChild](/docs/composition/aschild) prop.

```ts
export type DescriptionAttrs = {
	/** The ID of the description element, used to describe the control. */
	id: string;

	/** Used for selection during styling or otherwise */
	"data-fs-description": string;

	/** Present when a validation error exists on the field. */
	"data-fs-error": string | undefined;

	/* Any additional props provided to `<Form.Description />` */
	[key: string]: any;
};
```
