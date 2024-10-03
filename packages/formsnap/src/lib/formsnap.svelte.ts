import type { ReadableBoxedValues, WithRefProps, WritableBox } from "svelte-toolbelt";
import { fromStore } from "svelte/store";
import type { FormPath, SuperForm } from "sveltekit-superforms";
import type { SuperFormData, TaintedFields, ValidationErrors } from "sveltekit-superforms/client";
import { extractErrorArray } from "./internal/utils/errors.js";
import { getValueAtPath } from "./internal/utils/path.js";

type SvelteBox<T> = {
	current: T;
};

type FormFieldStateProps<T extends Record<string, unknown>, U extends FormPath<T>> = WithRefProps &
	ReadableBoxedValues<{
		form: SuperForm<T>;
		name: U;
		errors: string[];
		constraints: Record<string, unknown>;
		tainted: boolean;
	}>;

class FormFieldState<T extends Record<string, unknown>, U extends FormPath<T>> {
	form: FormFieldStateProps<T, U>["form"];
	name: FormFieldStateProps<T, U>["name"];
	formErrors: SvelteBox<ValidationErrors<T>>;
	formConstraints: SvelteBox<Record<string, unknown>>;
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
				constraints: this.formConstraints.current[this.name.current],
			}) as const
	);
}
