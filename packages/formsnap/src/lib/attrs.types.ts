/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Attributes provided via the props snippet prop of the
 * [Control](https://formsnap.dev/docs/components/control) component to
 * spread onto the form control element.
 *
 * @category Control
 *
 * @see {@link https://formsnap.dev/docs/components/control Control Documentation}
 */
export type ControlAttrs = {
	/** The name of the control used for form submission. */
	name: string;

	/** The ID of the control, used for label association. */
	id: string;

	/** Present when a validation error exists on the field. */
	"data-fs-error": string | undefined;

	/** Present when description or validation exists. */
	"aria-describedby": string | undefined;

	/** Present when a validation error exists on the field. */
	"aria-invalid": "true" | undefined;

	/** Present when the field is required. */
	"aria-required": "true" | undefined;

	/**
	 * Used for selection during styling or otherwise
	 * @see {@link https://formsnap.dev/docs/styling Styling Documentation}
	 */
	"data-fs-control": string;
};

/**
 * Attributes provided via the `child` snippet props of the
 * [Label](https://formsnap.dev/docs/components/label) component to spread onto the label element.
 */
export type LabelAttrs = {
	/** The ID of the control, used for label association. */
	for: string;

	/** Present when a validation error exists on the field. */
	"data-fs-error": string | undefined;

	/**
	 * Used for selection during styling or otherwise
	 * @see {@link https://formsnap.dev/docs/styling Styling Documentation}
	 */
	"data-fs-label": string;

	/** Any additional props provided to the `<Form.Label />` component */
	[key: string]: any;
};

/**
 * Attributes provided via the `child` snippet props to spread onto the field error
 * container element.
 */
export type FieldErrorsAttrs = {
	/** The ID of the validation element, used to describe the control. */
	id: string;

	/** Present when a validation error exists on the field. */
	"data-fs-error": string | undefined;

	/**
	 * Used for selection during styling or otherwise
	 * @see {@link https://formsnap.dev/docs/styling Styling Documentation}
	 */
	"data-fs-field-errors": string;

	/** Notifies screen readers when a validation error occurs */
	"aria-live": "assertive" | "polite";

	/** Any additional props provided to `<Form.Validation />` */
	[key: string]: any;
};

/**
 * Attributes provided via the snippet props to be spread onto the individual error elements.
 */
export type ErrorAttrs = {
	/**
	 * Used for selection during styling or otherwise
	 * @see {@link https://formsnap.dev/docs/styling Styling Documentation}
	 */
	"data-fs-field-error": string;

	/** Present when a validation error exists on the field. */
	"data-fs-error": string | undefined;
};

/**
 * Attributes provided via the {@link LegendSlotProps legendAttrs} slot prop of
 * the [Legend](https://formsnap.dev/docs/components/legend) component to be spread
 * onto the legend element when used with the {@link LegendProps asChild} prop.
 *
 * @category Legend
 *
 * @see {@link https://formsnap.dev/docs/composition/aschild asChild Documentation}
 * @see {@link https://formsnap.dev/docs/components/legend Legend Documentation}
 */
export type LegendAttrs = {
	/**
	 * Used for selection during styling or otherwise
	 * @see {@link https://formsnap.dev/docs/styling Styling Documentation}
	 */
	"data-fs-legend": string;

	/** Present when a validation error exists on the field. */
	"data-fs-error": string | undefined;

	/* Any additional props provided to `<Form.Legend />` */
	[key: string]: any;
};

/**
 * Attributes provided via the {@link DescriptionSlotProps descriptionAttrs} slot prop
 * of the [Description](https://formsnap.dev/docs/components/description) component to be
 * spread onto the description element when used with the {@link DescriptionProps asChild} prop.
 *
 * @category Description
 *
 * @see {@link https://formsnap.dev/docs/composition/aschild asChild Documentation}
 * @see {@link https://formsnap.dev/docs/components/description Description Documentation}
 */
export type DescriptionAttrs = {
	/** The ID of the description element, used to describe the control. */
	id: string;

	/**
	 * Used for selection during styling or otherwise
	 * @see {@link https://formsnap.dev/docs/styling Styling Documentation}
	 */
	"data-fs-description": string;

	/** Present when a validation error exists on the field. */
	"data-fs-error": string | undefined;

	/* Any additional props provided to `<Form.Description />` */
	[key: string]: any;
};

/**
 * Attributes provided via the {@link FieldsetSlotProps props} snippet prop
 * of the [Fieldset](https://formsnap.dev/docs/components/fieldset) component to be
 * spread onto the `<fieldset>` element when used with the {@link FieldsetProps child} snippet.
 *
 * @category Fieldset
 *
 * @see {@link https://formsnap.dev/docs/composition/aschild asChild Documentation}
 * @see {@link https://formsnap.dev/docs/components/fieldset Fieldset Documentation}
 */
export type FieldsetAttrs = {
	/**
	 * Used for selection during styling or otherwise
	 * @see {@link https://formsnap.dev/docs/styling Styling Documentation}
	 */
	"data-fs-fieldset": string;

	/** Present when a validation error exists on the field. */
	"data-fs-error": string | undefined;

	/* Any additional props provided to `<Fieldset />` */
	[key: string]: any;
};
