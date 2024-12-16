---
title: Label
description: Renders a label element for a control.
section: Components
---

<script>
	import { PropField } from '@svecodocs/kit'
</script>

The `Label` component must be used as a child of a [Control](/docs/components/control) component. It renders a `<label>` element and includes the necessary attributes to associate it with the control.

## Usage

When using a `Label` inside a [Control](/docs/components/control), you don't need to worry about the `for` attribute. Formsnap handles that for you.

```svelte {3}
<Field {form} name="name">
	<Control>
		<Label>Name</Label>
		<input type="text" {...controlProps()} />
	</Control>
</Field>
```

## API Reference

### Props

<PropField type="HTMLElement | null" name="ref">

A `$bindable` reference to the underlying `<label>` element rendered by the `Label` component.

</PropField>

<PropField type="Snippet" name="child">

If provided, the `Label` component will not render an HTML element and will instead expect you to spread the snippet's `props` onto an element of your choosing.

See the [`child`](/docs/composition/child) snippet documentation for more information.

</PropField>

<PropField type="HTMLAttributes<HTMLLabelElement>" name="...rest">

Any additional props provided to the `Label` component will be spread onto the underlying HTML element.

</PropField>

## Data Attributes

The following data attributes are automatically applied to the element rendered by the `Label` component.

<PropField type="''" name="data-fs-label">

Applied to the element for selection during styling or otherwise.

</PropField>

<PropField type="'' | undefined" name="data-fs-error">

Applied to the element when a validation error exists on the field.

</PropField>
