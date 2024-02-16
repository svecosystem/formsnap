---
title: <Form.Validation />
description: A component that renders validation errors for a field.
---

The `<Form.Validation />` component renders the following structure by default (attributes omitted for brevity):

```svelte
<div>
	<slot errors={$errors}>
		{#each $errors as error}
			<div>{error}</div>
		{/each}
	</slot>
</div>
```

The `errors` are the errors for the field that the `<Form.Validation />` component is associated with.

It must be used within the context of a `<Form.Field />` component and will automatically be linked to the control of the field using the `aria-describedby` attribute when errors are present.

## Usage

### Basic Usage

By default, the `<Form.Validation />` component will render a `<div />` element with the errors for the field it is associated with.

```svelte {6}
<Form.Field name="name">
	<Form.Item let:attrs>
		<Form.Label>Name</Form.Label>
		<input type="text" {...attrs} />
	</Form.Item>
	<Form.Validation />
</Form.Field>
```

### Custom Error Rendering

If you want to customize the rendering of the errors, you can access the errors using the `errors` slot prop and render them however you'd like.

```svelte {6-10}
<Form.Field name="name">
	<Form.Item let:attrs>
		<Form.Label>Name</Form.Label>
		<input type="text" {...attrs} />
	</Form.Item>
	<Form.Validation let:errors>
		{#each errors as err}
			<span style="color: red;">{err}</span>
		{/each}
	</Form.Validation>
</Form.Field>
```

## Props

The `<Form.Description />` component renders a `<div />` element and accepts all props that a standard HTML `<div />` element would accept along with a few additional props.

```ts
export type ValidationProps = {
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

The `<Form.Validation />` component provides two slot props, `validationAttrs`, which is only necessary when using the [asChild](/docs/aschild) prop, and `errors`, which is an array representing the errors for the field that the `<Form.Validation />` component is associated with.

```ts
type SlotProps = {
	validationAttrs: {
		id: string | undefined;
		"data-fs-error": string | undefined;
		"data-fs-validation": string;
		// any other props you pass to `<Form.Validation />`
		[key: string]: any;
	};
	errors: string[];
};
```
