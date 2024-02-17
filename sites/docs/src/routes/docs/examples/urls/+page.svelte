<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import * as Form from "$lib/components/ui/form/index.js";
	import { zodClient } from "sveltekit-superforms/adapters";
	import type { PageData } from "./$types.js";
	import { schema } from "./schema.js";
	import SuperDebug from "sveltekit-superforms";
	import { Input } from "$lib/components/ui/input";
	import { Button } from "$lib/components/ui/button";

	export let data: PageData;

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});
	const { form: formData, errors, tainted, constraints } = form;

	function removeUrlByIndex(index: number) {
		$formData.urls = $formData.urls.filter((_, i) => i !== index);
	}
</script>

<form use:form.enhance class="mx-auto flex max-w-md flex-col gap-4" method="POST">
	<Form.Fieldset {form} name="urls">
		<Form.Legend class="pb-2">Enter your URLS</Form.Legend>
		<div class="flex flex-col gap-2">
			{#each $formData.urls as _, i}
				<Form.ArrayField {form} name="urls[{i}]">
					<Form.Control let:attrs>
						<div class="flex items-center gap-2">
							<Input type="url" bind:value={$formData.urls[i]} {...attrs} class="w-full" />
							<Button on:click={() => removeUrlByIndex(i)}>Remove</Button>
						</div>
					</Form.Control>
					<Form.Validation />
				</Form.ArrayField>
			{/each}
		</div>

		<Form.Description>Your URLs will be displayed on your public profile.</Form.Description>
		<Form.Validation />
	</Form.Fieldset>

	<Button on:click={() => ($formData.urls = [...$formData.urls, ""])}>Add URL</Button>

	<Form.Button>Submit</Form.Button>
</form>
<div class="flex flex-col gap-4">
	<div class="flex flex-col gap-2">
		<h1 class="text-lg font-bold">Data:</h1>
		<SuperDebug data={$formData} />
	</div>
	<div class="flex flex-col gap-2">
		<h1 class="text-lg font-bold">Errors:</h1>
		<SuperDebug data={$errors} />
	</div>
	<div class="flex flex-col gap-2">
		<h1 class="text-lg font-bold">Tainted:</h1>
		<SuperDebug data={$tainted} />
	</div>
	<div class="flex flex-col gap-2">
		<h1 class="text-lg font-bold">Tainted:</h1>
		<SuperDebug data={$constraints.urls} />
	</div>
</div>
