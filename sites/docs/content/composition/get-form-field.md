---
title: getFormField
description: Use the form field's state for advanced composition with custom form components.
tagline: Composition
---

You can use `getFormField` within the context of a [Field](/docs/components/field), [Fieldset](/docs/components/fieldset), or [ElementField](/docs/components/element-field) component to access the state of the field and use it to build more advanced form components.

## Usage Example

The `getFormField` function is provided for more advanced use cases where you may need to access the entire state of a form field, as well as the form itself.

```svelte title="CustomFieldErrors.svelte"
<script lang="ts">
	import { getFormField } from "formsnap";
	import { schema } from "./schema.js";
	import type { Infer } from "sveltekit-superforms";
	// whatever your validation library is
	import { z } from "zod";

	export let id: string;

	const { errors, fieldErrorsId } = getFormField<Infer<typeof schema>, "name">();

	$: fieldErrorsId.set(id);
</script>

{#if $errors.length > 0}
	<div class="error" {id}>
		{#each $errors as error}
			<p>{error}</p>
		{/each}
	</div>
{/if}
```

## API

The `getFormField` function returns an object with the following types:

```ts
import type { FormPath } from "sveltekit-superforms";

/**
 * State for the current form field.
 */
export type FormFieldContext<T extends Record<string, unknown>, U extends FormPath<T>> = {
	/** The original form object returned from the load function. */
	form: SuperForm<T>;

	/** A store containing the ID of the field errors container for the field. */
	fieldErrorsId: Writable<string>;

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
