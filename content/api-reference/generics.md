---
title: Generics
description: The generic types used throughout the API reference.
---

## Generic Types

Throughout the API reference, you'll see a lot of generic types. The following is a list of those types and what they mean. These types are the same as the ones used in the [Superforms API reference](https://superforms.rocks/api).

````ts
/**
 * The validation schema used to define the structure of
 * and validate the form.
 *
 * @example
 * ```
 * z.object({
 * 	name: z.string(),
 * })
 * ```
 */
T extends AnyZodObject

/**
 * The underlying type of the schema, or the actual
 * data structure of the form.
 *
 * @example
 * ```
 * {
 * 	name: string
 * }
 * ```
 */
S = z.infer<T>

/**
 * A structure where the values in `S` are replaced
 * with the second parameter.
 *
 * @example
 * ```
 * {
 * 	name: string[] | undefined
 * }
 * ```
 */
Nested<S, string | undefined> // Errors for each field in S


/**
 * FormPath and FormPathLeaves are string paths that
 * point to a field in the schema. FormPathLeaves can
 * only be used at the end nodes of the schema.
 *
 * @example
 * ```
 * z.object({
 * 	tags: z.object({
 * 		name: z.string().min(1)
 * 	})
 * })
 * ```
 */
FormPath<S> = "tags[3]"
FormPathLeaves<S> = "tags[3].name"

/**
 * A field in the form.
 */
FormField<S, Prop extends keyof S> = {
  readonly name: Prop;
  value: Writable<S[Prop]>;
  errors?: Writable<ValidationErrors<S[Prop]>>;
  constraints?: Writable<InputConstraints<S[Prop]>>;
};
````
