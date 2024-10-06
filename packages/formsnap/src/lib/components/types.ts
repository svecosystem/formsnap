import type { HTMLAttributes, HTMLFieldsetAttributes, HTMLLabelAttributes } from "svelte/elements";
import type { FormPath, FormPathLeaves, SuperForm } from "sveltekit-superforms";
import type { Snippet } from "svelte";
import type { Expand, WithChild, Without } from "svelte-toolbelt";
import type {
	ControlAttrs,
	DescriptionAttrs,
	ErrorAttrs,
	FieldErrorsAttrs,
	FieldsetAttrs,
	LabelAttrs,
	LegendAttrs,
} from "$lib/attrs.types.js";
import type { Primitive } from "$lib/internal/types.js";

type PrimitiveFieldSetAttributes = Primitive<HTMLFieldsetAttributes>;
type PrimitiveDivAttributes = Primitive<HTMLAttributes<HTMLDivElement>>;
type PrimitiveLabelAttributes = Primitive<HTMLLabelAttributes>;
type PrimitiveLegendAttributes = Primitive<HTMLAttributes<HTMLLegendElement>>;

// eslint-disable-next-line ts/no-explicit-any
export type FsSuperForm<T extends Record<string, unknown>, M = any> = Omit<
	SuperForm<T, M>,
	"validate" | "validateForm"
> & {
	// eslint-disable-next-line ts/no-explicit-any
	validate?: any;
	// eslint-disable-next-line ts/no-explicit-any
	validateForm?: any;
};

/**
 * Props for the [Description](https://formsnap.dev/docs/components/description) component.
 *
 * @category Description
 */
export type DescriptionPropsWithoutHTML = WithChild<{}>;

export type DescriptionProps = DescriptionPropsWithoutHTML &
	Without<PrimitiveDivAttributes, DescriptionPropsWithoutHTML>;

/**
 * Props for the [Field](https://formsnap.dev/docs/components/field) component.
 *
 * @category Field
 */
// eslint-disable-next-line ts/no-explicit-any
export type FieldProps<T extends Record<string, unknown>, U extends FormPath<T>, M = any> = {
	/**
	 * The form object returned from calling `superForm` in your component.
	 */
	form: FsSuperForm<T, M>;

	/**
	 * The path to the field in the form object.
	 *
	 * @required
	 */
	name: U;

	/**
	 * The children of the field.
	 */
	children?: Snippet<
		[
			{
				value: T[U];
				errors: string[];
				tainted: boolean;
				constraints: Record<string, unknown>;
			},
		]
	>;
};

/**
 * Props for the [ElementField](https://formsnap.dev/docs/components/element-field) component.
 *
 * @category ElementField
 */
export type ElementFieldProps<
	T extends Record<string, unknown>,
	U extends FormPathLeaves<T>,
	// eslint-disable-next-line ts/no-explicit-any
	M = any,
> = {
	/**
	 * The form object returned from calling `superForm` in your component.
	 */
	form: FsSuperForm<T, M>;

	/**
	 * The path to the field in the form object.
	 *
	 * @required
	 */
	name: U;

	/**
	 * The children of the field.
	 */
	children?: Snippet<
		[
			{
				value: T[U];
				errors: string[];
				tainted: boolean;
				constraints: Record<string, unknown>;
			},
		]
	>;
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
export type FieldsetPropsWithoutHTML<
	T extends Record<string, unknown>,
	U extends FormPath<T>,
	// eslint-disable-next-line ts/no-explicit-any
	M = any,
> = WithChild<
	{
		/**
		 * The form object returned from calling `superForm` in your component.
		 */
		form: FsSuperForm<T, M>;

		/**
		 * The path to the field in the form object.
		 */
		name: U;
	},
	{
		value: T[U];
		errors: string[];
		tainted: boolean;
		constraints: Record<string, unknown>;
	}
>;

export type FieldsetProps<
	T extends Record<string, unknown>,
	U extends FormPath<T>,
	// eslint-disable-next-line ts/no-explicit-any
	M = any,
> = FieldsetPropsWithoutHTML<T, U, M> &
	Without<PrimitiveFieldSetAttributes, FieldsetPropsWithoutHTML<T, U, M>>;

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

	children?: Snippet<[{ props: Expand<ControlAttrs> }]>;
};

export type LabelPropsWithoutHTML = WithChild<{}>;

/**
 * Props for the [Label](https://formsnap.dev/docs/components/label) component.
 *
 * @category Label
 */
export type LabelProps = LabelPropsWithoutHTML &
	Without<PrimitiveLabelAttributes, LabelPropsWithoutHTML>;

export type LegendPropsWithoutHTML = WithChild<{}>;

/**
 * Props for the [Legend](https://formsnap.dev/docs/components/legend) component.
 * This component is used to provide an accessible title for a group of form controls.
 *
 * @category Legend
 *
 * @see {@link https://www.w3.org/WAI/tutorials/forms/grouping/ W3C Grouping}
 */
export type LegendProps = LegendPropsWithoutHTML &
	Without<PrimitiveLegendAttributes, LegendPropsWithoutHTML>;

/**
 * Props for the [FieldErrors](https://formsnap.dev/docs/components/field-errors) component.
 *
 * @category FieldErrors
 */
export type FieldErrorsPropsWithoutHTML = WithChild<
	{},
	{
		errors: string[];
		errorProps: Record<string, unknown>;
	}
>;

export type FieldErrorsProps = FieldErrorsPropsWithoutHTML &
	Without<PrimitiveDivAttributes, FieldErrorsPropsWithoutHTML>;

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
	 * The constraints for the field.
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
	 * The constraints for the field.
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
	 * @see {@link https://formsnap.dev/docs/composition/aschild asChild Documentation}
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
	U extends FormPathLeaves<T>,
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
	 * @see {@link https://formsnap.dev/docs/composition/aschild asChild Documentation}
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
	 * @see {@link https://formsnap.dev/docs/composition/aschild asChild Documentation}
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
	 * @see {@link https://formsnap.dev/docs/composition/aschild asChild Documentation}
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
	 * @see {@link https://formsnap.dev/docs/composition/aschild asChild Documentation}
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
