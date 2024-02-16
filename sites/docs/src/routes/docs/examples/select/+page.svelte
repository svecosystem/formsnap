<script lang="ts" context="module">
	import { z } from "zod";

	const languages = {
		en: "English",
		es: "Spanish",
		fr: "French",
	} as const;

	type Language = keyof typeof languages;

	export const languageSchema = z.object({
		language: z.enum(Object.keys(languages) as [Language, ...Language[]]).default("en"),
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
		validators: zod(languageSchema),
		onUpdated: ({ form: formResult }) => {
			toast.success(JSON.stringify(formResult.data, null, 2));
		},
	});
	const { form: formData } = form;
</script>

<form method="POST" use:form.enhance class="flex flex-col gap-4">
	<Form.Field {form} name="language" let:value>
		<Form.Control let:attrs>
			<Form.Label>Email</Form.Label>
			<Select.Root
				selected={{ label: languages[$formData.language], value: $formData.language }}
				onSelectedChange={(s) => {
					s && ($formData.language = s.value);
				}}
			>
				<Select.Input {value} name={attrs.name} />
				<Select.Trigger {...attrs}>
					<Select.Value placeholder="Select a language" />
				</Select.Trigger>
				<Select.Content>
					{#each Object.entries(languages) as [value, label]}
						<Select.Item {value} {label} />
					{/each}
				</Select.Content>
			</Select.Root>
			<Form.Description></Form.Description>
			<Form.Validation />
		</Form.Control>
	</Form.Field>
	<Form.Button>Submit</Form.Button>
</form>
<SuperDebug data={$formData} />
