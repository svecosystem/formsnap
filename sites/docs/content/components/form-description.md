---
title: <Form.Description />
description: A component that provides an accessible description for a form field.
---

The `<Form.Description />` component provides an accessible description for a form field. It renders a `<div />` element and should be used to provide additional context or instructions for a form field.

It must be used within the context of a `<Form.Field />` component and will automatically be linked to the control of the field using the `aria-describedby` attribute.

## Usage

```svelte {6-8}
<Form.Field name="name">
	<Form.Item let:attrs>
		<Form.Label>Name</Form.Label>
		<input type="text" {...attrs} />
	</Form.Item>
	<Form.Description>
		Your full name, including your middle name if you have one.
	</Form.Description>
</Form.Field>
```

## Props

The `<Form.Description />` component renders a `<div />` element and accepts all props that a standard HTML `<div />` element would accept along with a few additional props.

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
	 * @see https://formsnap.dev/docs/asChild
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

The `<Form.Description />` component provides a single slot prop, `descriptionAttrs`, which is only necessary when using the [asChild](/docs/aschild) prop.

```ts
type SlotProps = {
	descriptionAttrs: {
		id: string | undefined;
		"data-fs-error": string | undefined;
		"data-fs-description": string;
		// any other props you pass to `<Form.Description />`
		[key: string]: any;
	};
};
```
