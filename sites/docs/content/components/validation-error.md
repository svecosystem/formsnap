---
title: ValidationError
description: Renders validation errors for a field.
---

The `ValidationError` component renders the following structure by default (attributes omitted for brevity):

```svelte
<div>
	<slot errors={$errors}>
		{#each $errors as error}
			<div>{error}</div>
		{/each}
	</slot>
</div>
```

The `errors` are the errors for the [Field](/docs/components/field) or [Fieldset](/docs/components/fieldset) that the `ValidationError` component is associated with and must be used within the context of a `Field` or `Fieldset` component.

The errors are automatically linked to the control of the field using the `aria-describedby` attribute when errors are present.

## Usage

### Basic Usage

By default, the `ValidationError` component will render a `<div />` element with the errors for the field it is associated with.

```svelte {6}
<Field {form} name="name">
	<Control let:attrs>
		<Label>Name</Label>
		<input type="text" {...attrs} />
	</Control>
	<ValidationError />
</Field>
```

### Custom Error Rendering

If you want to customize the rendering of the errors, you can access the errors using the `errors` slot prop and render them however you'd like.

```svelte {6-10}
<Field {form} name="name">
	<Control let:attrs>
		<Label>Name</Label>
		<input type="text" {...attrs} />
	</Control>
	<ValidationError let:errors>
		{#each errors as err}
			<span style="color: red;">{err}</span>
		{/each}
	</ValidationError>
</Field>
```

## Props

The `ValidationError` component renders a `<div />` element and accepts all props that a standard HTML `<div />` element would accept along with a few additional props.

```ts
export type ValidationErrorProps = {
	/**
	 * Optionally provide a unique id for the validation message.
	 * If not provided, a unique ID will be generated for you.
	 */
	id?: string;

	/**
	 * If `true`, Formsnap won't render the default `div` element
	 * and will expect you to spread the `validationAttrs` slot prop into
	 * a custom element/component of your choosing.
	 *
	 * @see https://formsnap.dev/docs/asChild
	 * @defaultValue `false`
	 */
	asChild?: boolean;

	/**
	 * You can bind to this prop to receive a reference to the
	 * underling HTML element rendered for the validation message.
	 */
	el?: HTMLDivElement;
} & HTMLAttributes<HTMLDivElement>;
```

## Slot Props

The `ValidationError` component provides two slot props, `validationAttrs`, which is only necessary when using the [asChild](/docs/aschild) prop, and `errors`, which is an array representing the errors for the field that the `ValidationError` component is associated with.

```ts
type SlotProps = {
	validationErrorAttrs: ValidationErrorAttrs;
	validationErrorMessageAttrs: ValidationErrorMessageAttrs;
	errors: string[];
};
```

## Attributes

### Validation Element

The following attributes are automatically applied to the element rendered by the `Validation` component. This is also the shape of the `validationAttrs` slot prop when using the [asChild](/docs/aschild) prop.

```ts
export type ValidationErrorAttrs = {
	/** The ID of the validation element, used to describe the control. */
	id: string;

	/** Present when a validation error exists on the field. */
	"data-fs-error": string | undefined;

	/** Used for selection during styling or otherwise */
	"data-fs-validation": string;

	/** Notifies screen readers when a validation error occurs */
	"aria-live": "assertive" | "polite";

	/** Any additional props provided to `<Form.Validation />` */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
};
```

### Error Elements

The following attributes are automatically applied to the individual error elements rendered by the `ValidationError` component. This is also the shape of the `validationErrorMessageAttrs` slot prop.

```ts
export type ValidationErrorMessageAttrs = {
	/** Used for selection during styling or otherwise */
	"data-fs-validation-error-message": string;

	/** Present when a validation error exists on the field. */
	"data-fs-error": string | undefined;
};
```
