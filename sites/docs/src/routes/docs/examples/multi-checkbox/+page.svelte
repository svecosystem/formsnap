<script lang="ts" context="module">
	import { z } from "zod";

	export const tagsSchema = z.object({
		tags: z.string().min(1).array().min(1),
	});
</script>

<script lang="ts">
	import type { PageData } from "./$types";
	import { superForm } from "sveltekit-superforms";
	import { zod } from "sveltekit-superforms/adapters";
	import * as Form from "$lib/components/ui/form/index.js";
	import * as Select from "$lib/components/ui/select/index.js";
	import SuperDebug from "sveltekit-superforms";
	import { toast } from "svelte-sonner";
	export let data: PageData;

	const form = superForm(data.form, {
		validators: zod(tagsSchema),
		onUpdated: ({ form: formResult }) => {
			toast.success(JSON.stringify(formResult.data, null, 2));
		},
	});
	const { form: formData } = form;
</script>

<form method="POST" use:form.enhance class="flex flex-col gap-4">
	<Form.Field {form} name="tags" let:value>
		<Form.Item let:attrs>
			<Form.Label>Email</Form.Label>
			<Select.Root>
				<Select.Input {value} name={attrs.name} />
				<Select.Trigger {...attrs}>
					<Select.Value placeholder="Select a language" />
				</Select.Trigger>
				<Select.Content></Select.Content>
			</Select.Root>
			<Form.Description></Form.Description>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Button>Submit</Form.Button>
</form>
<SuperDebug data={$formData} />
