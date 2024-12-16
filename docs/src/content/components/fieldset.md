---
title: Fieldset
description: Groups related form controls or fields and extends the Field component.
section: Components
---

<script>
	import { PropField } from '@svecodocs/kit'
</script>

The `Fieldset` component is used to follow the [W3C Grouping Controls](https://www.w3.org/WAI/tutorials/forms/grouping/#associating-related-controls-with-fieldset) recommendation for associating related form controls. It renders a `<fieldset>` element and should always be used in conjunction with the [Legend](/docs/components/legend) component to provide a title for the group.

This component automatically includes the [Field](/docs/components/field) component, so you don't need to worry about wrapping it yourself, just be sure to pass the `form` and `name` props to the `Fieldset` as you would with the `Field` component.

## When to use a fieldset

### Radio Groups

When you have a group of radio buttons related to a single field, you should use a `Fieldset` to group them together.

```svelte {1-2,11}
<Fieldset {form} name="theme">
	<Legend>Select your theme</Legend>
	{#each themes as theme}
		<Control>
			<input {...controlProps()} type="radio" bind:group={$formData.theme} value={theme} />
			<Label>{theme}</Label>
		</Control>
	{/each}
	<Description>Help us understand your preferences by selecting a theme.</Description>
	<FieldErrors />
</Fieldset>
```

### Checkbox Groups

When you have a group of checkboxes related to a single field, typically used for multiple selections, you should use a `Fieldset` to group them together.

```svelte {1-2,16}
<Fieldset {form} name="allergies">
	<Legend>Any food allergies?</Legend>
	{#each allergies as allergy}
		<Control>
			<input
				{...controlProps()}
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

When you have a large form with multiple sections containing related fields, such as a "Billing Address" and a "Shipping Address", you should use a `<fieldset>` to group the related fields together. You won't use the `Fieldset` component directly in this case, since it doesn't represent a field on the form.

```svelte
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

## API Reference

### Props

The `Fieldset` component renders a `<fieldset>` element and accepts the following props:

<PropField type="SuperForm<T>" name="form" required>

The form object returned from calling `superForm` in your component.

</PropField>

<PropField type="FormPath<T>" name="name" required>

The path to the field in the form object.

</PropField>

<PropField type="HTMLElement | null" name="ref">

A `$bindable` reference to the underlying HTML element rendered by the `Fieldset` component.

</PropField>

<PropField type="Snippet" name="child">

If provided, the `Fieldset` component will not render an HTML element and will instead expect you to spread the snippet's `props` onto an element of your choosing.

See the [`child`](/docs/composition/child) snippet documentation for more information.

</PropField>

<PropField type="HTMLAttributes<HTMLFieldSetElement>" name="...rest">

Any additional props provided to the `Fieldset` component will be spread onto the underlying HTML element.

</PropField>

### Snippet Props (children)

The following snippet props are provided to the `children` snippet for convenience and ease of composition when using the `ElementField` component.

<PropField type="T[U]" name="value">

The value of the value store of the field.

</PropField>

<PropField type="string[] | undefined" name="errors">

The value of the errors store for the field.

</PropField>

<PropField type="Record<string, unknown>" name="constraints">

The constraints for the field.

</PropField>

<PropField type="boolean" name="tainted">

Whether the field is tainted or not.

</PropField>

### Snippet Props (child)

The following snippet props are provided to the `child` snippet for convenience and ease of composition when using the `ElementField` component.

<PropField type="Record<string, unknown>" name="props">

The props to spread onto your custom `<fieldset>` element/component.

</PropField>

<PropField type="T[U]" name="value">

The value of the value store of the field.

</PropField>

<PropField type="string[] | undefined" name="errors">

The value of the errors store for the field.

</PropField>

<PropField type="Record<string, unknown>" name="constraints">

The constraints for the field.

</PropField>

<PropField type="boolean" name="tainted">

Whether the field is tainted or not.

</PropField>

### Data Attributes

The following data attributes are automatically applied to the `<fieldset>` element rendered by the `Fieldset` component.

<PropField type="''" name="data-fs-fieldset">

Applied to the element for selection during styling or otherwise.

</PropField>

<PropField type="'' | undefined" name="data-fs-error">

Applied to the element when a validation error exists on the field.

</PropField>
