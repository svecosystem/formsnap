---
title: Fieldset
description: Groups related form controls or fields and extends the Field component.
tagline: Components
---

The `Fieldset` component is used to follow the [W3C Grouping Controls](https://www.w3.org/WAI/tutorials/forms/grouping/#associating-related-controls-with-fieldset) recommendation for associating related form controls. It renders a `<fieldset />` element and should always be used in conjunction with the [Legend](/docs/components/legend) component to provide a title for the group.

This component automatically includes the [Field](/docs/components/field) component, so you don't need to worry about wrapping it yourself, just be sure to pass the `form` and `name` props to the `Fieldset` as you would with the `Field` component.

## When to use a fieldset

### Radio Groups

When you have a group of radio buttons related to a single field, you should use a fieldset to group them together.

```svelte {1-2,13}
<Fieldset {form} name="theme">
	<Legend>Select your theme</Legend>
	{#each themes as theme}
		<Control let:attrs>
			<input {...attrs} type="radio" bind:group={$formData.theme} value={theme} />
			<Label>{theme}</Label>
		</Control>
	{/each}
	<Description>
		Help us understand your preferences by selecting a theme.
	</Description>
	<FieldErrors />
</Fieldset>
```

### Checkbox Groups

When you have a group of checkboxes related to a single field, typically used for multiple selections, you should use a fieldset to group them together.

```svelte {1-2,16}
<Fieldset {form} name="allergies">
	<Legend>Any food allergies?</Legend>
	{#each allergies as allergy}
		<Control let:attrs>
			<input
				{...attrs}
				type="checkbox"
				bind:group={$formData.allergies}
				value={allergy}
			/>
			<Label>{allergy}</Label>
		</Control>
	{/each}
	<Description>We'll make sure to accommodate your dietary needs.</Description>
	<FieldErrors />
</Fieldset>
```

### Grouped Form Sections

When you have a large form with multiple sections containing related fields, such as a "Billing Address" and a "Shipping Address", you should use a fieldset to group the related fields together. You won't use the `Fieldset` component directly in this case, since it doesn't represent a field on the form.

```svelte showLineNumbers
<form>
	<fieldset>
		<legend>Billing Address</legend>
		<!-- ... billing address fields -->
	</fieldset>
	<fieldset>
		<legend>Shipping Address</legend>
		<!-- ... shipping address fields -->
	</fieldset>
</form>
```

## Props

The `<Fieldset />` component renders a `<fieldset />` element and accepts the following props:

```ts
export type FieldsetProps<
	T extends Record<string, unknown>,
	U extends FormPath<T>,
> = {
	/**
	 * The form object returned from calling `superForm` in your component.
	 */
	form: SuperForm<T>;

	/**
	 * The path to the field in the form object.
	 */
	name: U;

	/**
	 * If `true`, Formsnap won't render the default `div` element
	 * and will expect you to spread the `groupAttrs` slot prop into
	 * a custom label element/component of your choosing.
	 *
	 * @see https://formsnap.dev/docs/composition/aschild
	 * @defaultValue `false`
	 */
	asChild?: boolean;

	/**
	 * You can bind to this prop to receive a reference to the
	 * underling HTML element rendered for the group.
	 */
	el?: HTMLFieldSetElement;
} & Omit<HTMLFieldsetAttributes, "form">;
```

## Slot Props

The `Fieldset` component provides a single slot prop, `fieldsetAttrs`, which is only necessary when using the [asChild](/docs/composition/aschild) prop.

```ts
type SlotProps = {
	fieldsetAttrs: FieldsetAttrs;
};
```

## Attributes

The following attributes are automatically applied to the `<fieldset />` element rendered by the `Fieldset` component. This is also the shape of the `fieldsetAttrs` slot prop when using the [asChild](/docs/composition/aschild) prop.

```ts
export type FieldsetAttrs = {
	/** Used for selection during styling or otherwise */
	"data-fs-fieldset": string;

	/** Present when a validation error exists on the field. */
	"data-fs-error": string | undefined;

	/* Any additional props provided to `<Form.Fieldset />` */
	[key: string]: any;
};
```
