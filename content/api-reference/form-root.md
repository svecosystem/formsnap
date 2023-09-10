---
title: <Form.Root />
description: The root form component that provides the form context to all child components.
---

## Props

```ts
type Props<T extends AnyZodObject, M = any> = {
	/**
	 * The schema representing the structure of the form, used to provide validation
	 * and type information to the form.
	 *
	 * @see https://zod.dev
	 */
	schema: T;

	/**
	 * The form returned from the load function after passing the schema to `superValidate`,
	 * from `sveltekit-superforms`.
	 */
	form: SuperValidated<T, M>;

	/**
	 * The options to pass to the form.
	 *
	 * @see https://superforms.rocks/api#superform-options
	 */
	formOptions: FormOptions<T, M>;

	/**
	 * If false, the native `<form>` element will not be rendered
	 * with the `<Form.Root>` component and is up to the user to
	 * implement using the helpers.
	 *
	 * @see https://formsnap.dev/docs/headless-usage
	 */
	asChild: boolean;

	/**
	 * If true, the `<SuperDebug />` component will be rendered
	 * underneath the form to provide debugging information.
	 *
	 * @see https://formsnap.dev/docs/debug-mode
	 */
	debug: boolean;
};
```

## Slot Props

All slot props are passed to the default slot, and can be accessed using the `let` directive.

```ts
type SlotProps<T extends AnyZodObject, M = any> = {
	/**
	 * An object that must be passed to the `<Form.Field/>` components to
	 * provide the field with functionality & type information.
	 */
	config: {
		form: SuperForm<T, M>;
		schema: T;
	};

	/**
	 * An object of stores that can be used to manage the form state
	 * returned from the `superForm` function.
	 *
	 * @see https://superforms.rocks/api#superform-return-type
	 */
	form: SuperForm<UnwrapEffects<T>, M>;

	/**
	 * The current value of the `form` store returned from the `superForm`
	 * function which is an object whose keys are the keys of the schema,
	 * and whose values are the current values of the form.
	 */
	formValues: UnwrapEffects<T>;

	/**
	 * The `form` store returned from the `superForm` function, this
	 * is the store equivalent of the `formValues` slot prop.
	 *
	 * @see https://superforms.rocks/api#superform-return-type
	 */
	formStore: {
		subscribe: (data: S) => void;
		set: (
			value: S,
			options?: { taint?: boolean | "untaint" | "untaint-all" }
		) => void;
		update: (
			updater: (S) => S,
			options?: { taint?: boolean | "untaint" | "untaint-all" }
		) => void;
	};

	/**
	 * The custom enhance action returned from the `superForm` function
	 * which can be used to enhance the form with custom functionality.
	 *
	 * @see https://superforms.rocks/concepts/enhance
	 */
	enhance: (el: HTMLFormElement, events?: {
    		onSubmit, onResult, onError, onUpdate, onUpdated
  		}) => ReturnType<typeof $app/forms/enhance>;

	/**
	 * An array of objects containing all the errors in the form.
	 * `path` is the name of the field in the schema, and `messages`
	 * is an array of error messages for that field.
	 */
	allErrors: { path: string; messages: string[] }[];

	/**
	 * Whether the form is currently in the delayed state.
	 *
	 * @see https://superforms.rocks/concepts/timers
	 */
	delayed: boolean;

	/**
	 * Whether the form is currently in the submitting state.
	 *
	 * @see https://superforms.rocks/concepts/timers
	 */
	submitting: boolean;

	/**
	 * Whether the form is currently in the timeout state.
	 *
	 * @see https://superforms.rocks/concepts/timers
	 */
	timeout: boolean;

	/**
	 * Whether the form is currnetly in the posted state.
	 *
	 * @see https://superforms.rocks/concepts/timers
	 */
	posted: boolean;

	/**
	 * The value of the `errors` store returned from the `superForm`
	 * function which is an object whose keys are the keys of the schema,
	 * and whose values are the current errors for that field.
	 *
	 * @see https://superforms.rocks/concepts/error-handling
	 */
	errors: Nested<S, string[] | undefined>;

	/**
	 * The value of the `tainted` store returned from the `superForm`
	 * function which is an object whose keys are the keys of the schema,
	 * and whose values are the current tainted state for that field.
	 *
	 * @see https://superforms.rocks/concepts/tainted
	 */
	tainted: Nested<S, boolean | undefined> | undefined;

	/**
	 * The ID of the form.
	 */
	formId: string | undefined

	/**
	 * The fields of the form.
	 */
	fields: Record<keyof S, FormField<T>>

	/**
	 * The value of the message returned from the server
	 */
	message: M | undefined;

	/**
	 * A function that can be used to reset the form
	 */
	reset: (options?: {
		keepMessage?: boolean;
		id?: string;
		data?: Partial<S>;
	}) => void;

	/**
	 * A function that can be used to capture the form state
	 * for use with snapshots.
	 *
	 * @see https://superforms.rocks/concepts/snapshots
	 */
	capture: () => SuperFormSnapshot<T, M>

	/**
	 * A function that can be used to restore the form state
	 * from a snapshot.
	 *
	 * @see https://superforms.rocks/concepts/snapshots
	 */
	restore: (snapshot: SuperFormSnapshot<T, M>) => void;

	/**
	 * A function used to validate a field in the form.
	 */
	validate: (path?: FormPathLeaves<S>, opts?: {
		value: FormPathType<FormPathLeaves<S>>;
		update: boolean | 'errors' | 'value';
		taint: boolean | 'untaint' | 'untaint-all';
		errors: string | string[];
  	}) => Promise<(string[] | undefined) | SuperValidated<T, M>>;

};
```
