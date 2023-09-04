import type { Action } from "svelte/action";
import type { Writable } from "svelte/store";
import type { FormPathLeaves, UnwrapEffects, ZodValidation } from "sveltekit-superforms";
import type { SuperForm, formFieldProxy } from "sveltekit-superforms/client";
import type { AnyZodObject, z } from "zod";

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

export type Form<T extends Validation> = {
	schema: T;
	form: SuperForm<T, unknown>;
};
export type Arrayable<T> = T | T[];

export type FormValidation = Validation;
export type FormFieldName<T extends Validation> = FormPathLeaves<z.infer<T>>;

export type FormFieldContext = {
	name: string;
	ids: {
		input: string;
		description: string;
		validation: string;
	};
	errors: Writable<string[] | undefined>;
	value: Writable<unknown>;
	hasDescription: Writable<boolean>;
	hasValidation: Writable<boolean>;
	attrStore: AttrStore;
	actions: ActionsObject;
	handlers: Handlers;
	setValue: SetValue;
};

export type AttrStore = Writable<Record<string, unknown>>;

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

export type ActionsObject = {
	checkbox: Action<HTMLInputElement>;
	description: Action<HTMLElement>;
	input: Action<HTMLInputElement>;
	label: Action<HTMLLabelElement>;
	radio: Action<HTMLInputElement>;
	select: Action<HTMLSelectElement>;
	textarea: Action<HTMLTextAreaElement>;
	validation: Action<HTMLElement>;
};

export type Validation = ZodValidation<AnyZodObject>;

export type GetFieldAttrsProps<T> = {
	val: T;
	errors: string[] | undefined;
	constraints: Record<string, unknown> | undefined;
	hasValidation: boolean;
	hasDescription: boolean;
};

/**
 * Sets the value of a field store to the given value.
 */
export type SetValue = (value: unknown) => void;

/**
 * An object of helper functions for setting the value of a field store
 * using `on:input` and `on:change` for native form elements and their
 * events.
 */
export type Handlers = {
	input: (e: Event) => void;
	checkbox: (e: Event) => void;
	radio: (e: Event) => void;
	select: (e: Event) => void;
};
