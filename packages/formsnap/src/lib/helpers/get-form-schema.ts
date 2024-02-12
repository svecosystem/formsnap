import { getContext } from "svelte";
import type { ZodValidation } from "sveltekit-superforms";
import type { AnyZodObject } from "zod";

export const FORM_FIELD_SCHEMA = "FormFieldSchema";

/**
 * Get the form schema from the current component.
 * Must be called within component initialization that is
 * a descendant of a Form component.
 */
export function getFormSchema() {
	return getContext<ZodValidation<AnyZodObject>>(FORM_FIELD_SCHEMA);
}
