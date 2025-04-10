<svelte:options runes />

<script lang="ts" module>
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
	import { defaults, superForm } from "sveltekit-superforms";
	import { zod, zodClient } from "sveltekit-superforms/adapters";
	import {
		Control,
		controlProps,
		Description,
		FieldErrors,
		Fieldset,
		Label,
		Legend,
	} from "formsnap";
	import { toast } from "svelte-sonner";
	import { Button, DemoContainer } from "@svecodocs/kit";

	const form = superForm(defaults(zod(schema)), {
		validators: zodClient(schema),
		onUpdated: ({ form: fd }) => {
			if (fd.valid) {
				toast.success(`You submitted:${JSON.stringify(fd.data, null, 2)}`);
			} else {
				toast.error("Please fix the errors in the form.");
			}
		},
	});
	const { form: formData, enhance } = form;
</script>

<DemoContainer>
	<form method="POST" action="?/checkboxGroup" use:enhance class="flex flex-col gap-4">
		<Fieldset {form} name="allergies">
			<Legend class="text-foreground data-[fs-error]:text-destructive pb-2 font-medium"
				>Select any allergies you may have</Legend
			>
			<div class="flex flex-col gap-1 pb-2">
				{#each allergies as allergy}
					<div class="flex items-center gap-3">
						<Control>
							<input
								class="accent-brand"
								type="checkbox"
								{...controlProps()}
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
		<Button type="submit" class="self-start">Submit</Button>
	</form>
</DemoContainer>
