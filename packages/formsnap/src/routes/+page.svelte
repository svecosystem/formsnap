<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import Form from '$lib/components/form.svelte';
	import FormField from '$lib/components/form-field.svelte';
	import FormLabel from '$lib/components/form-label.svelte';

	export let data;

	const superFrm = superForm(data.form);
	const { form } = superFrm;
</script>

<Form form={superFrm} let:config>
	<FormField {config} name="name" let:attrs>
		<FormLabel>Name</FormLabel>
		<input {...attrs} bind:value={$form.name} />
	</FormField>
	<FormField {config} name="age" let:attrs>
		<FormLabel>Age</FormLabel>
		<input {...attrs} type="number" bind:value={$form.name} />
	</FormField>
	<FormField {config} name="email" let:attrs>
		<FormLabel>Email</FormLabel>
		<input {...attrs} type="email" bind:value={$form.email} />
	</FormField>
	<FormField {config} name="terms" let:attrs>
		<FormLabel>Terms</FormLabel>
		<input {...attrs} type="checkbox" bind:value={$form.terms} />
	</FormField>
	<FormField {config} name="language" let:attrs>
		<FormLabel>Language</FormLabel>
		<select {...attrs} bind:value={$form.language}>
			<option value="fr">French</option>
			<option value="es">Spanish</option>
			<option value="en">English</option>
		</select>
	</FormField>
</Form>
