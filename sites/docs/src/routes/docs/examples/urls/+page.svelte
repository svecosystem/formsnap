<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import * as Form from "$lib/components/ui/form/index.js";
	import { zodClient } from "sveltekit-superforms/adapters";
	import type { PageData } from "./$types.js";
	import { schema } from "./schema.js";
	import SuperDebug from "sveltekit-superforms";

	export let data: PageData;

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});
	const { form: formData } = form;
</script>

<form use:form.enhance class="mx-auto flex max-w-md flex-col gap-4" method="POST">
	<Form.Fieldset {form} name="urls">
		<Form.Legend>Enter your URLS</Form.Legend>
		<Form.Description>Your URLs will be displayed on your public profile.</Form.Description>
		<Form.Validation />
	</Form.Fieldset>

	<button>Submit</button>
</form>
<SuperDebug data={$formData} />
