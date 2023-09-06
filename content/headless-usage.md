---
title: Headless usage
description: Have your own components or want to use native HTML elements? No problem.
---

Although the provided components are the recommended and easiest way to use Formsnap, they aren't the only way. If you prefer to bring your own components or use native HTML elements, that's fine too. While the developer experience won't be _quite_ as nice, it's still pretty good for what you get.

We'll start by looking at the slot props exposed by the `<Form.Root />` and `<Form.Field />`, and then how to use native HTML elements, followed by how to use your own components/mix and match with the provided components.

## Slot Props

To use Formsnap without the provided components, you'll need to use some of the slot props exposed by the `<Form.Root />` and `<Form.Field />` components. Which ones you use will depend on your use case and needs, but here's a list of them along with what they're used for.

This information will eventually be documented in a nice API reference section, but for now, this will do.

### Form.Root

```ts
// Not a real type, just for visual reference :)
type FormRootSlotProps = {
	/**
	 * The `config` slot prop is used to properly type and wire up the form fields.
	 * You won't need to use this prop directly, but it's important that it's passed
	 * to the `<Form.Field />` components so that they are properly typed and functional.
	 */
	config: {
		/**
		 * The `form` slot prop is the form's store. It contains the form's current
		 * values, validation errors, and other useful properties.
		 */
		form: FormStore;

		/**
		 * The `schema` slot prop is the form's schema. It contains the form's
		 * validation rules, default values, and other useful properties.
		 */
		schema: FormSchema;
	};

	/**
	 * The `enhance` slot prop is an action that progressively enhances the form.
	 * It's important to note that this is **_*NOT*_** the `enhance` action provided
	 * by SvelteKit, but rather a custom action provided by Superforms.
	 *
	 * @example <form use:enhance />
	 */
	enhance: Action<Element>;
};
```

### Form.Field

```ts
// Not a real type, just for visual reference :)
type FormFieldSlotProps<T> = {
	/**
	 * Actions provide functionality to the various elements that
	 * make up the field. They handle event listeners, attributes, etc.
	 */
	actions: {
		/**
		 * The action which should be applied to type="checkbox" input elements.
		 * Handles the `checked` attribute and the `value` store using a "change"
		 * event listener & applies all the necessary attributes.
		 */
		checkbox: Action<HTMLInputElement>;

		/**
		 * The action which should be applied to the field's description element.
		 * Applies the `id` attribute which is used to associate the description
		 * with the input element using the `aria-describedby` attribute.
		 */
		description: Action<HTMLElement>;

		/**
		 * The action which should be applied to a regular input element.
		 * Handles updating the `value` store using an `input` event listener
		 * and applies the necessary attributes.
		 */
		input: Action<HTMLInputElement>;

		/**
		 * The action which should be applied to the field's label element.
		 * Applies the `for` attribute which is used to associate the label
		 * with the field's input element.
		 */
		label: Action<HTMLLabelElement>;

		/**
		 * The action which should be applied to type="radio" input elements.
		 * Handles the `checked` attribute and the `value` store using a "change"
		 * event listener & applies all the necessary attributes.
		 */
		radio: Action<HTMLInputElement>;

		/**
		 * The action which should be applied to select elements.
		 * Handles the the `value` store using a "change" event listener and
		 * applies all necessary attributes.
		 */
		select: Action<HTMLSelectElement>;

		/**
		 * The action which should be applied to textarea elements.
		 * Handles the the `value` store using an "input" event listener and
		 * applies all necessary attributes.
		 */
		textarea: Action<HTMLTextAreaElement>;

		/**
		 * The action which should be applied to the field's validation message
		 * element. Applies the `id` attribute which is used to associate the
		 * validation message with the input using the `aria-describedby` attribute.
		 */
		validation: Action<HTMLElement>;
	};

	/**
	 * `attrs` is an object containing the attributes for the various elements
	 * that make up the field. These aren't necessary if you're using the actions,
	 * but they can be useful if you're using custom components.
	 */
	attrs: {
		input: {
			"aria-invalid": true | undefined;
			"aria-describedby": string | undefined;
			"aria-required": true | undefined;
			"data-invalid": true | undefined;
			"data-valid": true | undefined;
			name: string;
			id: string;
			value: T;
		};
		label: {
			for: string;
		};
		description: {
			id: string;
		};
		validation: {
			id: string;
		};
	};

	/**
	 * `handlers` is an object containing helpful event handler functions which
	 * can be used to update the field's value store as the user interacts with
	 * the field. These aren't necessary if you're using actions, but are useful
	 * when working with custom components.
	 */
	handlers: {
		/**
		 * Handles updating the field's `value` store on "input" events
		 *
		 * @example <CustomInput on:input={handlers.input} />
		 * @example <CustomTextarea on:input={handlers.input} />
		 */
		input: (event: Event) => void;

		/**
		 * Handles updating the field's `value` store on "change" events
		 *
		 * @example <CustomCheckbox on:change={handlers.checkbox} />
		 */
		checkbox: (event: Event) => void;

		/**
		 * Handles updating the field's `value` store on "change" events
		 *
		 * @example <CustomRadioItem on:change={handlers.radio} />
		 */
		radio: (event: Event) => void;

		/**
		 * Handles updating the field's `value` store on "change" events
		 *
		 * @example <CustomSelect on:change={handlers.select} />
		 */
		select: (event: Event) => void;
	};

	/**
	 * A function which sets the field's `value` store to the value provided via
	 * the function argument. This is useful when working with custom components.
	 */
	setValue: (value: T) => void;

	/**
	 * The field's validation errors.
	 */
	errors: string[] | undefined;

	/**
	 * The field's current value.
	 */
	value: T;
};
```

## Native HTML elements

### Using the native form element

`<Form.Root />` as the name suggests is the root element of the form. By default, it renders a `<form>` element, but you can override that behavior by setting the `asChild` prop to `true`. This will prevent the `<form />` from being rendered, and instead only render its children.

Of course, there's a lot more going on, but here's a high-level example of what the `asChild` prop is doing.

```svelte title="Form.Root" showLineNumbers
{#if asChild}
	<slot />
{:else}
	<form>
		<slot />
	</form>
{/if}
```

Even though we're intentionally opting our of the provided `<form />` element, we still want the same functionality. To achieve this, we can use the slot props provided by `<Form.Root />` to wire up our form. Keep in mind you'll still need to pass the `schema` & `form` props to `<Form.Root />` for validation and state management to work.

```svelte showLineNumbers
<Form.Root form={data.form} schema={someSchema} let:config let:enhance asChild>
	<form method="POST" use:enhance>
		<!--  -->
	</form>
</Form.Root>
```

Per usual, we'll need the `config` slot prop to properly wire up our `<Form.Field />` components, but we'll also need the `enhance` slot prop, which is an action that progressively enhances the form. It's important to note that this is **_*NOT*_** the `enhance` action provided by SvelteKit, but rather a custom action provided by [Superforms](https://superforms.rocks/concepts/enhance).

That's it. Now you can use your own `<form />` element and still get all the benefits!

### Using native field elements

The `<Form.Field />` component exposes an `actions` slot prop which allows you to use native elements without losing any functionality. The `<Form.Field />` component doesn't render any markup by default, so there's no need to worry about the `asChild` prop here.

```svelte showLineNumbers
<Form.Root form={data.form} schema={someSchema} let:config let:enhance asChild>
	<form method="POST" use:enhance>
		<Form.Field {config} let:actions name="email">
			<!-- svelte-ignore a11y-label-has-associated-control / applied by action -->
			<label use:actions.label> Email </label>
			<input use:actions.input />
			<span use:actions.description> Please use your company email. </span>
			<span use:actions.validation>
				{#if $errors}
					{#each $errors.email as error}
						{error}
					{/each}
				{/if}
			</span>
		</Form.Field>
	</form>
</Form.Root>
```

As you can see all we need to make this functional is to apply the appropriate actions to the various elements that make up the field. Not quite as pretty as the provided components, but it gets the job done while giving you the flexibility of scoped styles, additional actions, etc.

## Custom components

While there's no way to predict what the interfaces of your components will look like, we can still provide a high-level example of how to use them with Formsnap.

For purposes of this example, we'll assume that we have a `<CustomInput />` component that looks something like this:

```svelte title="CustomInput.svelte" showLineNumbers
<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements";
	type $$Props = HTMLInputAttributes;
</script>

<input class="custom-input" on:input {...$$restProps} />

<style>
	.custom-input {
		/* ... */
	}
</style>
```

We're forwarding the `on:input` event so that we handle the event in the parent component, and we're using the `$$restProps` spreadable to forward any additional props to the `<input />` element.

Now let's use the slot props provided by `<Form.Field />` to wire up our custom input.

```svelte showLineNumbers
<Form.Root form={data.form} schema={someSchema} let:config let:enhance>
	<form method="POST" use:enhance>
		<Form.Field {config} let:attrs let:handlers name="email">
			<Form.Label>Email</Form.Label>
			<CustomInput {...attrs.input} on:input={handlers.input} />
			<Form.Description>Please use your company email.</Form.Description>
			<Form.Validation />
		</Form.Field>
	</form>
</Form.Root>
```

We're using the `attrs` slot prop to apply the necessary attributes to our custom input, and we're using the `handlers` slot prop to update the field's `value` store as the user interacts with the input.

Of course we could also bring our own `<Form.Label />`, `<Form.Description />`, and `<Form.Validation />` components, and the process would be the same, except they would receive `{...attrs.label}`, `{...attrs.description}`, and `{...attrs.validation}` respectively.

## Using the `getFormField` helper

Alternatively, you can use the `getFormField` helper function to compose your own form components. For more information on how to use this function, see [getFormField](/docs/api-reference/get-form-field).
