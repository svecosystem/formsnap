<svelte:options runes />

<script lang="ts" module>
	import { z } from "zod";

	const flavors = ["vanilla", "chocolate", "cookies and cream", "strawberry"] as const;
	const toppings = ["sprinkles", "hot fudge", "whipped cream", "cherry"] as const;

	// Define outside the load function so the adapter can be cached
	export const schema = z
		.object({
			scoops: z.number().min(1).default(1),
			flavors: z.array(z.enum(flavors)).min(1, "You must select at least one flavor."),
			toppings: z.array(z.enum(toppings)).max(2, "You can only select up to two toppings."),
		})
		.refine((data) => !(data.flavors.length > data.scoops), {
			message: "You can only select as many flavors as you have scoops.",
			path: ["flavors"],
		});
</script>

<script lang="ts">
	import { defaults, superForm } from "sveltekit-superforms";
	import { zod, zodClient } from "sveltekit-superforms/adapters";
	import { Control, Field, FieldErrors, Label, Description, controlProps } from "formsnap";
	import { toast } from "svelte-sonner";
	import { DemoContainer, Button, NativeSelect } from "@svecodocs/kit";

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
	const { form: formData } = form;
</script>

<DemoContainer>
	<form method="POST" action="?/multipleSelect" use:form.enhance class="flex flex-col gap-3">
		<Field {form} name="scoops">
			<Control>
				<div class="flex flex-col items-start gap-1.5">
					<Label>Number of scoops</Label>
					<NativeSelect {...controlProps()} bind:value={$formData.scoops}>
						{#each Array.from({ length: 5 }, (_, i) => i + 1) as num}
							<option value={num}>{num} {num === 1 ? "Scoop" : "Scoops"} </option>
						{/each}
					</NativeSelect>
				</div>
			</Control>
			<FieldErrors class="text-destructive dark:text-red-400" />
		</Field>
		<Field {form} name="flavors">
			<div class="flex flex-col gap-1">
				<Control>
					<div class="flex flex-col items-start gap-1.5">
						<Label>Select your flavors</Label>
						<select
							multiple
							bind:value={$formData.flavors}
							{...controlProps()}
							class="w-[200px]"
						>
							{#each flavors as flavor}
								<option value={flavor} selected={$formData.flavors.includes(flavor)}
									>{flavor}</option
								>
							{/each}
						</select>
					</div>
				</Control>
				<Description>Only select one flavor per scoop.</Description>
				<FieldErrors class="text-destructive dark:text-red-400" />
			</div>
		</Field>
		<Field {form} name="toppings">
			<Control>
				<div class="flex flex-col items-start gap-1.5">
					<Label>Select your toppings</Label>
					<select
						multiple
						bind:value={$formData.toppings}
						{...controlProps()}
						class="w-[200px]"
					>
						{#each toppings as topping}
							<option value={topping} selected={$formData.toppings.includes(topping)}
								>{topping}</option
							>
						{/each}
					</select>
				</div>
			</Control>
			<FieldErrors class="text-destructive dark:text-red-400" />
		</Field>
		<Button class="self-start">Submit</Button>
	</form>
</DemoContainer>
