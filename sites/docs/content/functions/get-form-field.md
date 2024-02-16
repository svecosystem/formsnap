---
title: getFormField
description: Use the form field's state for advanced composition with custom form components.
---

You can use `getFormField` within the context of a `Field` or `Fieldset` component to access the state of the field and use it to build more advanced form components.

## Usage

```svelte showLineNumbers
<script lang="ts">
	import { getFormField } from "formsnap";
	import { schema } from "./schema.js";
	// whatever your validation library is
	import { z } from "zod";

	const field = getFormField<z.infer<typeof schema>, "name">();
</script>
```

## API

The `getFormField` function returns an object with the following types:

```ts
import type { FormPath } from "sveltekit-superforms";

/**
 * State for the current form field.
 */
export type FormFieldContext<
	T extends Record<string, unknown>,
	U extends FormPath<T>,
> = {
	/** The original form object returned from the load function. */
	form: SuperForm<T>;

	/** A store containing the ID of the validation element for the field. */
	validationId: Writable<string>;

	/** A store containing the ID of the description element for the field. */
	descriptionId: Writable<string>;

	/** A store containing the name of the field. */
	name: Writable<U>;

	/** A store containing the current validations errors for the field. */
	errors: Writable<string[]>;

	/** A store containing the constraints (if any) for the field. */
	constraints: Writable<Record<string, unknown>>;

	/** A store containing the tainted state of the field. */
	tainted: Writable<boolean>;
};
```
