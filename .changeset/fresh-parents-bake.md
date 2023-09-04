---
"formsnap": patch
---

#### Add a `getFormField` helper function

The `getFormField` helper function must be called upon component initialization and provides some useful stores, actions, etc. when composing your own forms.
For example, if I wanted to create a reusable `Form.Label` with conditional styles applied to it depending on the error state of the field, I could do something like this:

```svelte
<!-- CustomLabel.svelte -->
<script lang="ts">
	import { Form, getFormField } from 'formsnap';	
	const { errors } = getFormField()
</script>

<Form.Label class={$errors ? "text-red-500" : "text-gray-800"}>
	<slot />
</Form.Label>
```


It returns the following type:
```ts
export type FormFieldContext = {
	name: string;
	ids: {
		input: string;
		description: string;
		validation: string;
	};
	errors: Writable<string[] | undefined>;
	value: Writable<unknown>;
	hasDescription: Writable<boolean>;
	hasValidation: Writable<boolean>;
	attrStore: AttrStore;
	actions: ActionsObject;
};
```
