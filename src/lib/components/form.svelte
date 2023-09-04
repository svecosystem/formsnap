<script lang="ts" context="module">
	import type { UnwrapEffects, ZodValidation } from "sveltekit-superforms";
	import type { AnyZodObject } from "zod";

	type Validation = ZodValidation<AnyZodObject>;
</script>

<script lang="ts" generics="T extends Validation = Validation, M = any">
	import type { FormProps } from "../types.js";
	import { superForm, type FormOptions } from "sveltekit-superforms/client";
	import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte";

	import type { SuperValidated } from "sveltekit-superforms";

	type Options<T, M> = FormOptions<UnwrapEffects<T>, M>;

	type $$Props = FormProps<T, M>;

	export let schema: T;
	export let form: SuperValidated<T, M>;
	export let namespace = 'formsnap';

	const defaultOptions: Options<typeof form, M> = {
		validators: schema,
		taintedMessage: null
	};

	export let options: Options<typeof form, M> = defaultOptions;

	const optionsWithDefaults: Options<typeof form, M> = {
		...defaultOptions,
		...options
	};

	export let asChild = false;
	export let debug = false;

	const superFrm = superForm(form, optionsWithDefaults);
	const {
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
		options: formOptions,
		formId,
		restore,
		capture,
		constraints
	} = superFrm;

	const config = {
		form: superFrm,
		schema
	};
</script>

{#if asChild}
	<slot
		{config}
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
		{formOptions}
		formId={$formId}
		{restore}
		{capture}
		message={$message}
	/>
{:else}
	<form {...$$restProps} use:enhance class={namespace}>
		<slot
			{config}
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
			{formOptions}
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
