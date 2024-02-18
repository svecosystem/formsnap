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
	import { Fieldset, Legend, Label, Control, FieldErrors, Description } from "formsnap";
	import { buttonVariants } from "$lib/components/ui/button/index.js";
	import { cn } from "$lib/utils/index.js";
	import * as Card from "$lib/components/ui/card/index.js";

	export let data: SuperValidated<Infer<typeof schema>>;

	const form = superForm(data, {
		validators: zodClient(schema),
	});
	const { form: formData, enhance } = form;
</script>

<Card.Root>
	<Card.Content class="pt-6">
		<form method="POST" action="?/checkboxGroup" use:enhance class="flex flex-col gap-4">
			<Fieldset {form} name="allergies">
				<Legend class="pb-2 font-medium text-foreground data-[fs-error]:text-destructive"
					>Select any allergies you may have</Legend
				>
				<div class="flex flex-col gap-1 pb-2">
					{#each allergies as allergy}
						<div class="flex items-center gap-3">
							<Control let:attrs>
								<input
									class="accent-brand"
									type="checkbox"
									{...attrs}
									bind:group={$formData.allergies}
									value={allergy}
								/>
								<Label>{allergy}</Label>
							</Control>
						</div>
					{/each}
				</div>
				<Description class="text-muted-foreground">
					We'll ensure to accommodate your dietary restrictions.
				</Description>
				<FieldErrors class="text-destructive" />
			</Fieldset>
			<button type="submit" class={cn(buttonVariants({ variant: "default" }), "self-start")}
				>Submit</button
			>
		</form>
	</Card.Content>
</Card.Root>
