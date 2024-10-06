<script lang="ts">
	import SuperDebug, { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { colors, schema } from "./schema.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import * as Form from "$lib/components/ui/form/index.js";
	import Checkbox from "$lib/components/ui/checkbox/checkbox.svelte";
	import * as RadioGroup from "$lib/components/ui/radio-group/index.js";
	import * as Select from "$lib/components/ui/select/index.js";

	let { data } = $props();

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});
	const { form: formData } = form;
</script>

<form use:form.enhance class="mx-auto flex max-w-md flex-col gap-4" method="POST">
	<Form.Field {form} name="name">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Name</Form.Label>
				<Input {...props} bind:value={$formData.name} />
				<Form.Description>Your full legal name</Form.Description>
				<Form.FieldErrors />
			{/snippet}
		</Form.Control>
	</Form.Field>
	<Form.Field {form} name="age">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Age</Form.Label>
				<input {...props} type="number" bind:value={$formData.age} />
				<Form.Description>Enter your age</Form.Description>
				<Form.FieldErrors />
			{/snippet}
		</Form.Control>
	</Form.Field>
	<Form.Field {form} name="email">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Email</Form.Label>
				<Input {...props} type="email" bind:value={$formData.email} />
				<Form.Description>Company email is preferred</Form.Description>
				<Form.FieldErrors />
			{/snippet}
		</Form.Control>
	</Form.Field>
	<Form.Field {form} name="terms">
		<Form.Control class="flex-row items-center gap-4">
			{#snippet children({ props })}
				<Checkbox {...props} bind:checked={$formData.terms} />
				<Form.Label>I accept the terms and conditions</Form.Label>
			{/snippet}
		</Form.Control>
		<Form.Description>If you don't accept the terms, we can't move forward.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="language">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Language</Form.Label>
				<Select.Root bind:value={$formData.language}>
					<Select.Trigger {...props}>
						<Select.Value placeholder="Select a language" />
					</Select.Trigger>
					<Select.Content>
						<Select.Item value="fr">French</Select.Item>
						<Select.Item value="es">Spanish</Select.Item>
						<Select.Item value="en">English</Select.Item>
					</Select.Content>
				</Select.Root>
			{/snippet}
		</Form.Control>
		<Form.Description>Help us address you properly.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="notifications">
		<Form.Control>
			{#snippet children({ props })}
				<legend class="text-sm font-medium">Select your notification preferences</legend>
				<RadioGroup.Root {...props} bind:value={$formData.notifications}>
					{#each ["all", "mentions", "important", "none"] as option}
						<Form.Control class="flex flex-row items-center space-x-2">
							{#snippet children({ props })}
								<RadioGroup.Item {...props} value={option} />
								<Form.Label>{option}</Form.Label>
							{/snippet}
						</Form.Control>
					{/each}
				</RadioGroup.Root>
			{/snippet}
		</Form.Control>

		<Form.Description>We'll only spam your inbox once per hour, don't worry!</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Fieldset {form} name="favoriteColors">
		<Form.Legend>Select your favorite colors</Form.Legend>
		{#each colors as color}
			<Form.Control class="flex-row items-center gap-4">
				{#snippet children({ props })}
					<Checkbox
						{...props}
						checked={$formData.favoriteColors.includes(color)}
						onCheckedChange={(checked) => {
							if (checked === true) {
								$formData.favoriteColors = [...$formData.favoriteColors, color];
							} else {
								$formData.favoriteColors = $formData.favoriteColors.filter(
									(c) => c !== color
								);
							}
						}}
					/>
					<Form.Label>{color}</Form.Label>
				{/snippet}
			</Form.Control>
		{/each}
	</Form.Fieldset>
	<button>Submit</button>
</form>
<SuperDebug data={$formData} />
