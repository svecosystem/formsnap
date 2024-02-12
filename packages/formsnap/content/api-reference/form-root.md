---
title: <Form.Root />
description: The root form component that provides the form context to all child components.
---

The `<Form.Root />` component is used to define a form and provides a contextual scope for all the child form components. It is required to be used at the root of the form, and can only be used once per form.

At a minimum, it requires a `schema` prop, which is a Zod schema that defines the structure of the form. It also requires a `form` prop, whose type depends on if the form state is uncontrolled (default) or controlled.

## Uncontrolled Usage

Uncontrolled usage is the most simple way to use the form, and is the default. It expects the `form` prop to be the form returned from the `superValidate` function within the page's load function.

```svelte
<script lang="ts">
	import { Form } from "formsnap";
	import { schema } from "$lib/schemas";
	export let data;
</script>

<Form.Root {schema} form={data.form} let:config>
	<!-- ... -->
</Form.Root>
```

It provides a `config` slot prop that contains the form configuration,
which must be passed to children `<Form.Field />` components for them to function properly.

```svelte
<Form.Root {schema} form={data.form} let:config>
	<Form.Field {config} name="username">
		<!-- ... -->
	</Form.Field>
</Form.Root>
```

## Controlled Usage

Controlled usage is designed to be used when you need a higher level of control over the form state. To make a form controlled, you simply set the `controlled` prop to `true`, and pass the object returned from the `superForm` function to the `form` prop.

Now rather than initializing the `SuperForm` on your behalf, we simply use what you pass to the `form` prop. This allows you to initialize the form wherever you'd like, as well as control it from outside the `<Form.Root />` component.

When using controlled usage, you still must pass the schema for type-safe fields, but you no longer pass the `options` prop, as your options are now passed to the `superForm` function.

```svelte
<script lang="ts">
	import { Form } from "formsnap";
	import { schema } from "$lib/schemas";
	import { superForm } from "sveltekit-superforms/client";
	export let data;

	const superFrm = superForm(data.form, {
		validators: schema
		// ...
	});
</script>

<Form.Root {schema} controlled form={superFrm} let:config>
	<!-- ... -->
</Form.Root>
```

## Props

### Base Props

````ts
type BaseProps<T extends AnyZodObject, M = any> = {
	/**
	 * The schema representing the structure of the form, used to provide
	 * validation by default (uncontrolled), and type information to the form.
	 *
	 * @see https://zod.dev
	 */
	schema: T;

	/**
	 * Whether to delegate rendering the `form` element which enables
	 * you to use your own `<form />` element. You can then leverage the
	 * `enhance` and `attrs` slot props to bring your form element to life.
	 * @default false
	 *
	 * @example
	 * ```
	 * <Form.Root {schema} form={data.form} asChild let:enhance let:attrs>
	 * 	<form use:enhance {...attrs}>
	 * 		<!-- ... -->
	 * 	</form>
	 * </Form.Root>
	 * ```
	 *
	 * @see https://formsnap.dev/docs/headless-usage
	 */
	asChild?: boolean;

	/**
	 * Optionally display the `SuperDebug` component beneath your
	 * form for debugging purposes.
	 *
	 * @see https://formsnap.dev/docs/debug-mode
	 */
	debug?: boolean;
};
````

### Uncontrolled (Default) Props

````ts
type Props<T extends AnyZodObject, M = any> = BaseProps & {
	/**
	 * Whether the form is controlled or not. Controlled forms
	 * are used when you want to initialize the `superForm` yourself.
	 *
	 * When set to true, you need to pass the object returned from the
	 * `superForm` function as the `form` prop. When false, you just pass
	 * the `SuperValidated` (data.form) object as the `form` prop.
	 *
	 * @example
	 *  ```
	 * <Form.Root form={data.form} controlled>
	 * 	<!-- ... -->
	 * </Form.Root>
	 * ```
	 */
	controlled?: false;

	/**
	 * The `SuperForm` object returned from the `superForm` function when
	 * the `controlled` prop is set to true. Otherwise, you pass the form
	 * returned from the load function.
	 *
	 * @example
	 * ```
	 * <Form.Root form={data.form} controlled>
	 * 	<!-- ... -->
	 * </Form.Root>
	 * ```
	 */
	form: SuperValidated<T, M>;

	/**
	 * When uncontrolled, you can optionally pass any options
	 * that you would normally pass to the `superForm` function.
	 *
	 * @see https://superforms.rocks/api#superform-options
	 */
	options?: FormOptions<T, M>;
};
````

### Controlled Props

````ts
type Props<T extends AnyZodObject, M = any> = BaseProps & {
	/**
	 * Whether the form is controlled or not. Controlled forms
	 * are used when you want to initialize the `superForm` yourself.
	 *
	 * @example
	 * ```
	 * <script>
	 * 	import { superForm } from "sveltekit-superforms/client";
	 * 	import { schema } from "./schema";
	 * 	export let data;
	 * 	const superFrm = superForm(data.form, { validators: schema })
	 * </script>
	 *
	 * <Form.Root form={superFrm} controlled>
	 * 	<!-- ... -->
	 * </Form.Root>
	 * ```
	 */
	controlled: true;

	/**
	 * The `SuperForm` object returned from the `superForm` function when
	 * the `controlled` prop is set to true. Otherwise, you pass the form
	 * returned from the load function.
	 *
	 * @example
	 * ```
	 * <script>
	 * 	import { superForm } from "sveltekit-superforms/client";
	 * 	import { schema } from "./schema";
	 * 	export let data;
	 * 	const superFrm = superForm(data.form, { validators: schema })
	 * </script>
	 * <Form.Root form={superFrm} controlled>
	 * 	<!-- ... -->
	 * </Form.Root>
	 * ```
	 */
	form: SuperForm<UnwrapEffects<T>, M>;
};
````

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
