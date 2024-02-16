<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { Form } from "formsnap";
	import { zodClient } from "sveltekit-superforms/adapters";
	import type { PageData } from "./$types.js";
	import { allergies, schema, themes } from "./schema.js";
	import SuperDebug from "sveltekit-superforms";

	export let data: PageData;

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});
	const { form: formData } = form;
</script>

<form use:form.enhance class="mx-auto flex max-w-md flex-col" method="POST">
	<Form.Field {form} name="email">
		<Form.Item let:attrs>
			<Form.Label>Email</Form.Label>
			<input {...attrs} type="email" bind:value={$formData.email} />
		</Form.Item>
		<Form.Description>Company email is preferred</Form.Description>
		<Form.Validation />
	</Form.Field>
	<Form.Field {form} name="bio">
		<Form.Item let:attrs>
			<Form.Label>Bio</Form.Label>
			<textarea {...attrs} bind:value={$formData.bio} />
		</Form.Item>
		<Form.Description>Tell us a bit about yourself.</Form.Description>
		<Form.Validation />
	</Form.Field>
	<Form.Field {form} name="language">
		<Form.Item let:attrs>
			<Form.Label>Language</Form.Label>
			<select {...attrs} bind:value={$formData.language}>
				<option value="fr">French</option>
				<option value="es">Spanish</option>
				<option value="en">English</option>
			</select>
		</Form.Item>
		<Form.Description>Help us address you properly.</Form.Description>
		<Form.Validation />
	</Form.Field>
	<Form.Field {form} name="theme">
		<legend>Select your theme</legend>
		{#each themes as theme}
			<Form.Item let:attrs>
				<Form.Label>{theme}</Form.Label>
				<input {...attrs} type="radio" value={theme} bind:group={$formData.theme} />
			</Form.Item>
		{/each}
		<Form.Description>We prefer dark mode, but the choice is yours.</Form.Description>
		<Form.Validation />
	</Form.Field>
	<Form.Field {form} name="marketingEmails">
		<Form.Item let:attrs>
			<input {...attrs} type="checkbox" bind:checked={$formData.marketingEmails} />
			<Form.Label>I want to receive marketing emails</Form.Label>
		</Form.Item>
		<Form.Description>Stay up to date with our latest news and offers.</Form.Description>
		<Form.Validation />
	</Form.Field>
	<Form.Field {form} name="allergies">
		{#each allergies as allergy}
			<Form.Item let:attrs>
				<input {...attrs} type="checkbox" bind:group={$formData.allergies} value={allergy} />
				<Form.Label>{allergy}</Form.Label>
			</Form.Item>
		{/each}
		<Form.Description>When we provide lunch, we'll accommodate your needs.</Form.Description>
		<Form.Validation />
	</Form.Field>
	<button>Submit</button>
</form>
<SuperDebug data={$formData} />
