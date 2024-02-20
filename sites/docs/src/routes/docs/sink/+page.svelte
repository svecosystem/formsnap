<script lang="ts" context="module">
	import { z } from "zod";

	const allergies = ["None", "Peanuts", "Shellfish", "Lactose", "Gluten"] as const;
	type Allergy = (typeof allergies)[number];
	export const schema = z.object({
		allergies: z.array(z.enum(allergies)).min(1, "If you don't have any allergies, select 'None'."),
	});
</script>

<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import SuperDebug from "sveltekit-superforms";
	import * as Form from "$lib/components/ui/form";
	import { Checkbox } from "$lib/components/ui/checkbox";

	export let data;

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});
	const { form: formData, enhance } = form;

	function addAllergy(allergy: Allergy) {
		$formData.allergies = [...$formData.allergies, allergy];
	}
	function removeAllergy(allergy: Allergy) {
		$formData.allergies = $formData.allergies.filter((a) => a !== allergy);
	}
</script>

<form method="POST" use:enhance class="space-y-8">
	<Form.Fieldset {form} name="allergies" class="flex flex-col gap-2">
		<Form.Legend>Select your allergies</Form.Legend>
		<Form.Description>We'll use this information to ensure your meals are safe.</Form.Description>
		{#each allergies as allergy}
			{@const checked = $formData.allergies.includes(allergy)}
			<Form.Control let:attrs>
				<!-- We pull out the name so the checkbox's default input doesn't receive it as a prop -->
				{@const { name, ...rest } = attrs}
				<div class="flex items-center gap-3">
					<Checkbox
						{...rest}
						{checked}
						onCheckedChange={(v) => {
							v ? addAllergy(allergy) : removeAllergy(allergy);
						}}
					/>
					<Form.Label>{allergy}</Form.Label>
					<input hidden type="checkbox" {name} value={allergy} {checked} />
				</div>
			</Form.Control>
		{/each}
	</Form.Fieldset>
	<Form.Button>Submit</Form.Button>
</form>
<SuperDebug data={$formData} />
