<script lang="ts" context="module">
	import { z } from "zod";

	export const allergies = ["None", "Peanuts", "Shellfish", "Lactose", "Gluten"] as const;

	export const schema = z.object({
		allergies: z
			.array(z.enum(allergies))
			.min(1, "If you don't have any allergies, select 'None'.")
			.refine((v) => {
				return v.includes("None") ? v.length === 1 : true;
			}, "If you select 'None', you can't select any other allergies."),
	});
</script>

<script lang="ts">
	import { superForm, type Infer, type SuperValidated } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import SuperDebug from "sveltekit-superforms";

	import { Fieldset, Legend, Label, Control, FieldErrors, Description } from "formsnap";

	export let data: SuperValidated<Infer<typeof schema>>;

	const form = superForm(data, {
		validators: zodClient(schema),
	});
	const { form: formData, enhance, errors: formErrors } = form;
</script>

<form method="POST" use:enhance>
	<Fieldset {form} name="allergies">
		<Legend>Select any allergies you may have</Legend>
		<div class="flex flex-col gap-1">
			{#each allergies as allergy}
				<div class="flex items-center gap-3">
					<Control let:attrs>
						<input type="checkbox" {...attrs} bind:group={$formData.allergies} value={allergy} />
						<Label>{allergy}</Label>
					</Control>
				</div>
			{/each}
		</div>
		<Description>We'll ensure to accommodate your dietary restrictions.</Description>
		<FieldErrors />
	</Fieldset>
	<button type="submit">Submit</button>
</form>

<SuperDebug data={$formData} />

<SuperDebug data={$formErrors} />

<style>
	:global([data-fs-field-error]) {
		color: red;
	}
</style>
