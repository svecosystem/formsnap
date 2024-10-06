<script lang="ts" module>
	import { z } from "zod";

	const colors = {
		blu: "Blue",
		red: "Red",
		grn: "Green",
		ylw: "Yellow",
		blk: "Black",
	} as const;

	type Color = keyof typeof colors;

	export const schema = z.object({
		colors: z
			.array(z.enum(Object.keys(colors) as [Color, ...Color[]]))
			.min(1, "Select at least one number."),
	});
</script>

<script lang="ts">
	import { type Infer, type SuperValidated, superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { toast } from "svelte-sonner";
	import * as Form from "$lib/components/ui/form/index.js";
	import * as Listbox from "$lib/components/ui/listbox/index.js";
	import * as Card from "$lib/components/ui/card/index.js";

	let { data }: { data: SuperValidated<Infer<typeof schema>> } = $props();

	const form = superForm(data, {
		validators: zodClient(schema),
		onUpdate: ({ form: fd }) => {
			if (fd.valid) {
				toast.success(`You submitted:${JSON.stringify(fd.data, null, 2)}`);
			} else {
				toast.error("Please fix the errors in the form.");
			}
		},
	});
	const { form: formData } = form;

	const selectedColors = $derived(
		$formData.colors.length ? $formData.colors.map((c) => colors[c]).join(",") : "Select colors"
	);
</script>

<Card.Root>
	<Card.Content class="pt-6">
		<form method="POST" action="?/bitsMultiSelect" use:form.enhance class="flex flex-col gap-4">
			<Form.Field {form} name="colors">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Favorite colors</Form.Label>
						<Listbox.Root
							type="multiple"
							bind:value={$formData.colors}
							name={props.name}
						>
							<Listbox.Trigger type="button" {...props} class="w-[180px]">
								{selectedColors}
							</Listbox.Trigger>
							<Listbox.Content>
								{#each Object.entries(colors) as [value, label]}
									<Listbox.Item {value} {label} />
								{/each}
							</Listbox.Content>
						</Listbox.Root>
						<Form.Description>
							We'll use these colors to customize your experience.
						</Form.Description>
						<Form.FieldErrors />
					{/snippet}
				</Form.Control>
			</Form.Field>
			<Form.Button class="self-start">Submit</Form.Button>
		</form>
	</Card.Content>
</Card.Root>
