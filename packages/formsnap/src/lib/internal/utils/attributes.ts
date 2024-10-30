/**
 * Parameters for the `getAriaDescribedBy` function.
 */
type AriaDescribedByParams = {
	/** The ID of the validation element for the field. */
	fieldErrorsId: string | undefined;

	/** The ID of the description element for the field. */
	descriptionId: string | undefined;

	/** The current validation errors for the field. */
	errors: string[];
};

/**
 * Retrieves the appropriate `aria-describedby` value for a form control
 * given the existence of a description and/or validation message.
 */
export function getAriaDescribedBy({
	fieldErrorsId = undefined,
	descriptionId = undefined,
	errors,
}: AriaDescribedByParams) {
	let describedBy = "";

	if (descriptionId) {
		describedBy += `${descriptionId} `;
	}
	if (errors.length && fieldErrorsId) {
		describedBy += fieldErrorsId;
	}
	return describedBy ? describedBy.trim() : undefined;
}

/**
 * Retrieves the appropriate `aria-required` attribute value for a form
 * control given the constraints for the field.
 */
export function getAriaRequired(constraints: Record<string, unknown>) {
	if (!("required" in constraints)) return undefined;
	return constraints.required ? ("true" as const) : undefined;
}

/**
 * Retrieves the appropriate `aria-invalid` attribute value for a form
 * control given the current validation errors.
 */
export function getAriaInvalid(errors: string[] | undefined) {
	return errors && errors.length ? "true" : undefined;
}

/**
 * Retrieves the appropriate `data-fs-error` value for an element
 * given the current validation errors.
 */
export function getDataFsError(errors: string[] | undefined): string | undefined {
	return errors && errors.length ? "" : undefined;
}
