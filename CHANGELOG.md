# formsnap

## 0.1.2

### Patch Changes

- Forward for events to `<Form.Root />` component ([#38](https://github.com/huntabyte/formsnap/pull/38))

## 0.1.1

### Patch Changes

- b31af0f: Fix: Set Form Context for `getForm`

## 0.1.0

### Minor Changes

- 83dcbbd: - Add `getForm` helper
  - Fix bug which was creating large `.d.ts` files and crashing editors

## 0.0.9

### Patch Changes

- 709b7ab: - Add `method="POST"` by default to `<Form.Root />`

## 0.0.8

### Patch Changes

- 48eea47: - add `formStore` to `<Form.Root />` slot props

## 0.0.7

### Patch Changes

- 4bc5459: Fix: Value typing

## 0.0.6

### Patch Changes

- bfa0520: Add `tag` prop to `Validation` & `Description`

## 0.0.5

### Patch Changes

- 2a857e1: Fix: `<Form.Root />` slot prop types

## 0.0.4

### Patch Changes

- 6c46a7f: export additional types

## 0.0.3

### Patch Changes

- 0801f7d: Add the `handlers` object containing the event handler helpers as well as the `setValue` helper function to the `getFormField` return object.
- 748f8e8: #### Add a `getFormField` helper function

  The `getFormField` helper function must be called upon component initialization and provides some useful stores, actions, etc. when composing your own forms.
  For example, if I wanted to create a reusable `Form.Label` with conditional styles applied to it depending on the error state of the field, I could do something like this:

  ```svelte
  <!-- CustomLabel.svelte -->
  <script lang="ts">
  	import { Form, getFormField } from "formsnap";
  	const { errors } = getFormField();
  </script>

  <Form.Label class={$errors ? "text-red-500" : "text-gray-800"}>
  	<slot />
  </Form.Label>
  ```

  It returns the following type:

  ```ts
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
  };
  ```

## 0.0.2

### Patch Changes

- 8596892: Exposes the following additional values from superforms as slot props via the `<Form.Root/>` component.

  - `allErrors`
  - `delayed`
  - `errors`
  - `submitting`
  - `tainted`
  - `timeout`
  - `validate`
  - `posted`
  - `fields`
  - `message`
  - `options`
  - `formId`
  - `restore`
  - `capture`
  - `constraints`

## 0.0.1

### Patch Changes

- 69b7e73: initial release
