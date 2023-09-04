import type { FormPathLeaves, UnwrapEffects, ZodValidation } from "sveltekit-superforms";
import type { AnyZodObject, z } from "zod";
import type {
	ActionsObject,
	AttrStore,
	FieldAttrs,
	Form,
	FormFieldContext,
	FormStores,
	GetFieldAttrsProps,
	Handlers,
	SetValue
} from "./types.js";
import { formFieldProxy } from "sveltekit-superforms/client";
import { getContext, setContext } from "svelte";
import { writable, type Writable } from "svelte/store";
import {
	createCheckboxAction,
	createValidationAction,
	createDescriptionAction,
	createInputAction,
	createLabelAction,
	createRadioAction,
	createSelectAction,
	createTextareaAction,
	isHTMLInputElement,
	isHTMLTextareaElement,
	isHTMLSelectElement
} from "./index.js";

export const FORM_FIELD_CONTEXT = "FormField";
export const FORM_CONTROL_CONTEXT = "FormFieldControl";

type CreateFormFieldReturn<
	T extends ZodValidation<AnyZodObject>,
	Path extends FormPathLeaves<z.infer<UnwrapEffects<T>>>
> = {
	superFormStores: FormStores<T, Path>;
	getFieldAttrs: <T>(props: GetFieldAttrsProps<T>) => FieldAttrs<T>;
	actions: ActionsObject;
	ids: FormFieldContext["ids"];
	attrStore: AttrStore;
	hasValidation: Writable<boolean>;
	hasDescription: Writable<boolean>;
	handlers: Handlers;
	setValue: SetValue;
};

export function createFormField<
	T extends ZodValidation<AnyZodObject>,
	Path extends FormPathLeaves<z.infer<UnwrapEffects<T>>>
>(form: Form<T>, name: Path): CreateFormFieldReturn<T, Path> {
	const superFormStores = formFieldProxy<T, Path>(form.form, name);
	const attrStore: AttrStore = writable({});
	const hasValidation = writable(false);
	const hasDescription = writable(false);

	const { errors, value } = superFormStores;
	const ids = generateIds();

	const actions = {
		label: createLabelAction({
			htmlFor: ids.input
		}),
		description: createDescriptionAction({ id: ids.description, hasDescription }),
		validation: createValidationAction({
			id: ids.validation,
			hasValidation,
			attrs: {
				"aria-live": "assertive"
			}
		}),
		input: createInputAction({ id: ids.input, value, name, attrs: attrStore }),
		textarea: createTextareaAction({ id: ids.input, value, name, attrs: attrStore }),
		radio: createRadioAction({ id: ids.input, value, name, attrs: attrStore }),
		select: createSelectAction({ id: ids.input, value, name, attrs: attrStore }),
		checkbox: createCheckboxAction({ id: ids.input, value, name, attrs: attrStore })
	};

	const setValue = (v: unknown) => {
		//@ts-expect-error - do we leave this as is, or do we want to force the type to match the schema?
		// Pros: we don't have to deal with type narrowing inside the `setValue` function and we're runtime validating the type with zod anyways.
		// Cons: we're not forcing the type to match the schema so more issues could occur.
		value.set(v);
	};

	const handlers = createHandlers(setValue);

	const context: FormFieldContext = {
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
			"aria-required": constraints?.required ? true : false,
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

export function createHandlers(setValue: SetValue): Handlers {
	return {
		input: (e: Event) => {
			const target = e.target;
			if (!isHTMLInputElement(target) && !isHTMLTextareaElement(target)) return;
			setValue(target.value);
		},
		checkbox: (e: Event) => {
			const target = e.target;
			if (!isHTMLInputElement(target)) return;
			setValue(target.checked);
		},
		radio: (e: Event) => {
			const target = e.target;
			if (!isHTMLInputElement(target)) return;
			if (target.checked) setValue(target.value);
		},
		select: (e: Event) => {
			const target = e.target;
			if (!isHTMLSelectElement(target)) return;
			setValue(target.value);
		}
	};
}

function generateIds() {
	const input = Math.random().toString(36).slice(3);
	const description = `${input}-description`;
	const validation = `${input}-validation`;
	return {
		input,
		description,
		validation
	};
}

export function getCtx() {
	return getContext<FormFieldContext>(FORM_FIELD_CONTEXT);
}
