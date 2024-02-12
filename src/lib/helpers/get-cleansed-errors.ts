import type { SuperformsValidationError } from "../internal";

export function getCleansedErrors(errors: SuperformsValidationError): string[] | undefined {
	return Array.isArray(errors) ? errors : errors?._errors ? errors._errors : undefined;
}
