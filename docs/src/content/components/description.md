---
title: Description
description: Provides an accessible description for a form field.
section: Components
---

<script>
	import { PropField } from '@svecodocs/kit'
</script>

The `Description` component provides an accessible description for a field. It renders a `<div>` element and should be used to provide additional context or instructions for a form field.

Descriptions must be used within the context of a [Field](/docs/components/field), [Fieldset](/docs/components/fieldset), or [ElementField](/docs/components/element-field) component and will automatically be linked to the [Control](/docs/components/control) of the field using the `aria-describedby` attribute.

## Usage

```svelte {6}
<Field name="name" {form}>
	<Control>
		<Label>Name</Label>
		<input type="text" {...controlProps()} />
	</Control>
	<Description>Your full name, including your middle name.</Description>
</Field>
```

## API Reference

### Props

The `Description` component accepts all props that a standard HTML `<div>` element would accept, along with a few additional props:

<PropField type="HTMLElement | null" name="ref">

A reference to the underlying HTML element rendered by the `Description` component.

```svelte /bind:ref={descriptionRef}/
<Description bind:ref={descriptionRef}>
	<!-- ... -->
</Description>
```

</PropField>

<PropField type="Snippet" name="child">

If provided, the `Description` component will not render an HTML element and will instead expect you to spread the snippet's `props` onto an element of your choosing.

See the [`child`](/docs/composition/child) snippet documentation for more information.

</PropField>

<PropField type="HTMLAttributes<HTMLElement>" name="...rest">

Any additional props provided to the `Description` component will be spread onto the underlying HTML element.

</PropField>

### Data Attributes

The following data attributes are automatically applied to the `<div>` element rendered by the `Description` component.

<PropField type="''" name="data-fs-description">

Applied to the description element for selection during styling or otherwise.

</PropField>

<PropField type="'' | undefined" name="data-fs-error">

Applied to the description element when a validation error exists on the field.

</PropField>
