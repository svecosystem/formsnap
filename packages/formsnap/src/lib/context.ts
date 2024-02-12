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

export function getFormField<T extends Record<string, unknown>>(
	onError?: () => void
): FormFieldContext<T> {
	if (onError && !hasContext(FORM_FIELD)) {
		onError();
	}
	return getContext(FORM_FIELD);
}

export type FormItemContext = {
	id: Writable<string>;
};

const FORM_ITEM = Symbol('FORM_ITEM_CTX');

export function setFormItem(props: FormItemContext) {
	setContext(FORM_ITEM, props);
	return props;
}

export function getFormItem(onError?: () => void): FormItemContext {
	if (onError && !hasContext(FORM_ITEM)) {
		onError();
	}
	return getContext(FORM_ITEM);
}
