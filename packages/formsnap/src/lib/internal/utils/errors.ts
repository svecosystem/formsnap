import type { ValidationErrors } from "sveltekit-superforms";

/**
 * Extracts the error array from a `ValidationErrors` object.
 */
export function extractErrorArray<T extends Record<string, unknown>>(
	errors: ValidationErrors<T> | undefined
): string[] {
	if (Array.isArray(errors)) return [...errors];
	if (typeof errors === "object" && "_errors" in errors) {
		if (errors._errors !== undefined) return [...errors._errors];
	}

	return [];
}
