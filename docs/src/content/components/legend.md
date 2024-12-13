---
title: Legend
description: Provides a title for a group of related form controls.
section: Components
---

<script>
	import { PropField } from '@svecodocs/kit'
</script>

You should always use the `Legend` component in conjunction with the [Fieldset](/docs/components/fieldset) component to provide a title for a group of related form controls. See the the `Fieldset` component's [documentation](/docs/components/fieldset) for more information on when to use a fieldset.

## Props

The `Legend` component renders a `<legend>` element and accepts all props that a standard HTML `<legend>` element would accept along with a few additional props:

<PropField type="HTMLElement | null" name="ref">

A `$bindable` reference to the underlying HTML element rendered by the `Legend` component.

</PropField>

<PropField type="Snippet" name="child">

If provided, the `Legend` component will not render an HTML element and will instead expect you to spread the snippet's `props` onto an element of your choosing.

See the [`child`](/docs/composition/child) snippet documentation for more information.

</PropField>

<PropField type="HTMLAttributes<HTMLLegendElement>" name="...rest">

Any additional props provided to the `Legend` component will be spread onto the underlying HTML element.

</PropField>

## Data Attributes

The following attributes are automatically applied to the element rendered by the `Legend` component.

<PropField type="''" name="data-fs-legend">

Applied to the element for selection during styling or otherwise.

</PropField>

<PropField type="'' | undefined" name="data-fs-error">

Applied to the element when a validation error exists on the field.

</PropField>
