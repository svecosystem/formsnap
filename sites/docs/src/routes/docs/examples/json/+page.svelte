<script lang="ts" context="module">
	import { z } from "zod";

	export const formSchema = z.object({
		name: z.string(),
		address: z.object({
			country: z.string(),
			state: z.string(),
			city: z.string(),
			streetName: z.string(),
			streetNumber: z.string(),
			building: z.string(),
			apartment: z.string(),
			postcode: z.string().min(4).max(10),
		}),
	});

	export type FormSchema = typeof formSchema;
</script>

<script lang="ts">
	import SuperDebug, { defaults, superForm } from "sveltekit-superforms";
	import { zod } from "sveltekit-superforms/adapters";
	import { Field, FieldErrors, Control, Label } from "formsnap";

	const form = superForm(defaults(zod(formSchema)), {
		SPA: true,
		resetForm: false,
		validators: zod(formSchema),
		dataType: "json",
	});
	const { form: formData, enhance, errors } = form;
</script>

<SuperDebug data={$errors} />
<form method="POST" use:enhance class="flex flex-col gap-2">
	<Field {form} name="address.postcode">
		<Control let:attrs>
			<Label>Postcode</Label>
			<input {...attrs} bind:value={$formData.address.postcode} />
		</Control>
		<FieldErrors class="text-red-500" />
	</Field>

	<button class="mt-6">Submit</button>
</form>
