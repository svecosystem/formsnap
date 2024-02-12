<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import FormField from '$lib/components/form-field.svelte';
	import FormLabel from '$lib/components/form-label.svelte';
	import FormValidation from '$lib/components/form-validation.svelte';

	export let data;

	const form = superForm(data.form);
	const { form: formStore } = form;
</script>

<form use:form.enhance class="flex flex-col max-w-md mx-auto" method="POST">
	<FormField {form} name="name" let:attrs>
		<FormLabel>Name</FormLabel>
		<input {...attrs} bind:value={$formStore.name} />
		<FormValidation />
	</FormField>
	<FormField {form} name="age" let:attrs>
		<FormLabel>Age</FormLabel>
		<input {...attrs} type="number" bind:value={$formStore.age} />
		<FormValidation />
	</FormField>
	<FormField {form} name="email" let:attrs>
		<FormLabel>Email</FormLabel>
		<input {...attrs} type="email" bind:value={$formStore.email} />
		<FormValidation />
	</FormField>
	<FormField {form} name="terms" let:attrs>
		<FormLabel>Terms</FormLabel>
		<input {...attrs} type="checkbox" bind:value={$formStore.terms} />
		<FormValidation />
	</FormField>
	<FormField {form} name="language" let:attrs>
		<FormLabel>Language</FormLabel>
		<select {...attrs} bind:value={$formStore.language}>
			<option value="fr">French</option>
			<option value="es">Spanish</option>
			<option value="en">English</option>
		</select>
		<FormValidation />
	</FormField>
	<button>Submit</button>
</form>
