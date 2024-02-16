---
title: Styling
description: Easily style the various parts of your forms.
---

Formsnap doesn't ship with any styles by default, but it does provide a number of ways to style the various parts of your form. You can use the `class` prop to apply classes to the various components, or you can use the `data` attributes to style the components using CSS.

## Data Attributes

Data attributes are applied to the various parts of your form so that you can easily style them using those attributes as selectors on a parent element or at the global level.

- `data-fs-error` - Applied to all the formsnap components within a field if the field has a validation error. Using this attribute, you can customize the appearance of the input, label, etc. when the field has a validation error.
- `data-fs-control` - Applied to the form control elements used within a [Control](/docs/components/control) context.
- `data-fs-label` - Applied to the [Label](/docs/components/label) component.
- `data-fs-validation-error` - Applied to the [ValidationError](/docs/components/validation-error) component.
- `data-fs-validation-error-message` - Applied to the default rendered `div` element for each of the validations errors in the [ValidationError](/docs/components/validation-error) component.
- `data-fs-description` - Applied to the [Description](/docs/components/description) component.
- `data-fs-fieldset` - Applied to the [Fieldset](/docs/components/fieldset) component.
- `data-fs-legend` - Applied to the [Legend](/docs/components/legend) component.

## CSS Frameworks

If you're using a CSS framework like TailwindCSS or UnoCSS, you can simply pass the `class` prop to the various components that render HTML elements under the hood. For example:

```svelte {7}
<script lang="ts">
	import { Label } from "formsnap";
</script>

<form>
	<!-- ... -->
	<Label class="text-black hover:text-orange-500">First Name</Label>
	<!-- ... -->
</form>
```
