<script lang="ts" module>
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
	import SuperDebug, { superForm } from "sveltekit-superforms";
	import { zod } from "sveltekit-superforms/adapters";
	import { toast } from "svelte-sonner";
	import * as Form from "$lib/components/ui/form/index.js";
	import * as Select from "$lib/components/ui/select/index.js";

	let { data } = $props();

	const form = superForm(data.form, {
		validators: zod(languageSchema),
		onUpdated: ({ form: formResult }) => {
			toast.success(JSON.stringify(formResult.data, null, 2));
		},
	});
	const { form: formData } = form;
</script>

<form method="POST" use:form.enhance class="flex flex-col gap-4">
	<Form.Field {form} name="language">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Language</Form.Label>
				<Select.Root bind:value={$formData.language}>
					<Select.Trigger {...props}>
						<Select.Value placeholder="Select a language" />
					</Select.Trigger>
					<Select.Content>
						{#each Object.entries(languages) as [value, label]}
							<Select.Item {value}>
								{label}
							</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
				<Form.Description>Help us address you properly.</Form.Description>
				<Form.FieldErrors />
			{/snippet}
		</Form.Control>
	</Form.Field>
	<Form.Button>Submit</Form.Button>
</form>
<SuperDebug data={$formData} />
