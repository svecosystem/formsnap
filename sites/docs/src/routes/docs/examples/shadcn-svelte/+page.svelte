<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import * as Form from "$lib/components/ui/form/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { zodClient } from "sveltekit-superforms/adapters";
	import type { PageData } from "./$types.js";
	import { colors, schema } from "./schema.js";
	import Checkbox from "$lib/components/ui/checkbox/checkbox.svelte";
	import SuperDebug from "sveltekit-superforms";
	import * as RadioGroup from "$lib/components/ui/radio-group/index.js";
	import * as Select from "$lib/components/ui/select/index.js";

	export let data: PageData;

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});
	const { form: formData } = form;

	const languageMap = {
		fr: "French",
		es: "Spanish",
		en: "English",
	} as const;
</script>

<form use:form.enhance class="mx-auto flex max-w-md flex-col gap-4" method="POST">
	<Form.Field {form} name="name">
		<Form.Control let:attrs>
			<Form.Label>Name</Form.Label>
			<Input {...attrs} bind:value={$formData.name} />
			<Form.Description>Your full legal name</Form.Description>
			<Form.FieldErrors />
		</Form.Control>
	</Form.Field>
	<Form.Field {form} name="age">
		<Form.Control let:attrs>
			<Form.Label>Age</Form.Label>
			<input {...attrs} type="number" bind:value={$formData.age} />
			<Form.Description>Enter your age</Form.Description>
			<Form.FieldErrors />
		</Form.Control>
	</Form.Field>
	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<Form.Label>Email</Form.Label>
			<Input {...attrs} type="email" bind:value={$formData.email} />
			<Form.Description>Company email is preferred</Form.Description>
			<Form.FieldErrors />
		</Form.Control>
	</Form.Field>
	<Form.Field {form} name="terms">
		<Form.Control let:attrs class="flex-row items-center gap-4">
			<Checkbox {...attrs} bind:checked={$formData.terms} />
			<Form.Label>I accept the terms and conditions</Form.Label>
		</Form.Control>
		<Form.Description>If you don't accept the terms, we can't move forward.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="language">
		<Form.Control let:attrs>
			<Form.Label>Language</Form.Label>
			<Select.Root
				selected={{ value: $formData.language, label: languageMap[$formData.language] }}
				onSelectedChange={(selected) => {
					if (selected) {
						$formData.language = selected.value;
					}
				}}
			>
				<Select.Trigger {...attrs}>
					<Select.Value placeholder="Select a language" />
				</Select.Trigger>
				<Select.Content>
					<Select.Item value="fr" label="French" />
					<Select.Item value="es" label="Spanish" />
					<Select.Item value="en" label="English" />
				</Select.Content>
			</Select.Root>
		</Form.Control>
		<Form.Description>Help us address you properly.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="notifications">
		<Form.Control let:attrs>
			<legend class="text-sm font-medium">Select your notification preferences</legend>
			<RadioGroup.Root {...attrs} bind:value={$formData.notifications}>
				{#each ["all", "mentions", "important", "none"] as option}
					<Form.Control let:attrs class="flex flex-row items-center space-x-2">
						<RadioGroup.Item {...attrs} value={option} />
						<Form.Label>{option}</Form.Label>
					</Form.Control>
				{/each}
			</RadioGroup.Root>
		</Form.Control>

		<Form.Description>We'll only spam your inbox once per hour, don't worry!</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Fieldset {form} name="favoriteColors">
		<Form.Legend>Select your favorite colors</Form.Legend>
		{#each colors as color}
			<Form.Control let:attrs class="flex-row items-center gap-4">
				<Checkbox
					{...attrs}
					checked={$formData.favoriteColors.includes(color)}
					onCheckedChange={(checked) => {
						if (checked === true) {
							$formData.favoriteColors = [...$formData.favoriteColors, color];
						} else {
							$formData.favoriteColors = $formData.favoriteColors.filter((c) => c !== color);
						}
					}}
				/>
				<Form.Label>{color}</Form.Label>
			</Form.Control>
		{/each}
	</Form.Fieldset>
	<button>Submit</button>
</form>
<SuperDebug data={$formData} />
