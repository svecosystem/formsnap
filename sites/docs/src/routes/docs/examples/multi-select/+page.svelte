<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { Field, Control, FieldErrors, Label, Description } from "formsnap";
	import { zodClient } from "sveltekit-superforms/adapters";
	import type { PageData } from "./$types.js";
	import { flavors, schema, toppings } from "./schema.js";
	import SuperDebug from "sveltekit-superforms";
	import { toast } from "svelte-sonner";

	export let data: PageData;

	const form = superForm(data.form, {
		validators: zodClient(schema),
		onUpdated: ({ form: fd }) => {
			toast.success(`You submitted ${JSON.stringify(fd.data, null, 2)}`);
		},
		onError: () => {
			toast.error(`There was an error submitting the form!`);
		},
	});
	const { form: formData, enhance } = form;
</script>

<form use:enhance class="mx-auto flex max-w-md flex-col" method="POST">
	<Field {form} name="flavors">
		<Control let:attrs>
			<Label>Flavors</Label>
			<select {...attrs} bind:value={$formData.flavors} multiple>
				{#each flavors as flavor}
					<option value={flavor} selected={$formData.flavors.includes(flavor)}>{flavor}</option>
				{/each}
			</select>
		</Control>
		<Description>Choose which flavors you'd like</Description>
		<FieldErrors />
	</Field>
	<Field {form} name="toppings">
		{#each toppings as topping}
			<Control let:attrs>
				<Label>{topping}</Label>
				<input {...attrs} bind:group={$formData.toppings} type="checkbox" value={topping} />
			</Control>
		{/each}
		<Description>Choose which toppings you'd like.</Description>
		<FieldErrors />
	</Field>
	<button>Submit</button>
</form>

<SuperDebug data={$formData} />
