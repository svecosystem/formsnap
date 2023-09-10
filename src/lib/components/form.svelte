<script lang="ts" context="module">
	import type { UnwrapEffects, ZodValidation } from "sveltekit-superforms";
	import type { AnyZodObject } from "zod";

	type Validation = ZodValidation<AnyZodObject>;
</script>

<script lang="ts" generics="T extends Validation = Validation, M = any">
	import type { MyFormOptions } from "..";
	import { superForm } from "sveltekit-superforms/client";
	import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte";
	import type { SuperValidated } from "sveltekit-superforms";

	export let schema: T;
	export let form: SuperValidated<T, M>;
	export let options: MyFormOptions<UnwrapEffects<T>, M> | undefined = undefined;

	const defaultOptions = {
		validators: schema as MyFormOptions<UnwrapEffects<T>, M>["validators"],
		taintedMessage: null
	};

	const optionsWithDefaults = {
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
	<form method="POST" {...$$restProps} use:enhance>
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
