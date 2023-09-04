/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Form, FormFieldName, Validation } from "@/lib/internal/types.js";
import type {
	HTMLAttributes,
	HTMLFormAttributes,
	HTMLInputAttributes,
	HTMLLabelAttributes,
	HTMLSelectAttributes,
	HTMLTextareaAttributes
} from "svelte/elements";
import type { SuperValidated, UnwrapEffects } from "sveltekit-superforms";
import type { FormOptions as SuperFormOptions } from "sveltekit-superforms/client";
import type { AnyZodObject } from "zod";

export type Options<T extends Validation = Validation, M = any> = SuperFormOptions<
	UnwrapEffects<T>,
	M
>;

export type HelperEventHandler = (e: Event) => void;

export type FormProps<T extends Validation = Validation, M = any> = {
	schema: T;
	options?: Options<T, M>;
	form: SuperValidated<T, M>;
	debug?: boolean;
	asChild?: boolean;
} & HTMLFormAttributes;

export type FieldProps<T extends AnyZodObject = AnyZodObject, Path = FormFieldName<T>> = {
	config: Form<T>;
	name: Path;
};

export type InputProps = HTMLInputAttributes;
export type CheckboxProps = HTMLInputAttributes;

export type DescriptionProps = {
	/**
	 * The tag to use for the description element.
	 *
	 * @default "p"
	 */
	tag?: "string";
} & HTMLAttributes<HTMLElement>;

export type ValidationProps = {
	/**
	 * The tag to use for the validation message element.
	 *
	 * @default "p"
	 */
	tag?: "string";
} & HTMLAttributes<HTMLElement>;

export type RadioProps = HTMLInputAttributes;
export type SelectProps = HTMLSelectAttributes;
export type TextareaProps = HTMLTextareaAttributes;
export type LabelProps = HTMLLabelAttributes;
