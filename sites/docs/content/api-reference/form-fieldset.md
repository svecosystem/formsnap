---
title: <Form.Fieldset />
description: A component used to group related form controls or fields.
---

The `<Form.Fieldset />` component is used to follow the [W3C Grouping Controls](https://www.w3.org/WAI/tutorials/forms/grouping/#associating-related-controls-with-wai-aria) recommendation for associating related form controls.

`<Form.Fieldset />` renders a `<fieldset />` element and should always be used in conjunction with the `<Form.Legend />` component to provide a title for the group.

## When to use a fieldset

### Radio Groups

When you have a group of radio buttons related to a single field, you should use a fieldset to group them together.

```svelte showLineNumbers {2-3,12}
<Form.Field name="theme">
	<Form.Fieldset>
		<Form.Legend>Select your theme</Form.Legend>
		{#each themes as theme}
			<Form.Item let:attrs>
				<input {...attrs} type="radio" bind:group={$formData.theme} value={theme} />
				<Form.Label>{theme}</Form.Label>
			</Form.Item>
		{/each}
		<Form.Description>
			Help us understand your preferences by selecting a theme.
		</Form.Description>
		<Form.Validation />
	</Form.Fieldset>
</Form.Field>
```

### Checkbox Groups

When you have a group of checkboxes related to a single field, typically used for multiple selections, you should use a fieldset to group them together.

```svelte showLineNumbers {2-3,19}
<Form.Field name="theme">
	<Form.Fieldset>
		<Form.Legend>Any food allergies?</Form.Legend>
		{#each allergies as allergy}
			<Form.Item let:attrs>
				<input
					{...attrs}
					type="checkbox"
					bind:group={$formData.theme}
					value={allergy}
				/>
				<Form.Label>{allergy}</Form.Label>
			</Form.Item>
		{/each}
		<Form.Description>
			We'll make sure to accommodate your dietary needs.
		</Form.Description>
		<Form.Validation />
	</Form.Fieldset>
</Form.Field>
```

### Grouped Form Sections

When you have a large form with multiple sections containing related fields, such as a "Billing Address" and a "Shipping Address", you should use a fieldset to group the related fields together.

```svelte showLineNumbers
<form>
	<Form.Fieldset>
		<Form.Legend>Billing Address</Form.Legend>
		<!-- ... billing address fields -->
	</Form.Fieldset>
	<Form.Fieldset>
		<Form.Legend>Shipping Address</Form.Legend>
		<!-- ... shipping address fields -->
	</Form.Fieldset>
</form>
```

## Props

The `<Form.Fieldset />` component renders a `<fieldset />` element and accepts the following props:

```ts
export type FieldsetProps = {
	/**
	 * If `true`, Formsnap won't render the default `div` element
	 * and will expect you to spread the `groupAttrs` slot prop into
	 * a custom label element/component of your choosing.
	 *
	 * @see https://formsnap.dev/docs/asChild
	 * @defaultValue `false`
	 */
	asChild?: boolean;

	/**
	 * You can bind to this prop to receive a reference to the
	 * underling HTML element rendered for the group.
	 */
	el?: HTMLFieldSetElement;
} & HTMLFieldsetAttributes;
```

## Slot Props

The `<Form.Fieldset />` component provides a single slot prop, `fieldsetAttrs`, which is only necessary when using the [asChild](/docs/aschild) prop.

```ts
type SlotProps = {
	fieldsetAttrs: {
		role: string;
		"data-fs-group": string;
		"data-fs-error": string | undefined;
		[key: string]: any;
	};
};
```