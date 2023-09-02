<script lang="ts">
	import { writable } from "svelte/store";
	import type { HTMLAttributes } from "svelte/elements";
	import {
		createFormField,
		type Form,
		type FormCheckboxEvent,
		type FormFieldName,
		type FormInputEvent
	} from "@/lib/internal/index.js";
	import type { AnyZodObject } from "zod";

	type T = $$Generic<AnyZodObject>;
	type Path = $$Generic<FormFieldName<T>>;

	type $$Props = {
		form: Form<T>;
		name: Path;
	} & HTMLAttributes<HTMLDivElement>;

	export let form: $$Props["form"];
	export let name: $$Props["name"];

	const hasValidation = writable(false);
	const hasDescription = writable(false);

	const {
		stores: { errors, value, constraints },
		getFieldAttrs
	} = createFormField<T, Path>(form, name, hasValidation, hasDescription);

	$: field = {
		attrs: getFieldAttrs($value, $errors, $constraints, $hasValidation, $hasDescription),
		updateValue: (v: unknown) => {
			//@ts-expect-error - do we leave this as is, or do we want to force the type to match
			// the schema?
			// Pros: we don't have to deal with type coercin inside the update function and since we're runtime validating with zod anyways, do we really lose anything?
			value.set(v);
		},
		handleInput: (e: FormInputEvent) => {
			field.updateValue(e.currentTarget.value);
		},
		handleChecked: (e: FormCheckboxEvent) => {
			field.updateValue(e.currentTarget.checked);
		},
		value
	};
</script>

<slot {field} />
