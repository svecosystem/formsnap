<script lang="ts" context="module">
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
	import { superForm, type Infer, type SuperValidated } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import * as Form from "$lib/components/ui/form/index.js";
	import * as Select from "$lib/components/ui/select/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
	import { toast } from "svelte-sonner";
	export let data: SuperValidated<Infer<typeof schema>>;

	const form = superForm(data, {
		validators: zodClient(schema),
		onUpdated: ({ form: formResult }) => {
			toast.success(JSON.stringify(formResult.data, null, 2));
		},
	});
	const { form: formData } = form;

	$: selectedColors = $formData.colors.map((c) => ({ label: colors[c], value: c }));
</script>

<Card.Root>
	<Card.Content class="pt-6">
		<form method="POST" action="?/bitsMultiSelect" use:form.enhance class="flex flex-col gap-4">
			<Form.Field {form} name="colors">
				<Form.Control let:attrs>
					<Form.Label>Favorite colors</Form.Label>
					<Select.Root
						multiple
						selected={selectedColors}
						onSelectedChange={(s) => {
							if (s) {
								$formData.colors = s.map((c) => c.value);
							} else {
								$formData.colors = [];
							}
						}}
					>
						{#each $formData.colors as color}
							<input name={attrs.name} hidden value={color} />
						{/each}
						<Select.Trigger {...attrs} class="w-[180px]">
							<Select.Value placeholder="Select colors" />
						</Select.Trigger>
						<Select.Content>
							{#each Object.entries(colors) as [value, label]}
								<Select.Item {value} {label} />
							{/each}
						</Select.Content>
					</Select.Root>
					<Form.Description>We'll use these colors to customize your experience.</Form.Description>
					<Form.FieldErrors />
				</Form.Control>
			</Form.Field>
			<Form.Button class="self-start">Submit</Form.Button>
		</form>
	</Card.Content>
</Card.Root>
