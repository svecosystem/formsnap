---
title: FieldErrors
description: The container for validation errors for a Field, Fieldset, or ElementField.
section: Components
---

<script>
	import { PropField } from '@svecodocs/kit'
</script>

The `FieldErrors` component renders the following structure by default (attributes omitted for brevity):

```svelte
<div>
	{#if children}
		{@render children({ errors, errorProps })}
	{:else}
		{#each errors as error}
			<div>{error}</div>
		{/each}
	{/if}
</div>
```

Notice that we're populating the fallback for the children snippet, so if you don't provide children content for the `FieldErrors` component, it will render a `<div>` element for each error in the `errors` array.

The `errors` are the errors for the [Field](/docs/components/field), [Fieldset](/docs/components/fieldset), or [ElementField](/docs/components/element-field) that the `FieldErrors` component is associated with and must be used within the context of one of those components.

The errors container is automatically linked to the control of the field using the `aria-describedby` attribute when errors are present.

## Usage

### Basic Usage

By default, the `FieldErrors` component will render a `<div>` element with the errors for the field it is associated with.

```svelte {8}
<Field {form} name="name">
	<Control>
		{#snippet children({ props })}
			<Label>Name</Label>
			<input type="text" {...props} />
		{/snippet}
	</Control>
	<FieldErrors />
</Field>
```

### Custom Error Rendering

If you want to customize the rendering of the errors, you can access the errors using the `errors` snippet prop and render them however you'd like.

```svelte {8-14}
<Field {form} name="name">
	<Control>
		{#snippet children({ props })}
			<Label>Name</Label>
			<input type="text" {...props} />
		{/snippet}
	</Control>
	<FieldErrors>
		{#snippet children({ errors, errorProps })}
			{#each errors as err}
				<span style="color: red;" {...errorProps}>{err}</span>
			{/each}
		{/snippet}
	</FieldErrors>
</Field>
```

## API Reference

### Props

The `FieldErrors` component accepts all props that a standard HTML `<div>` element would accept along with a few additional props:

<PropField type="HTMLElement | null" name="ref">

A reference to the underlying HTML element rendered by the `Description` component.

```svelte /bind:ref={descriptionRef}/
<Description bind:ref={descriptionRef}>
	<!-- ... -->
</Description>
```

</PropField>

<PropField type="Snippet" name="child">

If provided, the `FieldErrors` component will not render an HTML element and will instead expect you to spread the snippet's `props` onto an element of your choosing.

See the [`child`](/docs/composition/child) snippet documentation for more information.

</PropField>

<PropField type="HTMLAttributes<HTMLElement>" name="...rest">

Any additional props provided to the `FieldErrors` component will be spread onto the underlying HTML element.

</PropField>

### Attributes

#### Field Errors Container

The following attributes are automatically applied to the container rendered by the `FieldErrors` component. This is also the shape of the `props` snippet prop when using the [child](/docs/composition/child) snippet.

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

#### Error Elements

The following attributes are automatically applied to the individual error elements rendered by the `FieldErrors` component. This is also the shape of the `errorProps` snippet prop.

```ts
export type ErrorAttrs = {
	/** Used for selection during styling or otherwise */
	"data-fs-field-error": string;

	/** Present when a validation error exists on the field. */
	"data-fs-error": string | undefined;
};
```
