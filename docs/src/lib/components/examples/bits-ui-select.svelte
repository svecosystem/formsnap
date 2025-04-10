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
	import { defaults, superForm } from "sveltekit-superforms";
	import { zod, zodClient } from "sveltekit-superforms/adapters";
	import { toast } from "svelte-sonner";
	import { Button, DemoContainer, Select } from "@svecodocs/kit";
	import { Field, Control, Description, FieldErrors, Label, controlProps } from "formsnap";

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
	const { form: formData, enhance } = form;

	const selectedLabel = $derived(
		$formData.language ? languages[$formData.language] : "Select a language"
	);
</script>

<DemoContainer>
	<form method="POST" action="?/bitsSelect" use:enhance class="flex flex-col gap-4">
		<Field {form} name="language">
			<Control>
				<Label>Language</Label>
				<Select.Root
					type="single"
					bind:value={$formData.language}
					name={controlProps().name}
				>
					<Select.Trigger {...controlProps()} class="w-[180px]">
						{selectedLabel}
					</Select.Trigger>
					<Select.Content>
						{#each Object.entries(languages) as [value, label]}
							<Select.Item {value}>
								{label}
							</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
				<Description>The docs will be translated to your preferred language.</Description>
				<FieldErrors />
			</Control>
		</Field>
		<Button class="self-start" type="submit">Submit</Button>
	</form>
</DemoContainer>
