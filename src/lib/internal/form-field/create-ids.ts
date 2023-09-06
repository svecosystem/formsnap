import type { FieldIds } from "./types.js";

/**
 * Creates an object of ids for the form field's elements.
 */
export function createIds(): FieldIds {
	const input = Math.random().toString(36).slice(3);
	const description = `${input}-description`;
	const validation = `${input}-validation`;
	return {
		input,
		description,
		validation
	};
}
