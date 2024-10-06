<script lang="ts">
	import SuperDebug, { superForm } from "sveltekit-superforms";
	import { Control, Description, Field, FieldErrors, Fieldset, Label, Legend } from "formsnap";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { allergies, schema, themes } from "./schema.js";

	let { data } = $props();

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});
	const { form: formData, enhance } = form;
</script>

<form use:enhance class="mx-auto flex max-w-md flex-col" method="POST">
	<Field {form} name="email">
		<Control>
			{#snippet children({ props })}
				<Label>Email</Label>
				<input {...props} type="email" bind:value={$formData.email} />
			{/snippet}
		</Control>
		<Description>Company email is preferred</Description>
		<FieldErrors />
	</Field>
	<Field {form} name="bio">
		<Control>
			{#snippet children({ props })}
				<Label>Bio</Label>
				<textarea {...props} bind:value={$formData.bio}></textarea>
			{/snippet}
		</Control>
		<Description>Tell us a bit about yourself.</Description>
		<FieldErrors />
	</Field>
	<Field {form} name="language">
		<Control>
			{#snippet children({ props })}
				<Label>Language</Label>
				<select {...props} bind:value={$formData.language}>
					<option value="fr">French</option>
					<option value="es">Spanish</option>
					<option value="en">English</option>
				</select>
			{/snippet}
		</Control>
		<Description>Help us address you properly.</Description>
		<FieldErrors />
	</Field>
	<Fieldset {form} name="theme">
		<Legend>Select your theme</Legend>
		{#each themes as theme}
			<Control>
				{#snippet children({ props })}
					<Label>{theme}</Label>
					<input {...props} type="radio" value={theme} bind:group={$formData.theme} />
				{/snippet}
			</Control>
		{/each}
		<FieldErrors />
	</Fieldset>
	<Field {form} name="marketingEmails">
		<Control>
			{#snippet children({ props })}
				<input {...props} type="checkbox" bind:checked={$formData.marketingEmails} />
				<Label>I want to receive marketing emails</Label>
			{/snippet}
		</Control>
		<Description>Stay up to date with our latest news and offers.</Description>
		<FieldErrors />
	</Field>
	<Fieldset {form} name="allergies">
		<Legend>Select your allergies</Legend>
		{#each allergies as allergy}
			<Control>
				{#snippet children({ props })}
					<input
						{...props}
						type="checkbox"
						bind:group={$formData.allergies}
						value={allergy}
					/>
					<Label>{allergy}</Label>
				{/snippet}
			</Control>
		{/each}
		<Description>When we provide lunch, we'll accommodate your needs.</Description>
		<FieldErrors />
	</Fieldset>
	<button>Submit</button>
</form>
<SuperDebug data={$formData} />
