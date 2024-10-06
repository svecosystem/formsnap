import { type ReadableBoxedValues, type WithRefProps, useRefById } from "svelte-toolbelt";
import { fromStore } from "svelte/store";
import type { FormPath, InputConstraint, InputConstraints } from "sveltekit-superforms";
import type { FormPathArrays, TaintedFields, ValidationErrors } from "sveltekit-superforms/client";
import { getContext, setContext } from "svelte";
import { extractErrorArray } from "./internal/utils/errors.js";
import { getValueAtPath } from "./internal/utils/path.js";
import {
	getAriaDescribedBy,
	getAriaInvalid,
	getAriaRequired,
	getDataFsError,
} from "./internal/utils/attributes.js";
import type { PrimitiveFromIndex } from "./internal/types.js";
import type { ControlAttrs, DescriptionAttrs } from "./attrs.types.js";
import type { FsSuperForm } from "./components/types.js";

type SvelteBox<T> = {
	current: T;
};

type FieldState<T extends Record<string, unknown>, U extends FormPath<T>> =
	| FormFieldState<T, U>
	| ElementFieldState<T, U>;

type FormFieldStateProps<
	T extends Record<string, unknown>,
	U extends FormPath<T>,
	// eslint-disable-next-line ts/no-explicit-any
	M = any,
> = ReadableBoxedValues<{
	form: FsSuperForm<T, M>;
	name: U;
}>;

class FormFieldState<T extends Record<string, unknown>, U extends FormPath<T>> {
	#form: FormFieldStateProps<T, U>["form"];
	#name: FormFieldStateProps<T, U>["name"];
	#formErrors: SvelteBox<ValidationErrors<T>>;
	#formConstraints: SvelteBox<InputConstraints<T>>;
	#formTainted: SvelteBox<TaintedFields<T> | undefined>;
	#formData: SvelteBox<T>;

	name = $derived.by(() => this.#name.current);
	errors = $derived.by(() =>
		extractErrorArray(getValueAtPath(this.#name.current, this.#formErrors.current))
	);
	constraints = $derived.by(
		() => getValueAtPath(this.#name.current, this.#formConstraints.current) ?? {}
	);
	tainted = $derived.by(() =>
		this.#formTainted.current
			? getValueAtPath(this.#name.current, this.#formTainted.current) === true
			: false
	);
	errorNode = $state<HTMLElement | null>(null);
	descriptionNode = $state<HTMLElement | null>(null);

	constructor(props: FormFieldStateProps<T, U>) {
		this.#form = props.form;
		this.#name = props.name;
		this.#formErrors = fromStore(props.form.current.errors);
		this.#formConstraints = fromStore(props.form.current.constraints);
		this.#formTainted = fromStore(props.form.current.tainted);
		this.#formData = fromStore(props.form.current.form);
	}

	snippetProps = $derived.by(
		() =>
			({
				value: this.#formData.current[this.#name.current],
				errors: this.errors,
				tainted: this.tainted,
				constraints:
					// @ts-expect-error - this type is wonky
					this.#formConstraints.current[
						// eslint-disable-next-line ts/no-explicit-any
						this.#name.current as any
					] ?? ({} as InputConstraint),
			}) as const
	);
}

type ElementFieldStateProps<
	T extends Record<string, unknown>,
	U extends FormPath<T>,
	// eslint-disable-next-line ts/no-explicit-any
	M = any,
> = ReadableBoxedValues<{
	form: FsSuperForm<T, M>;
	name: U;
}>;

class ElementFieldState<T extends Record<string, unknown>, U extends FormPath<T>> {
	#form: ElementFieldStateProps<T, U>["form"];
	#name: ElementFieldStateProps<T, U>["name"];
	#formErrors: SvelteBox<ValidationErrors<T>>;
	#formConstraints: SvelteBox<InputConstraints<T>>;
	#formTainted: SvelteBox<TaintedFields<T> | undefined>;
	#formData: SvelteBox<T>;
	#field: FieldState<T, U>;
	name = $derived.by(() => {
		const [path] = splitArrayPath<T>(this.#name.current);
		return path as U;
	});
	errors = $derived.by(() =>
		extractErrorArray(getValueAtPath(this.#name.current, this.#formErrors.current))
	);
	constraints = $derived.by(
		() => getValueAtPath(this.#name.current, this.#formConstraints.current) ?? {}
	);
	tainted = $derived.by(() =>
		this.#formTainted.current
			? getValueAtPath(this.#name.current, this.#formTainted.current) === true
			: false
	);
	errorNode = $state<HTMLElement | null>(null);
	#descriptionNode = $state<HTMLElement | null>(null);
	// fall back to the parent field's description node if one for
	// this specific element doesn't exist.
	descriptionNode = $derived.by(() => {
		if (this.#descriptionNode) return this.#descriptionNode;
		if (this.#field.descriptionNode) return this.#field.descriptionNode;
		return null;
	}) as HTMLElement | null;
	value = $derived.by(() => {
		return getValueAtPath(this.#name.current, this.#formData.current) as PrimitiveFromIndex<
			T,
			U
		>;
	});

	constructor(props: ElementFieldStateProps<T, U>, field: FieldState<T, U>) {
		this.#form = props.form;
		this.#name = props.name;
		this.#formErrors = fromStore(props.form.current.errors);
		this.#formConstraints = fromStore(props.form.current.constraints);
		this.#formTainted = fromStore(props.form.current.tainted);
		this.#formData = fromStore(props.form.current.form);
		this.#field = field;
	}

	snippetProps = $derived.by(
		() =>
			({
				value: this.#formData.current[this.#name.current],
				errors: this.errors,
				tainted: this.tainted,
				constraints:
					// @ts-expect-error - this type is wonky
					this.#formConstraints.current[
						// eslint-disable-next-line ts/no-explicit-any
						this.#name.current as any
					] ?? ({} as InputConstraint),
			}) as const
	);
}

type FieldErrorsStateProps = WithRefProps;

class FieldErrorsState<T extends Record<string, unknown>, U extends FormPath<T>> {
	#ref: FieldErrorsStateProps["ref"];
	#id: FieldErrorsStateProps["id"];
	field: FieldState<T, U>;
	#errorAttr = $derived.by(() => getDataFsError(this.field.errors));

	constructor(props: FieldErrorsStateProps, field: FieldState<T, U>) {
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

	snippetProps = $derived.by(() => ({
		errors: this.field.errors,
		errorProps: this.errorProps,
	}));

	fieldErrorsProps = $derived.by(
		() =>
			({
				id: this.#id.current,
				"data-fs-error": this.#errorAttr,
				"data-fs-field-errors": "",
				"aria-live": "assertive",
			}) as const
	);

	errorProps = $derived.by(
		() =>
			({
				"data-fs-field-error": "",
				"data-fs-error": this.#errorAttr,
			}) as const
	);
}

type DescriptionStateProps = WithRefProps;

class DescriptionState {
	#ref: DescriptionStateProps["ref"];
	#id: DescriptionStateProps["id"];
	field: FieldState<Record<string, unknown>, string>;

	constructor(props: DescriptionStateProps, field: FieldState<Record<string, unknown>, string>) {
		this.#ref = props.ref;
		this.#id = props.id;
		this.field = field;

		useRefById({
			id: this.#id,
			ref: this.#ref,
			onRefChange: (node) => {
				this.field.descriptionNode = node;
			},
		});
	}

	props = $derived.by(
		() =>
			({
				id: this.#id.current,
				"data-fs-error": getDataFsError(this.field.errors),
				"data-fs-description": "",
			}) as const satisfies DescriptionAttrs
	);
}

type ControlStateProps = ReadableBoxedValues<{
	id: string;
}>;

class ControlState {
	id: ControlStateProps["id"];
	field: FieldState<Record<string, unknown>, string>;

	constructor(props: ControlStateProps, field: FieldState<Record<string, unknown>, string>) {
		this.id = props.id;
		this.field = field;
	}

	props = $derived.by(
		() =>
			({
				id: this.id.current,
				name: this.field.name,
				"data-fs-error": getDataFsError(this.field.errors),
				"aria-describedby": getAriaDescribedBy({
					fieldErrorsId: this.field.errorNode?.id,
					descriptionId: this.field.descriptionNode?.id,
					errors: this.field.errors,
				}),
				"aria-invalid": getAriaInvalid(this.field.errors),
				"aria-required": getAriaRequired(this.field.constraints),
				"data-fs-control": "",
			}) satisfies ControlAttrs
	);
}

type LabelStateProps = WithRefProps;

class LabelState {
	#ref: LabelStateProps["ref"];
	#id: LabelStateProps["id"];
	control: ControlState;

	constructor(props: LabelStateProps, control: ControlState) {
		this.#ref = props.ref;
		this.#id = props.id;
		this.control = control;

		useRefById({
			id: this.#id,
			ref: this.#ref,
		});
	}

	props = $derived.by(
		() =>
			({
				id: this.#id.current,
				"data-fs-label": "",
				"data-fs-error": getDataFsError(this.control.field.errors),
				for: this.control.id.current,
			}) as const
	);
}

type LegendStateProps = WithRefProps;

class LegendState {
	#ref: LegendStateProps["ref"];
	#id: LegendStateProps["id"];
	field: FieldState<Record<string, unknown>, string>;

	constructor(props: LegendStateProps, field: FieldState<Record<string, unknown>, string>) {
		this.#ref = props.ref;
		this.#id = props.id;
		this.field = field;

		useRefById({
			id: this.#id,
			ref: this.#ref,
		});
	}

	props = $derived.by(
		() =>
			({
				id: this.#id.current,
				"data-fs-error": getDataFsError(this.field.errors),
				"data-fs-legend": "",
			}) as const
	);
}

const FORM_FIELD_CTX = Symbol.for("formsnap.form-field");
const FORM_CONTROL_CTX = Symbol.for("formsnap.form-control");

export function useFormField<T extends Record<string, unknown>, U extends FormPath<T>>(
	props: FormFieldStateProps<T, U>
) {
	return setContext(FORM_FIELD_CTX, new FormFieldState(props));
}

export function useElementField<T extends Record<string, unknown>, U extends FormPath<T>>(
	props: ElementFieldStateProps<T, U>
) {
	const formField = getFormField<T, U>();
	return setContext(FORM_FIELD_CTX, new ElementFieldState(props, formField));
}

export function getFormField<
	T extends Record<string, unknown> = Record<string, unknown>,
	U extends FormPath<T> = FormPath<T>,
>() {
	return getContext<FieldState<T, U>>(FORM_FIELD_CTX);
}

export function useFieldErrors<
	T extends Record<string, unknown> = Record<string, unknown>,
	U extends FormPath<T> = FormPath<T>,
>(props: FieldErrorsStateProps) {
	return new FieldErrorsState(props, getFormField<T, U>());
}

export function useDescription(props: DescriptionStateProps) {
	return new DescriptionState(props, getFormField());
}

export function useControl(props: ControlStateProps) {
	return setContext(FORM_CONTROL_CTX, new ControlState(props, getFormField()));
}

export function getFormControl() {
	return getContext<ControlState>(FORM_CONTROL_CTX);
}

export function useLabel(props: LabelStateProps) {
	return new LabelState(props, getFormControl());
}

export function useLegend(props: LegendStateProps) {
	return new LegendState(props, getFormField());
}

// takes a string like "urls[0]" and returns ["urls", "0"]
// so we can access the specific array index properties
// since datatype: json is not supported with regular form
// submission, this should be fine
function splitArrayPath<T extends Record<string, unknown>>(name: string) {
	const [path, index] = name.split(/[[\]]/);
	return [path, index] as [FormPathArrays<T>, string];
}
