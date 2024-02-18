import type {
	ControlAttrs,
	DescriptionAttrs,
	ErrorAttrs,
	FieldErrorsAttrs,
	FieldsetAttrs,
	LabelAttrs,
	LegendAttrs
} from '$lib/attrs.types.js';
import type { HTMLAttributes, HTMLFieldsetAttributes, HTMLLabelAttributes } from 'svelte/elements';
import type { FormPath, FormPathLeaves, SuperForm } from 'sveltekit-superforms';

/**
 * Props for the [Description](https://formsnap.dev/docs/components/description) component.
 *
 * @category Description
 */
export type DescriptionProps = {
	/**
	 * Optionally provide a unique id for the description.
	 * If not provided, a unique ID will be generated for you.
	 */
	id?: string;

	/**
	 * If true, Formsnap won't render the default `div` element and will
	 * instead expect you to spread the {@link DescriptionAttrs descriptionAttrs} slot prop
	 * into an element of your choosing.
	 *
	 * @see {@link https://formsnap.dev/docs/aschild asChild Documentation}
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
 * Props for the [Field](https://formsnap.dev/docs/components/field) component.
 *
 * @category Field
 */
export type FieldProps<T extends Record<string, unknown>, U extends FormPath<T>> = {
	/**
	 * The form object returned from calling `superForm` in your component.
	 */
	form: SuperForm<T>;

	/**
	 * The path to the field in the form object.
	 *
	 * @required
	 */
	name: U;
};

/**
 * Props for the [ElementField](https://formsnap.dev/docs/components/element-field) component.
 *
 * @category ElementField
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
 * Props for the [Fieldset](https://formsnap.dev/docs/components/fieldset) component.
 * This component is used to group form controls together and if used, should always
 * have a child [Legend](https://formsnap.dev/docs/components/legend) component to provide
 * an accessible title for the group.
 *
 * @category Fieldset
 *
 * @see {@link https://www.w3.org/WAI/tutorials/forms/grouping/ W3C Grouping}
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
	 * and will expect you to spread the {@link FieldsetSlotProps fieldsetAttrs} slot prop into
	 * a custom label element/component of your choosing.
	 *
	 * @see {@link https://formsnap.dev/docs/aschild asChild Documentation}
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
 * Props for the [Control](https://formsnap.dev/docs/components/control) component.
 *
 * @category Control
 */
export type ControlProps = {
	/**
	 * Optionally provide a unique id for the form control.
	 * If not provided, a unique ID will be generated for you.
	 */
	id?: string;
};

/**
 * Props for the [Label](https://formsnap.dev/docs/components/label) component.
 *
 * @category Label
 */
export type LabelProps = {
	/**
	 * If `true`, Formsnap won't render the default `<label/>` element
	 * and will expect you to spread the {@link LabelAttrs labelAttrs}
	 * slot prop into a custom label element/component of your choosing.
	 *
	 * @see {@link https://formsnap.dev/docs/aschild asChild Documentation}
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
 * Props for the [Legend](https://formsnap.dev/docs/components/legend) component.
 * This component is used to provide an accessible title for a group of form controls.
 *
 * @category Legend
 *
 * @see {@link https://www.w3.org/WAI/tutorials/forms/grouping/ W3C Grouping}
 */
export type LegendProps = {
	/**
	 * If `true`, Formsnap won't render the default `<div/>` element
	 * and will expect you to spread the {@link LegendAttrs legendAttrs} slot
	 * prop into a custom legend element/component of your choosing.
	 *
	 * @see {@link https://formsnap.dev/docs/aschild asChild Documentation}
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
 * Props for the [FieldErrors](https://formsnap.dev/docs/components/field-errors) component.
 *
 * @category FieldErrors
 */
export type FieldErrorsProps = {
	/**
	 * Optionally provide a unique id for the validation message.
	 * If not provided, a unique ID will be generated for you.
	 */
	id?: string;

	/**
	 * If `true`, Formsnap won't render the default `<div/>` element
	 * and will expect you to spread the {@link FieldErrorsAttrs fieldErrorsAttrs} slot prop into
	 * a custom element/component of your choosing.
	 *
	 * @see {@link https://formsnap.dev/docs/aschild asChild Documentation}
	 * @defaultValue `false`
	 */
	asChild?: boolean;

	/**
	 * You can bind to this prop to receive a reference to the
	 * underling HTML element rendered for the validation message.
	 */
	el?: HTMLDivElement;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Slot props exposed by the [Field](https://formsnap.dev/docs/components/field) component.
 *
 * @category Field
 */
export type FieldSlotProps<T extends Record<string, unknown>, U extends FormPath<T>> = {
	/** The value of the field. */
	value: T[U];

	/** The errors array for the field. */
	errors: string[];

	/**
	 * The contraints for the field.
	 *
	 * @see {@link https://superforms.rocks/concepts/client-validation#constraints Constraints Documentation}
	 */
	constraints: Record<string, unknown>;

	/**
	 * The tainted state of the field.
	 *
	 * @see {@link https://superforms.rocks/concepts/tainted#tainted-fields Tainted Fields Documentation}
	 */
	tainted: boolean;
};

/**
 * Slot props exposed by the `Fieldset` component.
 *
 * @category Fieldset
 */
export type FieldsetSlotProps<T extends Record<string, unknown>, U extends FormPath<T>> = {
	/** The value of the field. */
	value: T[U];

	/** The errors array for the field. */
	errors: string[];

	/**
	 * The contraints for the field.
	 *
	 * @see {@link https://superforms.rocks/concepts/client-validation#constraints Constraints Documentation}
	 */
	constraints: Record<string, unknown>;

	/**
	 * The tainted state of the field.
	 *
	 * @see {@link https://superforms.rocks/concepts/tainted#tainted-fields Tainted Fields Documentation}
	 */
	tainted: boolean;

	/**
	 * The attributes to apply to the element if using the {@link FieldsetProps asChild} prop.
	 *
	 * @see {@link https://formsnap.dev/docs/aschild asChild Documentation}
	 */
	fieldsetAttrs: FieldsetAttrs;
};

/**
 * Slot props exposed by the [ElementField](https://formsnap.dev/docs/components/element-field) component.
 *
 * @category ElementField
 */
export type ElementFieldSlotProps<
	T extends Record<string, unknown>,
	U extends FormPathLeaves<T>
> = FieldSlotProps<T, U>;

/**
 * Slot props exposed by the [FieldErrors](https://formsnap.dev/docs/components/field-errors) component.
 *
 * @category FieldErrors
 */
export type FieldErrorsSlotProps = {
	/**
	 * The attributes to apply to the field errors container element
	 * if using the {@link FieldErrorsProps asChild} prop.
	 *
	 * @see {@link https://formsnap.dev/docs/aschild asChild Documentation}
	 */
	fieldErrorsAttrs: FieldErrorsAttrs;

	/**
	 * A spreadable object of attributes for the individual error messages
	 * if being rendered as children of the
	 * [FieldErrors](https://formsnap.dev/docs/components/field-errors) component.
	 */
	errorAttrs: ErrorAttrs;

	/** The errors array for the field. */
	errors: string[];
};

/**
 * The slot props exposed by the [Label](https://formsnap.dev/docs/components/label) component.
 *
 * @category Label
 */
export type LabelSlotProps = {
	/**
	 * The attributes to apply to the label element if using the
	 * {@link LabelProps asChild} prop.
	 *
	 * @see {@link https://formsnap.dev/docs/aschild asChild Documentation}
	 */
	labelAttrs: LabelAttrs;
};

/**
 * The slot props exposed by the [Description](https://formsnap.dev/docs/components/description) component.
 *
 * @category Description
 */
export type DescriptionSlotProps = {
	/**
	 * The attributes to apply to the description element if using the
	 * {@link DescriptionProps asChild} prop.
	 *
	 * @see {@link https://formsnap.dev/docs/aschild asChild Documentation}
	 */
	descriptionAttrs: DescriptionAttrs;
};

/**
 * The slot props exposed by the [Legend](https://formsnap.dev/docs/components/legend) component.
 *
 * @category Legend
 */
export type LegendSlotProps = {
	/**
	 * The attributes to apply to the description element if using the
	 * {@link LegendProps asChild} prop.
	 *
	 * @see {@link https://formsnap.dev/docs/aschild asChild Documentation}
	 */
	legendAttrs: LegendAttrs;
};

/**
 * The slot props exposed by the [Control](https://formsnap.dev/docs/components/control) component.
 *
 * @category Control
 */
export type ControlSlotProps = {
	/**
	 * The attributes that must be applied to the form control element.
	 */
	attrs: ControlAttrs;
};
