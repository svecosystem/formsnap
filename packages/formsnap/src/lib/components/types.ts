import type { HTMLAttributes, HTMLFieldsetAttributes, HTMLLabelAttributes } from 'svelte/elements';
import type { FormPath, FormPathLeaves, SuperForm } from 'sveltekit-superforms';

/**
 * Props for the `Description` component.
 */
export type DescriptionProps = {
	/**
	 * Optionally provide a unique id for the description.
	 * If not provided, a unique ID will be generated for you.
	 */
	id?: string;

	/**
	 * If true, Formsnap won't render the default `div` element and will
	 * instead expect you to spread the `descriptionAttrs` slot prop into an
	 * element of your choosing.
	 *
	 * @see https://formsnap.dev/docs/asChild
	 * @defaultValue `false`
	 */
	asChild?: boolean;

	/**
	 * You can bind to this prop to receive a reference to the
	 * underling HTML element rendered for the description.
	 */
	el?: HTMLDivElement;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Props for the `Field` component.
 */
export type FieldProps<T extends Record<string, unknown>, U extends FormPath<T>> = {
	/**
	 * The form object returned from calling `superForm` in your component.
	 */
	form: SuperForm<T>;

	/**
	 * The path to the field in the form object.
	 */
	name: U;
};

/**
 * Props for the `ElementField` component.
 */
export type ElementFieldProps<T extends Record<string, unknown>, U extends FormPathLeaves<T>> = {
	/**
	 * The form object returned from calling `superForm` in your component.
	 */
	form: SuperForm<T>;

	/**
	 * The path to the field in the form object.
	 */
	name: U;
};

/**
 * Props for the `Fieldset` component. This component is used to group
 * form controls together and if used, should always have a child `Legend`
 * component to provide an accessible title for the group.
 *
 * @see https://www.w3.org/WAI/tutorials/forms/grouping/
 */
export type FieldsetProps<T extends Record<string, unknown>, U extends FormPath<T>> = {
	/**
	 * The form object returned from calling `superForm` in your component.
	 */
	form: SuperForm<T>;

	/**
	 * The path to the field in the form object.
	 */
	name: U;

	/**
	 * If `true`, Formsnap won't render the default `div` element
	 * and will expect you to spread the `groupAttrs` slot prop into
	 * a custom label element/component of your choosing.
	 *
	 * @see https://formsnap.dev/docs/asChild
	 * @defaultValue `false`
	 */
	asChild?: boolean;

	/**
	 * You can bind to this prop to receive a reference to the
	 * underling HTML element rendered for the group.
	 */
	el?: HTMLFieldSetElement;
} & Omit<HTMLFieldsetAttributes, 'form'>;

/**
 * Props for the `Control` component.
 */
export type ControlProps = {
	/**
	 * Optionally provide a unique id for the form control.
	 * If not provided, a unique ID will be generated for you.
	 */
	id?: string;
};

/**
 * Props for the `Label` component.
 */
export type LabelProps = {
	/**
	 * If `true`, Formsnap won't render the default `label` element
	 * and will expect you to spread the `labelAttrs` slot prop into
	 * a custom label element/component of your choosing.
	 *
	 * @see https://formsnap.dev/docs/asChild
	 * @defaultValue `false`
	 */
	asChild?: boolean;

	/**
	 * You can bind to this prop to receive a reference to the
	 * underling HTML element rendered for the label.
	 */
	el?: HTMLLabelElement;
} & HTMLLabelAttributes;

/**
 * Props for the `Legend` component. This component is used to
 * provide an accessible title for a group of form controls.
 *
 * @see https://www.w3.org/WAI/tutorials/forms/grouping/
 */
export type LegendProps = {
	/**
	 * If `true`, Formsnap won't render the default `div` element
	 * and will expect you to spread the `groupTitleAttrs` slot prop into
	 * a custom label element/component of your choosing.
	 *
	 * @see https://formsnap.dev/docs/asChild
	 * @defaultValue `false`
	 */
	asChild?: boolean;

	/**
	 * You can bind to this prop to receive a reference to the
	 * underling HTML element rendered for the group title.
	 */
	el?: HTMLLegendElement;
} & HTMLAttributes<HTMLLegendElement>;

/**
 * Props for the `FieldErrors` component.
 */
export type FieldErrorsProps = {
	/**
	 * Optionally provide a unique id for the validation message.
	 * If not provided, a unique ID will be generated for you.
	 */
	id?: string;

	/**
	 * If `true`, Formsnap won't render the default `div` element
	 * and will expect you to spread the `validationAttrs` slot prop into
	 * a custom element/component of your choosing.
	 *
	 * @see https://formsnap.dev/docs/asChild
	 * @defaultValue `false`
	 */
	asChild?: boolean;

	/**
	 * You can bind to this prop to receive a reference to the
	 * underling HTML element rendered for the validation message.
	 */
	el?: HTMLDivElement;
} & HTMLAttributes<HTMLDivElement>;
