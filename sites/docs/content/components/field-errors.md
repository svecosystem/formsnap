---
title: FieldErrors
description: The container for validation errors for a Field, Fieldset, or ArrayField.
---

By default, the `FieldErrors` component renders the following structure by default (attributes omitted for brevity):

```svelte
<div>
	<slot errors={$errors}>
		{#each $errors as error}
			<div>{error}</div>
		{/each}
	</slot>
</div>
```

The `errors` are the errors for the [Field](/docs/components/field), [Fieldset](/docs/components/fieldset), or [ArrayField](/docs/components/array-field) that the `FieldErrors` component is associated with and must be used within the context of a `Field`,`Fieldset`, or `ArrayField` component.

The errors are automatically linked to the control of the field using the `aria-describedby` attribute when errors are present.

## Usage

### Basic Usage

By default, the `FieldErrors` component will render a `<div />` element with the errors for the field it is associated with.

```svelte {6}
<Field {form} name="name">
	<Control let:attrs>
		<Label>Name</Label>
		<input type="text" {...attrs} />
	</Control>
	<FieldErrors />
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
	<FieldErrors let:errors let:errorAttrs>
		{#each errors as err}
			<span style="color: red;" {...errorAttrs}>{err}</span>
		{/each}
	</FieldErrors>
</Field>
```

## Props

The `FieldErrors` component accepts all props that a standard HTML `<div />` element would accept along with a few additional props:

```ts
export type FieldErrorsProps = {
	/**
	 * Optionally provide a unique id for the field errors container.
	 * If not provided, a unique ID will be generated for you.
	 */
	id?: string;

	/**
	 * If `true`, Formsnap won't render the default `div` element
	 * and will expect you to spread the `fieldErrorAttrs` slot prop into
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

The `FieldErrors` component provides three slot props, `fieldErrorsAttrs`, which is only necessary when using the [asChild](/docs/aschild) prop, `errors`, which is an array representing the errors for the field that the `FieldErrors` component is associated with, and `errorAttrs`, which are attributes that can (optionally) be spread onto each individual error element being rendered.

```ts
type SlotProps = {
	fieldErrorsAttrs: FieldErrorsAttrs;
	errorAttrs: ErrorAttrs;
	errors: string[];
};
```

## Attributes

### Field Errors Container

The following attributes are automatically applied to the container rendered by the `FieldErrors` component. This is also the shape of the `fieldErrorsAttrs` slot prop when using the [asChild](/docs/aschild) prop.

```ts
export type FieldErrorsAttrs = {
	/** The ID of the field error container element, used to describe the control. */
	id: string;

	/** Present when a validation error exists on the field. */
	"data-fs-error": string | undefined;

	/** Used for selection during styling or otherwise */
	"data-fs-field-errors": string;

	/** Notifies screen readers when a validation error occurs */
	"aria-live": "assertive" | "polite";

	/** Any additional props provided to `<Form.Validation />` */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
};
```

### Error Elements

The following attributes are automatically applied to the individual error elements rendered by the `FieldErrors` component. This is also the shape of the `errorAttrs` slot prop.

```ts
export type ErrorAttrs = {
	/** Used for selection during styling or otherwise */
	"data-fs-field-error": string;

	/** Present when a validation error exists on the field. */
	"data-fs-error": string | undefined;
};
```
