<script lang="ts" context="module">
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
		.refine((data) => (data.flavors.length > data.scoops ? false : true), {
			message: "You can only select as many flavors as you have scoops.",
			path: ["flavors"],
		});
</script>

<script lang="ts">
	import { superForm, type Infer, type SuperValidated } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { Field, Control } from "formsnap";
	import * as Card from "$lib/components/ui/card/index.js";
	import * as Form from "$lib/components/ui/form/index.js";
	import { toast } from "svelte-sonner";

	export let data: SuperValidated<Infer<typeof schema>>;

	const form = superForm(data, {
		validators: zodClient(schema),
		onUpdated: ({ form: fd }) => {
			if (fd.valid) {
				toast.success("You submitted:" + JSON.stringify(fd.data, null, 2));
			} else {
				toast.error("Please fix the errors in the form.");
			}
		},
	});
	const { form: formData, enhance } = form;
</script>

<Card.Root>
	<Card.Content class="pt-6">
		<form method="POST" action="?/multipleSelect" use:enhance class="flex flex-col gap-3">
			<Field {form} name="scoops">
				<Control let:attrs>
					<div class="flex flex-col items-start gap-1.5">
						<Form.Label>Number of scoops</Form.Label>
						<select {...attrs} bind:value={$formData.scoops} class="w-[200px]">
							{#each Array.from({ length: 5 }, (_, i) => i + 1) as num}
								<option value={num}>{num} {num === 1 ? "Scoop" : "Scoops"} </option>
							{/each}
						</select>
					</div>
				</Control>
				<Form.FieldErrors />
			</Field>
			<Field {form} name="flavors">
				<div class="flex flex-col gap-1">
					<Control let:attrs>
						<div class="flex flex-col items-start gap-1.5">
							<Form.Label>Select your flavors</Form.Label>
							<select multiple bind:value={$formData.flavors} {...attrs} class="w-[200px]">
								{#each flavors as flavor}
									<option value={flavor} selected={$formData.flavors.includes(flavor)}
										>{flavor}</option
									>
								{/each}
							</select>
						</div>
					</Control>
					<Form.Description>Only select one flavor per scoop.</Form.Description>
					<Form.FieldErrors />
				</div>
			</Field>
			<Field {form} name="toppings">
				<Control let:attrs>
					<div class="flex flex-col items-start gap-1.5">
						<Form.Label>Select your toppings</Form.Label>
						<select multiple bind:value={$formData.toppings} {...attrs} class="w-[200px]">
							{#each toppings as topping}
								<option value={topping} selected={$formData.toppings.includes(topping)}
									>{topping}</option
								>
							{/each}
						</select>
					</div>
				</Control>
				<Form.FieldErrors />
			</Field>
			<Form.Button class="self-start">Submit</Form.Button>
		</form>
	</Card.Content>
</Card.Root>
