<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import Form from '$lib/components/form.svelte';
	import FormField from '$lib/components/form-field.svelte';
	import FormLabel from '$lib/components/form-label.svelte';
	import FormInput from '$lib/components/form-input.svelte';

	export let data;

	const superFrm = superForm(data.form);
	const { form } = superFrm;
</script>

<Form form={superFrm} let:config>
	<FormField {config} name="name">
		<FormLabel>Name</FormLabel>
		<FormInput type="text" bind:value={$form.name} />
	</FormField>
	<FormField {config} name="age">
		<FormLabel>Age</FormLabel>
		<FormInput type="number" bind:value={$form.age} />
	</FormField>
	<FormField {config} name="email">
		<FormLabel>Email</FormLabel>
		<FormInput type="email" bind:value={$form.email} />
	</FormField>
	<FormField {config} name="terms">
		<FormLabel>Terms</FormLabel>
		<FormInput type="checkbox" bind:value={$form.terms} />
	</FormField>
</Form>
