<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { Form } from "formsnap";
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
	const { form: formData } = form;
</script>

<form use:form.enhance class="mx-auto flex max-w-md flex-col" method="POST">
	<Form.Field {form} name="flavors">
		<Form.Item let:attrs>
			<Form.Label>Flavors</Form.Label>
			<select {...attrs} bind:value={$formData.flavors} multiple>
				{#each flavors as flavor}
					<option value={flavor} selected={$formData.flavors.includes(flavor)}>{flavor}</option>
				{/each}
			</select>
		</Form.Item>
		<Form.Description>Choose which flavors you'd like</Form.Description>
		<Form.Validation />
	</Form.Field>
	<Form.Field {form} name="toppings">
		{#each toppings as topping}
			<Form.Item let:attrs>
				<Form.Label>{topping}</Form.Label>
				<input {...attrs} bind:group={$formData.toppings} type="checkbox" value={topping} />
			</Form.Item>
		{/each}
		<Form.Description>Choose which toppings you'd like.</Form.Description>
		<Form.Validation />
	</Form.Field>
	<button>Submit</button>
</form>

<SuperDebug data={$formData} />
