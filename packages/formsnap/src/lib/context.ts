import { getContext, hasContext, setContext } from 'svelte';
import type { Writable } from 'svelte/store';
import type { SuperForm } from 'sveltekit-superforms';

export type FormFieldContext<T extends Record<string, unknown>> = {
	/**
	 * The original form object returned from the load function.
	 */
	form: SuperForm<T>;
	validationId: Writable<string | undefined>;
	descriptionId: Writable<string | undefined>;
	name: Writable<keyof T>;
	errors: Writable<string[]>;
	constraints: Writable<Record<string, unknown>>;
	tainted: Writable<boolean>;
};

const FORM_FIELD = Symbol('FORM_FIELD_CTX');

export function setFormField<T extends Record<string, unknown>>(props: FormFieldContext<T>) {
	setContext(FORM_FIELD, props);
	return props;
}

/**
 * Gets context related to the current form field.
 *
 * @see https://formsnap.dev/docs/api-reference/get-form-field
 */
export function getFormField<T extends Record<string, unknown>>(): FormFieldContext<T> {
	if (!hasContext(FORM_FIELD)) {
		ctxError('Form.Field');
	}
	return getContext(FORM_FIELD);
}

export type FormItemContext = {
	id: Writable<string>;
	labelAttrs: Writable<Record<string, unknown>>;
	attrs: Writable<Record<string, unknown>>;
};

const FORM_ITEM = Symbol('FORM_ITEM_CTX');

export function setFormItem(props: FormItemContext) {
	setContext(FORM_ITEM, props);
	return props;
}

/**
 * Gets context related to the current form item.
 *
 * @see https://formsnap.dev/docs/api-reference/get-form-item
 */
export function getFormItem(): FormItemContext {
	if (!hasContext(FORM_ITEM)) {
		ctxError('Form.Item');
	}
	return getContext(FORM_ITEM);
}

function ctxError(ctx: string) {
	console.error(
		`Unable to find \`${ctx}\` context. Did you forget to wrap the component in a \`${ctx}\`?`
	);
}
