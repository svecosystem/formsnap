---
title: useFormField
description: Use the form field's state for advanced composition with custom form components.
section: Composition
---

<script>
	import { Callout, PropField } from '@svecodocs/kit'
</script>

You can use `useFormField` within the context of a [Field](/docs/components/field), [Fieldset](/docs/components/fieldset), or [ElementField](/docs/components/element-field) component to access the state of the field and use it to build more advanced form components.

## Usage Example

The `useFormField` function is provided for more advanced use cases where you may need to access the entire state of a form field, as well as the form itself.

```svelte title="CustomFieldErrors.svelte"
<script lang="ts">
	import { useFormField } from "formsnap";
	import type { HTMLAttributes } from "svelte/elements";
	import { schema } from "./schema.js";
	import type { Infer } from "sveltekit-superforms";
	// whatever your validation library is
	import { z } from "zod";

	let { id, ...rest }: HTMLAttributes<HTMLElement> = $props();

	const field = useFormField<Infer<typeof schema>, "name">({
		errorsId: () => id,
	});
</script>

{#if $errors.length > 0}
	<div class="error" {id} {...rest}>
		{#each $errors as error}
			<p>{error}</p>
		{/each}
	</div>
{/if}
```

In the example above, we're using the `useFormField` function to pass a custom `errorsId` that will be used to apply appropriate ARIA attributes to the other components within the field.

## API

### Props

<PropField type="() => string | undefined | null" name="errorsId">

Optionally provide a getter function that returns a custom ID to override the errors container ID.

</PropField>

<PropField type="() => string | undefined | null" name="descriptionId">

Optionally provide a getter function that returns a custom ID to override the description container ID.

</PropField>

### Return Type

`useFormField` returns the following type:

```ts
import type { FormPath } from "sveltekit-superforms";

/**
 * State for the current form field.
 */
export type UseFormFieldReturn<T extends Record<string, unknown>, U extends FormPath<T>> = {
	/** The original form store passed to the `*Field` component. */
	form: SuperForm<T>;

	/** Reactive state containing the ID of the field errors container for the field. */
	readonly errorsId: string;

	/** Reactive state containing the ID of the description element for the field. */
	readonly descriptionId: string;

	/** Reactive state containing the name of the field. */
	readonly name: U;

	/** Reactive state containing the current validations errors for the field. */
	readonly errors: string[];

	/** Reactive state containing the constraints (if any) for the field. */
	readonly constraints: Record<string, unknown>;

	/** Reactive state containing the tainted state of the field. */
	readonly tainted: boolean;
};
```

<Callout type="warning">

The `useFormField` function returns getters for the various reactive states. You should not destructure the object returned by `useFormField` and instead use the getters directly.

</Callout>
