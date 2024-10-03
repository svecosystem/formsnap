import { type ReadableBoxedValues, type WithRefProps, useRefById } from "svelte-toolbelt";
import { fromStore } from "svelte/store";
import type { FormPath, InputConstraint, InputConstraints, SuperForm } from "sveltekit-superforms";
import type { TaintedFields, ValidationErrors } from "sveltekit-superforms/client";
import { getContext, setContext } from "svelte";
import { extractErrorArray } from "./internal/utils/errors.js";
import { getValueAtPath } from "./internal/utils/path.js";
import { getDataFsError } from "./internal/utils/attributes.js";

type SvelteBox<T> = {
	current: T;
};

type FormFieldStateProps<
	T extends Record<string, unknown>,
	U extends FormPath<T>,
> = ReadableBoxedValues<{
	form: SuperForm<T>;
	name: U;
}>;

class FormFieldState<T extends Record<string, unknown>, U extends FormPath<T>> {
	form: FormFieldStateProps<T, U>["form"];
	name: FormFieldStateProps<T, U>["name"];
	formErrors: SvelteBox<ValidationErrors<T>>;
	formConstraints: SvelteBox<InputConstraints<T>>;
	formTainted: SvelteBox<TaintedFields<T> | undefined>;
	formData: SvelteBox<T>;
	errors = $derived.by(() =>
		extractErrorArray(getValueAtPath(this.name.current, this.formErrors.current))
	);
	constraints = $derived.by(
		() => getValueAtPath(this.name.current, this.formConstraints.current) ?? {}
	);
	tainted = $derived.by(() =>
		this.formTainted.current
			? getValueAtPath(this.name.current, this.formTainted.current) === true
			: false
	);
	errorNode = $state<HTMLElement | null>(null);

	constructor(props: FormFieldStateProps<T, U>) {
		this.form = props.form;
		this.name = props.name;
		this.formErrors = fromStore(props.form.current.errors);
		this.formConstraints = fromStore(props.form.current.constraints);
		this.formTainted = fromStore(props.form.current.tainted);
		this.formData = fromStore(props.form.current.form);
	}

	snippetProps = $derived.by(
		() =>
			({
				value: this.formData.current[this.name.current],
				errors: this.errors,
				tainted: this.tainted,
				constraints:
					// @ts-expect-error - this type is wonky
					this.formConstraints.current[
						// eslint-disable-next-line ts/no-explicit-any
						this.name.current as any
					] ?? ({} as InputConstraint),
			}) as const
	);

	createFieldErrors(props: FieldErrorsStateProps) {
		return new FieldErrorsState(props, this);
	}
}

type FieldErrorsStateProps = WithRefProps;

class FieldErrorsState<T extends Record<string, unknown>, U extends FormPath<T>> {
	#ref: FieldErrorsStateProps["ref"];
	#id: FieldErrorsStateProps["id"];
	field: FormFieldState<T, U>;
	#errorAttr = $derived.by(() => getDataFsError(this.field.errors));

	constructor(props: FieldErrorsStateProps, field: FormFieldState<T, U>) {
		this.#ref = props.ref;
		this.#id = props.id;
		this.field = field;

		useRefById({
			id: this.#id,
			ref: this.#ref,
			onRefChange: (node) => {
				this.field.errorNode = node;
			},
		});
	}

	fieldErrorsProps = $derived.by(
		() =>
			({
				id: this.#id.current,
				"data-fs-error": this.#errorAttr,
				"data-fs-field-errors": "",
				"aria-live": "assertive",
			}) as const
	);

	errorProps = $derived.by(() => ({
		"data-fs-field-error": "",
		"data-fs-error": this.#errorAttr,
	}));
}

const FORM_FIELD_CTX = Symbol.for("formsnap.form-field-ctx");

export function useFormField<T extends Record<string, unknown>, U extends FormPath<T>>(
	props: FormFieldStateProps<T, U>
) {
	return setContext(FORM_FIELD_CTX, new FormFieldState(props));
}

function getFormField<T extends Record<string, unknown>, U extends FormPath<T>>() {
	return getContext<FormFieldState<T, U>>(FORM_FIELD_CTX);
}

export function useFieldErrors<
	T extends Record<string, unknown> = Record<string, unknown>,
	U extends FormPath<T> = FormPath<T>,
>(props: FieldErrorsStateProps) {
	return getFormField<T, U>().createFieldErrors(props);
}
