<svelte:options runes />

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
	import { defaults, superForm } from "sveltekit-superforms";
	import { zod, zodClient } from "sveltekit-superforms/adapters";
	import { toast } from "svelte-sonner";
	import { Field, Control, Description, FieldErrors, Label, controlProps } from "formsnap";
	import { DemoContainer, Button, Select } from "@svecodocs/kit";

	const form = superForm(defaults(zod(schema)), {
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
				<Label>Favorite colors</Label>
				<Select.Root
					type="multiple"
					bind:value={$formData.colors}
					name={controlProps().name}
				>
					<Select.Trigger type="button" {...controlProps()} class="w-[180px]">
						{selectedColors}
					</Select.Trigger>
					<Select.Content>
						{#each Object.entries(colors) as [value, label]}
							<Select.Item {value} {label} />
						{/each}
					</Select.Content>
				</Select.Root>
			</Control>
			<Description>We'll use these colors to customize your experience.</Description>
			<FieldErrors />
		</Field>
		<Button class="self-start" type="submit">Submit</Button>
	</form>
</DemoContainer>
