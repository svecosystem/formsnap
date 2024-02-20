---
title: Styling
description: Easily style the various parts of your forms.
---

Formsnap doesn't ship with any styles by default, but it does provide a number of ways to style the various parts of your form. You can use the `class` prop to apply classes to the various components, or you can use the `data` attributes to style the components using CSS.

## Data Attributes

Data attributes are applied to the various parts of your form so that you can easily style them using those attributes as selectors on a parent element or at the global level.

<!-- prettier-ignore -->
| Attribute | Description |
| --------- | ----------- |
| `data-fs-error` | Applied to all the formsnap elements within a field if the field has a validation error. Using this attribute, you can customize the appearance of the input, label, etc. when the field has a validation error. |
| `data-fs-control` | Applied to the form control element used within a [Control](/docs/components/control) context. |
| `data-fs-label` | Applied to the `<label>` element rendered by the [Label](/docs/components/label) component. |
| `data-fs-field-errors` | Applied to the [FieldErrors](/docs/components/validation-error) container `<div>` element. |
| `data-fs-field-error` | Applied to the individually rendered `<div>` elements for each of the errors in the [FieldErrors](/docs/components/validation-error) component. |
| `data-fs-description` | Applied to the `<div>` element rendered by the [Description](/docs/components/description) component. |
| `data-fs-fieldset` | Applied to the `<fieldset>` element rendered by the [Fieldset](/docs/components/fieldset) component. |
| `data-fs-legend` | Applied to the `<legend>` element rendered by the [Legend](/docs/components/legend) component. |

Here's an example of how you might use these data attributes to style the various parts of your form:

```css title="app.pcss"
[data-fs-error] {
	color: red;
}

[data-fs-control] {
	border: 1px solid #ccc;
}

/* ... */
```

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
