import type { FormPathLeaves, UnwrapEffects, ZodValidation } from "sveltekit-superforms";
import type { SuperForm, formFieldProxy } from "sveltekit-superforms/client";
import type { AnyZodObject, z } from "zod";
import type { SuperFormOptions, Validators as SuperFormValidators } from "./super-form-patch";

export type { SuperFormOptions };

export type Expand<T> = T extends object
	? T extends infer O
		? { [K in keyof O]: O[K] }
		: never
	: T;

export type ExpandDeep<T> = T extends object
	? T extends infer O
		? { [K in keyof O]: ExpandDeep<O[K]> }
		: never
	: T;

export type Form<T extends FormValidation> = {
	schema: T;
	form: SuperForm<T, unknown>;
};

export type Arrayable<T> = T | T[];

export type FormValidation = ZodValidation<AnyZodObject>;
export type FormFieldName<T extends FormValidation> = FormPathLeaves<z.infer<T>>;

export type FieldAttrs<T> = {
	"aria-invalid"?: boolean;
	"aria-describedby"?: string;
	name: string;
	id: string;
	value: T;
};

export type ControlFieldAttrs<T> = {
	control: Omit<FieldAttrs<T>, "name">;
	input: Pick<FieldAttrs<T>, "value" | "name">;
};

export type FormStores<
	T extends ZodValidation<AnyZodObject>,
	Path extends FormPathLeaves<z.infer<UnwrapEffects<T>>>
> = ReturnType<typeof formFieldProxy<T, Path>>;

export type FormInputEvent = Event & {
	currentTarget: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
};

export type FormCheckboxEvent = Event & {
	currentTarget: HTMLInputElement;
};

export type GetFieldAttrsProps<T> = {
	val: T;
	errors: string[] | undefined;
	constraints: Record<string, unknown> | undefined;
	hasValidation: boolean;
	hasDescription: boolean;
};

export type Validators<T> =
	| false
	| SuperFormValidators<UnwrapEffects<T>>
	| ZodValidation<UnwrapEffects<T>>;
