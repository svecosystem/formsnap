---
title: Styling
description: Easily style the various parts of your forms.
---

Formsnap doesn't ship with any styles by default, but it does provide a number of ways to style the various parts of your form. You can use the `class` prop to apply classes to the various components, or you can use the `data` attributes to style the components using CSS.

## Data Attributes

Data attributes are applied to the various parts of your form so that you can easily style them using those attributes as selectors on a parent element or at the global level.

- `data-fs-error` - Applied to all the formsnap components within a field if the field has a validation error. Using this attribute, you can customize the appearance of the input, label, etc. when the field has a validation error.
- `data-fs-label` - Applied to the `<Form.Label />` component.
- `data-fs-validation` - Applied to the `<Form.Validation />` component.
- `data-fs-validation-error` - Applied to the default rendered `div` element for each of the validations errors in the `<Form.Validation />` component.
- `data-fs-description` - Applied to the `<Form.Description />` component.
- `data-fs-group` - Applied to the `<Form.Group />` component.
- `data-fs-group-title` - Applied to the `<Form.GroupTitle />` component.

## CSS Frameworks

If you're using a CSS framework like TailwindCSS or UnoCSS, you can simply pass the `class` prop to the various components that render HTML elements under the hood. For example:

```svelte {7}
<script lang="ts">
	import { Form } from "formsnap";
</script>

<form>
	<!-- ... -->
	<Form.Label class="text-black hover:text-orange-500">First Name</Form.Label>
	<!-- ... -->
</form>
```
