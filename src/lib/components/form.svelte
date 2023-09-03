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
	export let options: Options<typeof form, M> = {
		validators: schema,
		taintedMessage: null
	};
	export let asChild = false;

	export let debug = false;

	const superFrm = superForm(form, options);
	const { enhance, form: formStore } = superFrm;

	const config = {
		form: superFrm,
		schema
	};

	// Adding a variable to mantain tracking of server errors thrown in +page.server.ts action
	let serverError: string | undefined = undefined;
</script>

{#if asChild}
	<!-- Don't know how to manage here yet -->
	<slot {config} formValues={$formStore} form={superFrm} {enhance} />
{:else}
	<form {...$$restProps} use:enhance={{
		// We can add a custom onError handler to the enhance store
		onError: ({result}) => {
			serverError = result.error.message;
		} 
	}}>
		<!-- We could add serverError directly on Form.Root -->
		<slot {config} formValues={$formStore} form={superFrm} {enhance} {serverError} />

		<!-- Or pass it as another slot -->
		<slot name="serverError" {serverError} />	

		{#if debug}
			<SuperDebug data={$formStore} />
		{/if}
	</form>
{/if}
