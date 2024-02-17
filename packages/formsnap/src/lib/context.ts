import { getContext, hasContext, setContext } from 'svelte';
import type { Writable } from 'svelte/store';
import type { FormPath, SuperForm } from 'sveltekit-superforms';
import type { ControlAttrs, LabelAttrs } from './attrs.types.js';

/**
 * Context for the current form field.
 * The type argument `T` represents the the shape of the form object,
 * and `U` represents the path to the field in the form object.
 *
 * @see https://formsnap.dev/docs/functions/get-form-field
 */
export type FormFieldContext<T extends Record<string, unknown>, U extends FormPath<T>> = {
	/** The original form object returned from the load function. */
	form: SuperForm<T>;

	/** A store containing the ID of the field errors container for the field. */
	fieldErrorsId: Writable<string>;

	/** A store containing the ID of the description element for the field. */
	descriptionId: Writable<string>;

	/** A store containing the name of the field. */
	name: Writable<U>;

	/** A store containing the current validations errors for the field. */
	errors: Writable<string[]>;

	/** A store containing the constraints (if any) for the field. */
	constraints: Writable<Record<string, unknown>>;

	/** A store containing the tainted state of the field. */
	tainted: Writable<boolean>;
};

const FORM_FIELD = Symbol('FORM_FIELD_CTX');

export function setFormField<T extends Record<string, unknown>, U extends FormPath<T>>(
	props: FormFieldContext<T, U>
) {
	setContext(FORM_FIELD, props);
	return props;
}

/**
 * Gets context for the closest form field in the component tree.
 *
 * @see https://formsnap.dev/docs/functions/get-form-field
 */
export function getFormField<
	T extends Record<string, unknown>,
	U extends FormPath<T>
>(): FormFieldContext<T, U> {
	if (!hasContext(FORM_FIELD)) {
		ctxError('Form.Field');
	}
	return getContext(FORM_FIELD);
}

/**
 * Context for the current form item.
 *
 * @see https://formsnap.dev/docs/functions/get-form-item
 */
export type FormControlContext = {
	/** A store containing the ID of the form control. */
	id: Writable<string>;

	/** A store containing the attributes for the label element. */
	labelAttrs: Writable<LabelAttrs>;

	/** A store containing the attributes for the control element. */
	attrs: Writable<ControlAttrs>;
};

const FORM_CONTROL = Symbol('FORM_CONTROL_CTX');

export function setFormControl(props: FormControlContext) {
	setContext(FORM_CONTROL, props);
	return props;
}

/**
 * Gets context for the closest form item in the component tree.
 *
 * @see https://formsnap.dev/docs/functions/get-form-item
 */
export function getFormControl(): FormControlContext {
	if (!hasContext(FORM_CONTROL)) {
		ctxError('<Control />');
	}
	return getContext(FORM_CONTROL);
}

function ctxError(ctx: string) {
	console.error(
		`Unable to find \`${ctx}\` context. Did you forget to wrap the component in a \`${ctx}\`?`
	);
}
