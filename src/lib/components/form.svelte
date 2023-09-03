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
</script>

{#if asChild}
	<slot {config} formValues={$formStore} form={superFrm} {enhance} />
{:else}
	<form {...$$restProps} use:enhance>
		<slot {config} formValues={$formStore} form={superFrm} {enhance} />
		{#if debug}
			<SuperDebug data={$formStore} />
		{/if}
	</form>
{/if}
