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

	export const colorsSchema = z.object({
		colors: z.array(z.enum(Object.keys(colors) as [Color, ...Color[]])),
	});
</script>

<script lang="ts">
	import SuperDebug, { superForm } from "sveltekit-superforms";
	import { zod } from "sveltekit-superforms/adapters";
	import { toast } from "svelte-sonner";
	import * as Form from "$lib/components/ui/form/index.js";
	import * as Listbox from "$lib/components/ui/listbox/index.js";

	let { data } = $props();

	const form = superForm(data.form, {
		validators: zod(colorsSchema),
		onUpdated: ({ form: formResult }) => {
			toast.success(JSON.stringify(formResult.data, null, 2));
		},
	});
	const { form: formData } = form;

	const selectedColors = $derived($formData.colors.map((c) => colors[c]));
	const selectedLabel = $derived(
		selectedColors.length ? selectedColors.join(", ") : "Select colors"
	);
</script>

<form method="POST" use:form.enhance class="flex flex-col gap-4">
	<Form.Field {form} name="colors">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Favorite colors</Form.Label>
				<Listbox.Root type="multiple" bind:value={$formData.colors} name={props.name}>
					<Listbox.Trigger {...props}>
						{selectedLabel}
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
	<Form.Button>Submit</Form.Button>
</form>
<SuperDebug data={$formData} />
