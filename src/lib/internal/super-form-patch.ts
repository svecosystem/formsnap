/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * For some reason, when certain types are imported from the package, the entirety of the recursive
 * type is output in the .d.ts file, which causes the compiler to crash. Defining them locally seems
 * to fix this issue, but it's not ideal.
 */

import type {
	z,
	AnyZodObject,
	ZodArray,
	ZodObject,
	ZodEffects,
	ZodUnion,
	ZodUnionOptions,
	ZodOptional,
	ZodDefault,
	ZodNullable,
	ZodTypeAny
} from "zod";
import type { Readable, Writable } from "svelte/store";
import type { Validators as SuperValidators, SvelteActionResult, SveltePage } from "./types.js";
type EntityRecord<T extends AnyZodObject, K> = Record<keyof z.infer<T>, K>;

export type ErrorShape = {
	[K in string]: ErrorShape;
};

export type ZodTypeInfo = {
	zodType: ZodTypeAny;
	originalType: ZodTypeAny;
	isNullable: boolean;
	isOptional: boolean;
	hasDefault: boolean;
	effects: ZodEffects<ZodTypeAny> | undefined;
	defaultValue: unknown;
};

export type Entity<T extends AnyZodObject> = {
	typeInfo: EntityRecord<T, ZodTypeInfo>;
	defaultEntity: z.infer<T>;
	constraints: InputConstraints<T>;
	keys: string[];
	hash: string;
	errorShape: ErrorShape;
};

export type UnwrappedEntity<T> = T extends infer R
	? R extends ZodOptional<infer U>
		? UnwrappedEntity<U>
		: R extends ZodDefault<infer U>
		? UnwrappedEntity<U>
		: R extends ZodNullable<infer U>
		? UnwrappedEntity<U>
		: R extends ZodEffects<infer U>
		? UnwrappedEntity<U>
		: R
	: never;

export type MaybePromise<T> = T | Promise<T>;

export class SuperFormError extends Error {
	constructor(message?: string) {
		super(message);
		Object.setPrototypeOf(this, SuperFormError.prototype);
	}
}

export type UnwrapEffects<T> = T extends ZodEffects<infer U>
	? UnwrapEffects<U>
	: T extends AnyZodObject
	? T
	: never;

export type ZodValidation<T extends AnyZodObject> =
	| T
	| ZodEffects<T>
	| ZodEffects<ZodEffects<T>>
	| ZodEffects<ZodEffects<ZodEffects<T>>>
	| ZodEffects<ZodEffects<ZodEffects<ZodEffects<T>>>>
	| ZodEffects<ZodEffects<ZodEffects<ZodEffects<ZodEffects<T>>>>>;

export type RawShape<T> = T extends ZodObject<infer U> ? U : never;

export type UnwrappedRawShape<
	T extends AnyZodObject,
	P extends keyof RawShape<T>
> = UnwrappedEntity<RawShape<T>[P]>;

export type IntersectArray<T extends readonly unknown[]> = T extends [infer U, ...infer Rest]
	? Rest extends []
		? U
		: U & IntersectArray<Rest>
	: never;

export type IntersectUnion<T extends ZodUnion<ZodUnionOptions>> = T extends ZodUnion<infer O>
	? IntersectArray<O>
	: never;

export type SuperStructArray<T extends AnyZodObject, Data, ArrayData = unknown> = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[Property in keyof RawShape<T>]?: T extends any
		? UnwrappedEntity<T> extends ZodUnion<ZodUnionOptions>
			? SuperStructArray<IntersectUnion<UnwrappedEntity<T>>, Data, ArrayData>
			: UnwrappedRawShape<T, Property> extends AnyZodObject
			? SuperStructArray<UnwrappedRawShape<T, Property>, Data, ArrayData>
			: UnwrappedRawShape<T, Property> extends ZodArray<
					infer A,
					// Need to infer Cardinality for extend to work correctly, even though it's unused.
					// (nonempty changes the cardinality of arrays in the schema)
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					infer Cardinality
			  >
			? ArrayData &
					Record<
						number,
						UnwrappedEntity<A> extends AnyZodObject
							? SuperStructArray<UnwrappedEntity<A>, Data, ArrayData>
							: UnwrappedEntity<A> extends ZodUnion<ZodUnionOptions>
							? SuperStructArray<IntersectUnion<UnwrappedEntity<A>>, Data, ArrayData>
							: Data
					>
			: Data
		: never;
};

export type SuperStruct<T extends AnyZodObject, Data> = Partial<{
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[Property in keyof RawShape<T>]: T extends any
		? UnwrappedEntity<T> extends ZodUnion<ZodUnionOptions>
			? SuperStruct<IntersectUnion<UnwrappedEntity<T>>, Data>
			: UnwrappedRawShape<T, Property> extends AnyZodObject
			? SuperStruct<UnwrappedRawShape<T, Property>, Data>
			: UnwrappedRawShape<T, Property> extends ZodArray<
					infer A,
					// Need to infer Cardinality for extend to work correctly, even though it's unused.
					// (nonempty changes the cardinality of arrays in the schema)
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					infer Cardinality
			  >
			? UnwrappedEntity<A> extends ZodUnion<ZodUnionOptions>
				? SuperStruct<IntersectUnion<UnwrappedEntity<A>>, Data>
				: UnwrappedEntity<A> extends AnyZodObject
				? SuperStruct<UnwrappedEntity<A>, Data>
				: InputConstraint
			: InputConstraint
		: never;
}>;

export type Validator<V> = (value: V) => MaybePromise<string | string[] | null | undefined>;

// Cannot be a SuperStruct due to Property having to be passed on.
// Deep recursive problem fixed thanks to https://www.angularfix.com/2022/01/why-am-i-getting-instantiation-is.html
export type Validators<T extends AnyZodObject> = Partial<{
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[Property in keyof RawShape<T>]: T extends any
		? UnwrappedRawShape<T, Property> extends AnyZodObject
			? Validators<UnwrappedRawShape<T, Property>>
			: UnwrappedRawShape<T, Property> extends ZodArray<infer A>
			? UnwrappedEntity<A> extends AnyZodObject
				? Validators<UnwrappedEntity<A>>
				: Validator<z.infer<T>[Property] extends Array<infer A2> ? A2 : z.infer<T>[Property]>
			: Validator<z.infer<T>[Property]>
		: never;
}>;

export type TaintedFields<T extends AnyZodObject> = SuperStructArray<T, boolean>;

export type ValidationErrors<T extends AnyZodObject> = {
	_errors?: string[];
} & SuperStructArray<T, string[], { _errors?: string[] }>;

export type InputConstraint = Partial<{
	pattern: string; // RegExp
	min: number | string; // Date
	max: number | string; // Date
	required: boolean;
	step: number | "any";
	minlength: number;
	maxlength: number;
}>;

export type InputConstraints<T extends AnyZodObject> = SuperStruct<T, InputConstraint>;

export type SuperValidated<
	T extends ZodValidation<AnyZodObject>,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	M = any
> = {
	valid: boolean;
	posted: boolean;
	errors: ValidationErrors<UnwrapEffects<T>>;
	data: z.infer<UnwrapEffects<T>>;
	constraints: Entity<UnwrapEffects<T>>["constraints"];
	message?: M;
	id?: string;
};

/**
 * @deprecated Use SuperValidated instead.
 */
export type Validation<
	T extends ZodValidation<AnyZodObject>,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	M = any
> = SuperValidated<T, M>;

export type FormField<T extends AnyZodObject, Property extends keyof z.infer<T>> = {
	readonly name: string;
	value: Writable<z.infer<T>[Property]>;
	errors?: Writable<ValidationErrors<T>[Property]>;
	constraints?: Writable<InputConstraints<T>[Property]>;
};

export type FormFields<T extends AnyZodObject> = {
	[Property in keyof z.infer<T>]-?: FormField<T, Property>;
};

export type FieldPath<T extends object> = [keyof T, ...(string | number)[]];

export type SuperFormOptions<T extends ZodValidation<AnyZodObject>, M> = Partial<{
	id: string;
	applyAction: boolean;
	invalidateAll: boolean;
	resetForm: boolean | (() => boolean);
	scrollToError: "auto" | "smooth" | "off" | boolean | ScrollIntoViewOptions;
	autoFocusOnError: boolean | "detect";
	errorSelector: string;
	selectErrorText: boolean;
	stickyNavbar: string;
	taintedMessage: string | false | null;
	SPA:
		| true
		| {
				failStatus?: number;
		  };
	onSubmit: (...params: Parameters<SubmitFunction>) => MaybePromise<unknown | void>;
	onResult: (event: {
		result: SvelteActionResult;
		formEl: HTMLFormElement;
		cancel: () => void;
	}) => MaybePromise<unknown | void>;
	onUpdate: (event: {
		form: SuperValidated<UnwrapEffects<T>, M>;
		formEl: HTMLFormElement;
		cancel: () => void;
	}) => MaybePromise<unknown | void>;
	onUpdated: (event: {
		form: Readonly<SuperValidated<UnwrapEffects<T>, M>>;
	}) => MaybePromise<unknown | void>;
	onError:
		| "apply"
		| ((event: {
				result: {
					type: "error";
					status?: number;
					error: App.Error;
				};
				message: Writable<SuperValidated<UnwrapEffects<T>, M>["message"]>;
		  }) => MaybePromise<unknown | void>);
	dataType: "form" | "json";
	jsonChunkSize: number;
	validators:
		| false
		| SuperValidators<UnwrapEffects<T>>
		| ZodValidation<UnwrapEffects<T>>;
	validationMethod: "auto" | "oninput" | "onblur" | "submit-only";
	defaultValidator: "keep" | "clear";
	customValidity: boolean;
	clearOnSubmit: "errors" | "message" | "errors-and-message" | "none";
	delayMs: number;
	timeoutMs: number;
	multipleSubmits: "prevent" | "allow" | "abort";
	syncFlashMessage?: boolean;
	flashMessage: {
		module: {
			//@ts-expect-error - ''
			getFlash(page: Readable<SveltePage>): Writable<App.PageData["flash"]>;
			updateFlash(page: Readable<SveltePage>, update?: () => Promise<void>): Promise<boolean>;
		};
		onError?: (event: {
			result: {
				type: "error";
				status?: number;
				error: App.Error;
			};
			//@ts-expect-error - ''
			message: Writable<App.PageData["flash"]>;
		}) => MaybePromise<unknown | void>;
		cookiePath?: string;
		cookieName?: string;
	};
	warnings: {
		duplicateId?: boolean;
		noValidationAndConstraints?: boolean;
	};
}>;

export type SubmitFunction<
	Success extends Record<string, unknown> | undefined = Record<string, any>,
	Failure extends Record<string, unknown> | undefined = Record<string, any>
> = (input: {
	action: URL;
	/**
	 * use `formData` instead of `data`
	 * @deprecated
	 */
	data: FormData;
	formData: FormData;
	/**
	 * use `formElement` instead of `form`
	 * @deprecated
	 */
	form: HTMLFormElement;
	formElement: HTMLFormElement;
	controller: AbortController;
	submitter: HTMLElement | null;
	cancel(): void;
}) => MaybePromise<
	| void
	| ((opts: {
			/**
			 * use `formData` instead of `data`
			 * @deprecated
			 */
			data: FormData;
			formData: FormData;
			/**
			 * use `formElement` instead of `form`
			 * @deprecated
			 */
			form: HTMLFormElement;
			formElement: HTMLFormElement;
			action: URL;
			result: SvelteActionResult<Success, Failure>;
			/**
			 * Call this to get the default behavior of a form submission response.
			 * @param options Set `reset: false` if you don't want the `<form>` values to be reset after a successful submission.
			 */
			update(options?: { reset: boolean }): Promise<void>;
	  }) => void)
>;
