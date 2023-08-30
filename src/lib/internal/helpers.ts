import type { FormPathLeaves, UnwrapEffects, ZodValidation } from "sveltekit-superforms";
import type { AnyZodObject, z } from "zod";
import type { FieldAttrs, Form, FormFieldContext, FormStores } from "./types.js";
import { formFieldProxy } from "sveltekit-superforms/client";
import { setContext } from "svelte";

export const FORM_FIELD_CONTEXT = "FormField";
export const FORM_CONTROL_CONTEXT = "FormFieldControl";

export function createFormField<
	T extends ZodValidation<AnyZodObject>,
	Path extends FormPathLeaves<z.infer<UnwrapEffects<T>>>
>(
	form: Form<T>,
	name: Path
): {
	stores: FormStores<T, Path>;
	getFieldAttrs: <T>(val: T, errors: string[] | undefined) => FieldAttrs<T>;
} {
	const id = Math.random().toString(36).slice(2);
	const stores = formFieldProxy<T, Path>(form.form, name);
	const { errors, value } = stores;

	const context: FormFieldContext = {
		formItemId: id,
		formDescriptionId: `${id}-form-item-description`,
		formMessageId: `${id}-form-item-message`,
		name,
		errors,
		value
	};
	setContext(FORM_FIELD_CONTEXT, context);

	function getFieldAttrs<T>(val: T, errors: string[] | undefined) {
		return {
			"aria-invalid": errors ? true : false,
			"aria-describedby": !errors
				? context.formDescriptionId
				: `${context.formDescriptionId} ${context.formMessageId}`,
			"data-invalid": errors ? true : undefined,
			"data-valid": errors ? undefined : true,
			name,
			id: context.formItemId,
			value: val
		};
	}

	return {
		stores,
		getFieldAttrs
	};
}
