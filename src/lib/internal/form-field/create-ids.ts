import type { FieldIds } from "./types.js";

/**
 * Creates an object of ids for the form field's elements.
 *
 * Optionally pass in a `controlId` to use as the primary id
 * for the field/input.
 */
export function createIds(controlId?: string): FieldIds {
	const input = Math.random().toString(36).slice(3);
	const description = `${input}-description`;
	const validation = `${input}-validation`;
	return {
		input: controlId ? controlId : input,
		description,
		validation
	};
}
