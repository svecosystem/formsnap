import type { FormPathLeaves, UnwrapEffects, ZodValidation } from "sveltekit-superforms";
import type { AnyZodObject, z } from "zod";
import type { FieldAttrs, Form, FormFieldContext, FormStores } from "./types.js";
import { formFieldProxy } from "sveltekit-superforms/client";
import { setContext } from "svelte";
import type { StoresValues, Writable } from "svelte/store";

export const FORM_FIELD_CONTEXT = "FormField";
export const FORM_CONTROL_CONTEXT = "FormFieldControl";

export function createFormField<
	T extends ZodValidation<AnyZodObject>,
	Path extends FormPathLeaves<z.infer<UnwrapEffects<T>>>
>(
	form: Form<T>,
	name: Path,
	hasValidation: Writable<boolean>,
	hasDescription: Writable<boolean>
): {
	stores: FormStores<T, Path>;
	getFieldAttrs: <T>(
		val: T,
		errors: string[] | undefined,
		constraints: Record<PropertyKey, unknown> | undefined,
		hasValidation: boolean,
		hasDescription: boolean
	) => FieldAttrs<T>;
} {
	const id = Math.random().toString(36).slice(2);
	const stores = formFieldProxy<T, Path>(form.form, name);
	const { errors, value, constraints } = stores;

	const context: FormFieldContext = {
		formItemId: id,
		formDescriptionId: `${id}-form-item-description`,
		formValidationId: `${id}-form-item-validation`,
		name,
		errors,
		value,
		hasValidation,
		hasDescription
	};
	setContext(FORM_FIELD_CONTEXT, context);

	type Constraints = StoresValues<typeof constraints>;

	function getFieldAttrs<T>(
		val: T,
		errors: string[] | undefined,
		constraints: Constraints,
		hasValidation: boolean,
		hasDescription: boolean
	) {
		const describedBy = errors
			? `${hasValidation ? context.formValidationId : ""} ${
					hasDescription ? context.formDescriptionId : ""
			  }`
			: context.formDescriptionId
			? context.formDescriptionId
			: undefined;

		return {
			"aria-invalid": errors ? true : undefined,
			"aria-describedby": describedBy,
			"aria-required": constraints?.required ? true : false,
			"data-invalid": errors ? true : undefined,
			"data-valid": errors ? undefined : true,
			name,
			id: context.formItemId,
			value: val
		} as const;
	}

	return {
		stores,
		getFieldAttrs
	};
}
