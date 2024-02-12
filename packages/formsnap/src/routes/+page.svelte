<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import Form from '$lib/components/form.svelte';
	import FormField from '$lib/components/form-field.svelte';

	export let data;

	const superFrm = superForm(data.form);
</script>

<Form form={superFrm} let:config>
	<FormField {config} name="name" let:value>
		<input type="text" {value} />
	</FormField>
	<FormField {config} name="age" let:value>
		<input type="text" {value} />
	</FormField>
	<FormField {config} name="email" let:value>
		<input type="email" {value} />
	</FormField>
	<FormField {config} name="terms" let:value>
		<input type="email" {value} />
	</FormField>
</Form>
