---
title: Form.Root
description: API documentation for the Form.Root component.
---

The `<Form.Root />` component is the root component of your form. It is responsible for scoping the form state. By default, it will render a `<form>` element and in addition to the library specific props, accepts all props that a `<form>` element would accept.

## Props

| Prop      | Type                 | Description                                                                                                         |
| --------- | -------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `form`    | `SuperValidated`     | The form returned from a load function which has passed through the `superValidate` function.                       |
| `schema`  | `AnyZodObject`       | The schema used to validate the form.                                                                               |
| `options` | `Options`            | The options used to configure the form. See [here](https://superforms.rocks/api#superform-options) for more details |
| `...`     | `HTMLFormAttributes` | Any other props will be passed to the `<form>` element.                                                             |

## Slot Props

| Prop         | Type                                     | Description                                                                                                                            |
| ------------ | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `config`     | `FormConfig`                             | An object containing the `form` and `schema` which should be passed to the children `<Form.Field />` components.                       |
| `formValues` | `Object`                                 | An object containing the current values of the form.                                                                                   |
| `enhance`    | `Action`                                 | An action which can be used to progressively enhance the form. See [here](https://superforms.rocks/concepts/enhance) for more details. |
| `allErrors`  | `{ path: string; messages: string[] }[]` | An array of all errors in the form.                                                                                                    |
| `delayed`    | `boolean`                                | A boolean indicating whether the form is in a delayed state. See [here](https://superforms.rocks/concepts/timers) for more details.    |
| `errors`     | `Record<Path, string[]>`                 | An object containing the errors for each field in the form.                                                                            |
