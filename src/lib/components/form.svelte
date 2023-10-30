<script lang="ts" context="module">
	import type { ZodValidation } from "sveltekit-superforms";
	import type { AnyZodObject } from "zod";
	import type { Form } from "@/lib/internal/index.js";

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type Validation = ZodValidation<AnyZodObject>;
	type T = unknown;
	type M = unknown;
</script>

<script lang="ts" generics="T extends Validation = Validation, M = any">
	import { FORM_FIELD_SCHEMA } from "../helpers/get-form-schema";

	import type { HTMLFormAttributes } from "svelte/elements";
	import { setContext } from "svelte";
	import type { FormEvents, FormOptions } from "@/lib/types.js";
	import { FORM_CONTEXT } from "@/lib/internal/index.js";
	import { superForm } from "sveltekit-superforms/client";
	import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte";
	import type { SuperValidated } from "sveltekit-superforms";

	type $$Events = FormEvents;

	type $$Props = {
		schema: T;
		form: SuperValidated<T, M>;
		options?: FormOptions<T, M>;
		asChild?: boolean;
		debug?: boolean;
	} & HTMLFormAttributes;

	export let schema: T;
	export let form: SuperValidated<T, M>;
	export let options: FormOptions<T, M> = {};

	const defaultOptions = {
		validators: schema as FormOptions<T, M>["validators"],
		taintedMessage: null
	};

	$: optionsWithDefaults = {
		...defaultOptions,
		...options
	};

	export let asChild = false;
	export let debug = false;

	$: superFrm = superForm(form, optionsWithDefaults);

	setContext(FORM_CONTEXT, superFrm);
	setContext(FORM_FIELD_SCHEMA, schema);

	$: ({
		enhance,
		form: formStore,
		allErrors,
		delayed,
		errors,
		reset,
		submitting,
		tainted,
		timeout,
		validate,
		posted,
		fields,
		message,
		formId,
		restore,
		capture
	} = superFrm);

	let config: Form<T> = {
		form: superFrm,
		schema
	};

	$: config = {
		form: superFrm,
		schema
	};

	$: attrs = {
		"data-fs-form": "",
		"data-fs-error": $errors ? "" : undefined
	};
</script>

{#if asChild}
	<slot
		{config}
		formValues={$formStore}
		{formStore}
		form={superFrm}
		{enhance}
		allErrors={$allErrors}
		delayed={$delayed}
		errors={$errors}
		{reset}
		submitting={$submitting}
		tainted={$tainted}
		timeout={$timeout}
		{validate}
		posted={$posted}
		{fields}
		formId={$formId}
		{restore}
		{capture}
		message={$message}
	/>
{:else}
	<form
		method="POST"
		{...$$restProps}
		use:enhance
		on:input
		on:change
		on:formdata
		on:submit
		on:reset
		{...attrs}
	>
		<slot
			{config}
			{formStore}
			formValues={$formStore}
			form={superFrm}
			{enhance}
			allErrors={$allErrors}
			delayed={$delayed}
			errors={$errors}
			{reset}
			submitting={$submitting}
			tainted={$tainted}
			timeout={$timeout}
			{validate}
			posted={$posted}
			{fields}
			formId={$formId}
			{restore}
			{capture}
			message={$message}
		/>
		{#if debug}
			<SuperDebug data={$formStore} />
		{/if}
	</form>
{/if}
