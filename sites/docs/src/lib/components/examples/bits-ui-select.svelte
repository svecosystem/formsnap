<script lang="ts" module>
	import { z } from "zod";

	const languages = {
		en: "English",
		es: "Spanish",
		fr: "French",
		de: "German",
		it: "Italian",
		pt: "Portuguese",
		ru: "Russian",
		zh: "Chinese",
		ja: "Japanese",
		ko: "Korean",
	} as const;

	type Language = keyof typeof languages;

	export const schema = z.object({
		language: z.enum(Object.keys(languages) as [Language, ...Language[]]).default("en"),
	});
</script>

<script lang="ts">
	import { superForm, type Infer, type SuperValidated } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import * as Select from "$lib/components/ui/select/index.js";
	import * as Form from "$lib/components/ui/form/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
	import { toast } from "svelte-sonner";

	let {
		data,
	}: {
		data: SuperValidated<Infer<typeof schema>>;
	} = $props();

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
		<form method="POST" action="?/bitsSelect" use:enhance class="flex flex-col gap-4">
			<Form.Field {form} name="language">
				<Form.Control let:attrs>
					<Form.Label>Language</Form.Label>
					<Select.Root
						selected={selectedLanguage}
						onSelectedChange={(s) => {
							s && ($formData.language = s.value);
						}}
					>
						<Select.Input name={attrs.name} />
						<Select.Trigger {...attrs} class="w-[180px]">
							<Select.Value placeholder="Select a language" />
						</Select.Trigger>
						<Select.Content>
							{#each Object.entries(languages) as [value, label]}
								<Select.Item {value} {label} />
							{/each}
						</Select.Content>
					</Select.Root>
					<Form.Description>
						The docs will be translated to your preferred language.
					</Form.Description>
					<Form.FieldErrors />
				</Form.Control>
			</Form.Field>
			<Form.Button class="self-start">Submit</Form.Button>
		</form>
	</Card.Content>
</Card.Root>
