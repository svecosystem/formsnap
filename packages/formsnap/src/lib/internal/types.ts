export type PrimitiveFromIndex<
	T extends Record<string, unknown>,
	U extends string
> = U extends `${infer K}[${string}]`
	? K extends keyof T
		? NonNullable<T[K]> extends Array<infer G>
			? G
			: never
		: never
	: never;
