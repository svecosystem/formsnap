<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { Form } from "formsnap";
	import { zodClient } from "sveltekit-superforms/adapters";
	import type { PageData } from "./$types.js";
	import { schema } from "./schema.js";

	export let data: PageData;

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});
	const { form: formStore } = form;
</script>

<form use:form.enhance class="mx-auto flex max-w-md flex-col" method="POST">
	<Form.Field {form} name="name">
		<Form.Item let:attrs>
			<Form.Label>Name</Form.Label>
			<input {...attrs} bind:value={$formStore.name} />
		</Form.Item>
		<Form.Description>Your full legal name</Form.Description>
		<Form.Validation />
	</Form.Field>
	<Form.Field {form} name="age">
		<Form.Item let:attrs>
			<Form.Label>Age</Form.Label>
			<input {...attrs} type="number" bind:value={$formStore.age} />
		</Form.Item>
		<Form.Description>Enter your age</Form.Description>
		<Form.Validation />
	</Form.Field>
	<Form.Field {form} name="email">
		<Form.Item let:attrs>
			<Form.Label>Email</Form.Label>
			<input {...attrs} type="email" bind:value={$formStore.email} />
		</Form.Item>
		<Form.Description>Company email is preferred</Form.Description>
		<Form.Validation />
	</Form.Field>
	<Form.Field {form} name="terms">
		<Form.Item let:attrs>
			<Form.Label>Terms</Form.Label>
			<input {...attrs} type="checkbox" bind:value={$formStore.terms} />
		</Form.Item>
		<Form.Description>If you don't accept the terms, we can't move forward.</Form.Description>
		<Form.Validation />
	</Form.Field>
	<Form.Field {form} name="language">
		<Form.Item let:attrs>
			<Form.Label>Language</Form.Label>
			<select {...attrs} bind:value={$formStore.language}>
				<option value="fr">French</option>
				<option value="es">Spanish</option>
				<option value="en">English</option>
			</select>
		</Form.Item>
		<Form.Description>Help us address you properly.</Form.Description>
		<Form.Validation />
	</Form.Field>
	<Form.Field {form} name="notifications">
		<legend>Select your notification preferences</legend>
		<Form.Item let:attrs>
			<input type="radio" {...attrs} bind:group={$formStore.notifications} value="all" />
			<Form.Label>All</Form.Label>
		</Form.Item>
		<Form.Item let:attrs>
			<input type="radio" {...attrs} bind:group={$formStore.notifications} value="mentions" />
			<Form.Label>Mentions</Form.Label>
		</Form.Item>
		<Form.Item let:attrs>
			<input type="radio" {...attrs} bind:group={$formStore.notifications} value="important" />
			<Form.Label>Important</Form.Label>
		</Form.Item>
		<Form.Item let:attrs>
			<input type="radio" {...attrs} bind:group={$formStore.notifications} value="none" />
			<Form.Label>None</Form.Label>
		</Form.Item>
		<Form.Description>We'll only spam your inbox once per hour, don't worry!</Form.Description>
		<Form.Validation />
	</Form.Field>
	<button>Submit</button>
</form>
