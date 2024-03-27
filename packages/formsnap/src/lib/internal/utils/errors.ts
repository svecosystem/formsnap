import type { ValidationErrors } from 'sveltekit-superforms';

/**
 * Extracts the error array from a `ValidationErrors` object.
 */
export function extractErrorArray<T extends Record<string, unknown>>(
	errors: ValidationErrors<T> | undefined
): string[] {
	if (Array.isArray(errors)) {
		console.log(errors);
		return errors;
	}

	if (typeof errors === 'object' && '_errors' in errors) {
		if (errors._errors !== undefined) {
			console.log(errors._errors);
			return errors._errors;
		}
	}

	console.log([]);
	return [];
}
