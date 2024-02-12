import { getContext, setContext } from 'svelte';
import type { Writable } from 'svelte/store';
import type { SuperForm } from 'sveltekit-superforms';

export type FieldIdObj = {
	field: string;
	validation?: string;
	description?: string;
};

const FORM_FIELD = Symbol('formFieldCtx');

export type FormFieldCtx<T extends Record<string, unknown>> = {
	form: SuperForm<T>;
	ids: Writable<FieldIdObj>;
	name: Writable<keyof T>;
};

export function setFormFieldCtx<T extends Record<string, unknown>>(props: FormFieldCtx<T>) {
	setContext(FORM_FIELD, props);
	return props;
}

export function getFormFieldCtx<T extends Record<string, unknown>>(): FormFieldCtx<T> {
	return getContext(FORM_FIELD);
}
