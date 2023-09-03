<script lang="ts">
	import type { FieldProps } from "../types.js";
	import { createFormField, type FormFieldName, createHandlers } from "@/lib/internal/index.js";
	import type { AnyZodObject } from "zod";

	type T = $$Generic<AnyZodObject>;
	type Path = $$Generic<FormFieldName<T>>;

	type $$Props = FieldProps<T, Path>;

	export let config: $$Props["config"];
	export let name: $$Props["name"];

	const { superFormStores, getFieldAttrs, actions, attrStore, hasValidation, hasDescription, ids } =
		createFormField<T, Path>(config, name);

	const { value, errors, constraints } = superFormStores;

	const setValue = (v: unknown) => {
		//@ts-expect-error - do we leave this as is, or do we want to force the type to match
		// the schema?
		// Pros: we don't have to deal with type coercin inside the update function and since we're runtime validating with zod anyways, do we really lose anything?
		value.set(v);
	};
	const handlers = createHandlers(setValue);

	$: inputAttrs = getFieldAttrs<typeof $value>({
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
