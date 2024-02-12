---
title: <Form.Field />
description: The component used to define a form field.
---

The `<Form.Field/>` component provides the necessary context for it's children to react
to changes in the form state, as well as provides necessary information about the field,
such as the ids needed for aria attributes, and a lot more.

Each `<Form.Field/>` creates its own context, and the children of the field only access
the immediate parent's context. This means that if you have nested fields, the children
of the nested field will not have access to the parent field's context.

## Props

```ts
type Props<T extends AnyZodObject, Name extends FormPathLeaves<T>> = {
	/**
	 * The configuration object for the form, which is passed as a
	 * slot prop to the `<Form.Root />` component.
	 */
	config: Form<T>;

	/**
	 * The key of the field in the form schema.
	 */
	name: Name;
};
```

## Slot Props

````ts
type SlotProps<T extends AnyZodObject, Name extends FormPathLeaves<T>> = {
	/**
	 * The stores that are used to track the state of the field.
	 */
	stores: FormField;

	/**
	 * The value of the errors store for the field.
	 */
	errors: string[] | undefined;

	/**
	 * The value of the field.
	 */
	value: S[Name];

	/**
	 * The constraints for the field.
	 */
	constraints: InputConstraints<S[Name]>;

	/**
	 * An object containing handler helpers for the field for when
	 * not using the provided components for the field and instead
	 * using the library in a headless fashion.
	 *
	 * NOTE: These handlers are automatically applied when using the
	 * provided field components, as well as when using the actions.
	 */
	handlers: {
		/**
		 * A helper for the `on:input` events, which will update
		 * the field's value store with the value of the event's
		 * current target.
		 *
		 * @example
		 * ```
		 * <input on:input={handlers.input} />
		 * ```
		 */
		input: (e: Event) => void;

		/**
		 * A helper for `on:change` events that occur on checkbox
		 * input elements, which will update the field's value store
		 * with the `checked` status of the event's current target.
		 *
		 * @example
		 * ```
		 * <input type="checkbox" on:change={handlers.checkbox} />
		 * ```
		 */
		checkbox: (e: Event) => void;

		/**
		 * A helper for `on:change` events that occur on radio
		 * input elements, which will update the field's value store
		 * with the `value` of the currently checked radio input.
		 *
		 * @example
		 * ```
		 * <input type="radio" value="hello" on:change={handlers.radio} />
		 * <input type="radio" value="world" on:change={handlers.radio} />
		 * ```
		 */
		radio: (e: Event) => void;

		/**
		 * A helper for `on:change` events that occur on select elements
		 * which will update the field's value store with the `value` of * the currently selected option.
		 *
		 * @example
		 * ```
		 * <select on:change={handlers.select}>
		 * 	<option value="en">English</option>
		 * 	<option value="es">Spanish</option>
		 * </select>
		 * ```
		 */
		select: (e: Event) => void;
	};

	/**
	 * An object containing the attributes for the elements
	 * that are used to compose the field when not using the provided
	 * components for the field and instead using the library in
	 * a headless fashion.
	 *
	 * NOTE: These attributes are automatically applied when using
	 * the provided field components, as well as when using the actions.
	 */
	attrs: {
		/**
		 * Attributes that should be applied to the input/select
		 * element for accessibility & functionality.
		 */
		input: {
			"aria-invalid"?: boolean;
			"aria-describedby"?: string;
			name: string;
			id: string;
			value: S[Name];
		};

		/**
		 * Attributes that should be applied to the label element.
		 */
		label: {
			for: string; // the id of the input
		};

		/**
		 * Attributes that should be applied to the description element.
		 */
		description: {
			id: string;
		};

		/**
		 * Attributes that should be applied to the validation element.
		 */
		validation: {
			id: string;
			"aria-live": "assertive";
		};
	};

	/**
	 * An object of actions that can be used to automatically
	 * apply attributes and handle events for elements when not
	 * using the provided components for the field and instead
	 * using the library in a headless fashion.
	 *
	 * NOTE: These actions are not required when using the provided
	 * field components, and automatically apply the attributes,
	 * event handlers, and state for the field.
	 */
	actions: {
		/**
		 * An action for setting the attributes and event handlers for
		 * a checkbox element.
		 *
		 * @usage `<input type="checkbox" use:actions.checkbox />`
		 */
		checkbox: Action<HTMLInputElement>;

		/**
		 * An action for setting up the attributes & state for an
		 * element acting as the description for the field.
		 *
		 * @usage `<span use:actions.description>...</span>`
		 */
		description: Action<HTMLElement>;

		/**
		 * An action for setting up the attributes & event handlers for a standard input component.
		 *
		 * @usage `<input use:actions.input />`
		 */
		input: Action<HTMLInputElement>;

		/**
		 * An action for setting up the attributes for a label element.
		 *
		 * @usage `<label use:actions.label>...</label>`
		 */
		label: Action<HTMLLabelElement>;

		/**
		 * An action for setting up the attributes & event handlers
		 * for a radio input element.
		 *
		 * @usage `<input type="radio" use:actions.radio />`
		 */
		radio: Action<HTMLInputElement>;

		/**
		 * An action for setting up the attributes & event handlers
		 * for a select element.
		 *
		 * @usage `<select use:actions.select>...</select>`
		 */
		select: Action<HTMLSelectElement>;

		/**
		 * An action for setting up the attributes & event handlers
		 * for a textarea element.
		 *
		 * @usage `<textarea use:actions.textarea />`
		 */
		textarea: Action<HTMLTextAreaElement>;

		/**
		 * An action for setting up the attributes & state for an
		 * element acting as the validation message for the field.
		 *
		 * @usage `<p use:actions.validation>...</p>`
		 */
		validation: Action<HTMLElement>;
	};

	/**
	 * A function which updates the field's `value` store with
	 * the provided value.
	 */
	setValue: (value: unknown) => void;
};
````
