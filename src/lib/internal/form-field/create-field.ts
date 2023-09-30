import type { FormPathLeaves, UnwrapEffects, ZodValidation } from "sveltekit-superforms";
import type { AnyZodObject, z } from "zod";
import { fieldProxy, formFieldProxy } from "sveltekit-superforms/client";
import { setContext } from "svelte";
import { writable, type Writable } from "svelte/store";
import { createFieldActions, createFieldHandlers, createIds } from "@/lib/internal/index.js";
import type { Form, GetFieldAttrsProps } from "@/lib/internal/index.js";
import type { CreateFormFieldReturn, FieldAttrStore, FieldContext } from "./types.js";

export const FORM_FIELD_CONTEXT = "FormField";

export function createFormField<
	T extends ZodValidation<AnyZodObject>,
	Path extends FormPathLeaves<z.infer<UnwrapEffects<T>>>
>(form: Form<T>, name: Path): CreateFormFieldReturn<T, Path> {
	const superFormStores = formFieldProxy<T, Path>(form.form, name);
	const attrStore: FieldAttrStore = writable({});
	const hasValidation = writable(false);
	const hasDescription = writable(false);

	const { errors, value } = superFormStores;
	const ids = createIds();

	const actions = createFieldActions({
		ids,
		attrs: attrStore,
		hasValidation,
		hasDescription,
		value,
		name
	});

	const setValue = (v: unknown) => {
		//@ts-expect-error - do we leave this as is, or do we want to force the type to match the schema?
		// Pros: we don't have to deal with type narrowing inside the `setValue` function, and we're runtime validating the type with zod anyways.
		// Cons: we're not forcing the type to match the schema so more issues could occur.
		value.set(v);
	};

	const handlers = createFieldHandlers(setValue, value);

	const context: FieldContext = {
		ids,
		name,
		errors,
		value,
		hasValidation,
		hasDescription,
		attrStore,
		actions,
		setValue,
		handlers
	};

	setContext(FORM_FIELD_CONTEXT, context);

	function getFieldAttrs<T>(props: GetFieldAttrsProps<T>) {
		const { val, errors, constraints, hasValidation, hasDescription } = props;
		const describedBy = errors
			? `${hasValidation ? ids.validation : ""} ${hasDescription ? ids.description : ""}`
			: ids.description
			? ids.description
			: undefined;

		return {
			"aria-invalid": errors ? true : undefined,
			"aria-describedby": describedBy,
			"aria-required": !!constraints?.required,
			"data-invalid": errors ? true : undefined,
			"data-valid": errors ? undefined : true,
			name,
			id: ids.input,
			value: val
		} as const;
	}

	return {
		superFormStores,
		getFieldAttrs,
		actions,
		ids,
		attrStore,
		hasDescription,
		hasValidation,
		handlers,
		setValue
	};
}

export function createFormFieldMulti<
	T extends ZodValidation<AnyZodObject>,
	Path extends (keyof z.infer<T>)[][number]
>(form: Form<T>, name: Path) {
	const { form: formStore, errors: formErrors, constraints: formConstraints } = form.form;

	// @ts-expect-error - temp ignore until I can figure out how to type this elegantly
	const value = fieldProxy(formStore, name);
	// @ts-expect-error - temp ignore until I can figure out how to type this elegantly
	const errors: Writable<string[] | undefined> = fieldProxy(formErrors, `${name}._errors`);
	//@ts-expect-error - temp ignore until I can figure out how to type this elegantly
	const constraints = fieldProxy(formConstraints, `${name}._constraints`);

	const superFormStores = {
		value,
		errors,
		constraints,
		path: name
	};

	const attrStore: FieldAttrStore = writable({});
	const hasValidation = writable(false);
	const hasDescription = writable(false);

	// const { errors, value } = superFormStores;
	const ids = createIds();

	const actions = createFieldActions({
		ids,
		attrs: attrStore,
		hasValidation,
		hasDescription,
		value,
		name: name as string
	});

	const setValue = (v: unknown) => {
		//@ts-expect-error - do we leave this as is, or do we want to force the type to match the schema?
		// Pros: we don't have to deal with type narrowing inside the `setValue` function, and we're runtime validating the type with zod anyways.
		// Cons: we're not forcing the type to match the schema so more issues could occur.
		value.set(v);
	};

	const handlers = createFieldHandlers(setValue, value);

	const context: FieldContext = {
		ids,
		name: name as string,
		errors,
		value,
		hasValidation,
		hasDescription,
		attrStore,
		actions,
		setValue,
		handlers
	};

	setContext(FORM_FIELD_CONTEXT, context);

	function getFieldAttrs<T>(props: GetFieldAttrsProps<T>) {
		const { val, errors, constraints, hasValidation, hasDescription } = props;
		const describedBy = errors
			? `${hasValidation ? ids.validation : ""} ${hasDescription ? ids.description : ""}`
			: ids.description
			? ids.description
			: undefined;

		return {
			"aria-invalid": errors ? true : undefined,
			"aria-describedby": describedBy,
			"aria-required": !!constraints?.required,
			"data-invalid": errors ? true : undefined,
			"data-valid": errors ? undefined : true,
			name,
			id: ids.input,
			value: val
		} as const;
	}

	return {
		superFormStores,
		getFieldAttrs,
		actions,
		ids,
		attrStore,
		hasDescription,
		hasValidation,
		handlers,
		setValue
	};
}
