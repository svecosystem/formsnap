<script lang="ts">
	import { createFormFieldMulti } from "@/lib/internal/index.js";
	import type { Form, FormValidation } from "@/lib/internal/index.js";
	import type { AnyZodObject, z } from "zod";

	type T = $$Generic<AnyZodObject | FormValidation>;
	type Options = $$Generic<keyof z.infer<T>[][number]>;

	export let config: Form<T>;
	export let name: Options;

	const {
		superFormStores,
		getFieldAttrs,
		actions,
		attrStore,
		hasValidation,
		hasDescription,
		handlers,
		setValue,
		ids
	} = createFormFieldMulti<T, Options>(config, name);

	const { value, errors, constraints } = superFormStores;

	$: inputAttrs = getFieldAttrs({
		val: $value,
		errors: $errors,
		constraints: $constraints,
		hasValidation: $hasValidation,
		hasDescription: $hasDescription
	});
	$: attrStore.set(inputAttrs);

	$: attrs = {
		input: inputAttrs,
		label: {
			for: ids.input
		},
		description: {
			id: ids.description
		},
		validation: {
			id: ids.validation,
			"aria-live": "assertive"
		} as const
	};
</script>

<slot
	stores={superFormStores}
	errors={$errors}
	value={$value}
	constraints={$constraints}
	{handlers}
	{attrs}
	{actions}
	{setValue}
/>
