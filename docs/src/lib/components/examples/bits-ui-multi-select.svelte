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
	import { Select } from "bits-ui";
	import { Field, Control, Description, FieldErrors, Label } from "formsnap";
	import { DemoContainer, Button } from "@svecodocs/kit";

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

<DemoContainer>
	<form method="POST" action="?/bitsMultiSelect" use:form.enhance class="flex flex-col gap-4">
		<Field {form} name="colors">
			<Control>
				{#snippet children({ props })}
					<Label>Favorite colors</Label>
					<Select.Root type="multiple" bind:value={$formData.colors} name={props.name}>
						<Select.Trigger type="button" {...props} class="w-[180px]">
							{selectedColors}
						</Select.Trigger>
						<Select.Content>
							{#each Object.entries(colors) as [value, label]}
								<Select.Item {value} {label} />
							{/each}
						</Select.Content>
					</Select.Root>
					<Description>We'll use these colors to customize your experience.</Description>
					<FieldErrors />
				{/snippet}
			</Control>
		</Field>
		<Button class="self-start" type="submit">Submit</Button>
	</form>
</DemoContainer>
