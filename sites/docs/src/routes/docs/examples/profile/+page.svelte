<script lang="ts" context="module">
	import { z } from "zod";

	export const profileFormSchema = z.object({
		username: z
			.string()
			.min(2, "Username must be at least 2 characters.")
			.max(30, "Username must not exceed 30 characters."),
		email: z
			.string({ required_error: "Please select an email to display" })
			.email({ message: "Please enter a valid email." }),
		bio: z
			.string()
			.min(4, "Bio must be at least 4 characters")
			.max(100, "Bio must not exceed 100 characters")
			.default("Formsnap is awesome!"),
		website: z
			.string()
			.url({ message: "Please enter a valid URL." })
			.default("https://formsnap.dev"),
	});
</script>

<script lang="ts">
	import SuperDebug, { superForm } from "sveltekit-superforms";
	import { zod } from "sveltekit-superforms/adapters";
	import { toast } from "svelte-sonner";
	import type { PageData } from "./$types";
	import * as Form from "$lib/components/ui/form/index.js";
	import * as Select from "$lib/components/ui/select/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Textarea } from "$lib/components/ui/textarea/index.js";
	export let data: PageData;

	const form = superForm(data.form, {
		validators: zod(profileFormSchema),
		onUpdated: ({ form: formResult }) => {
			toast.success(JSON.stringify(formResult.data, null, 2));
		},
	});
	const { form: formData } = form;
</script>

<form method="POST" use:form.enhance class="flex flex-col gap-4">
	<Form.Field {form} name="username">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Username</Form.Label>
				<Input {...props} bind:value={$formData.username} />
				<Form.Description>
					This is your public display name. It can be your real name or a pseudonym. You
					can only change this once every 30 days.
				</Form.Description>
				<Form.FieldErrors />
			{/snippet}
		</Form.Control>
	</Form.Field>
	<Form.Field {form} name="email">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Email</Form.Label>
				<Select.Root name={props.name} bind:value={$formData.email}>
					<Select.Trigger {...props}>
						<Select.Value placeholder="Select a verified email to display" />
					</Select.Trigger>
					<Select.Content>
						<Select.Item value="me@example.com">me@example.com</Select.Item>
						<Select.Item value="you@example.com">you@example.com</Select.Item>
						<Select.Item value="them@example.com">them@example.com</Select.Item>
					</Select.Content>
				</Select.Root>
				<Form.Description></Form.Description>
				<Form.FieldErrors />
			{/snippet}
		</Form.Control>
	</Form.Field>
	<Form.Field {form} name="bio">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Bio</Form.Label>
				<Textarea {...props} bind:value={$formData.bio} class="resize-none" rows={2} />
				<Form.Description>
					You can @mention other users and organizations to link to them.
				</Form.Description>
				<Form.FieldErrors />
			{/snippet}
		</Form.Control>
	</Form.Field>
	<Form.Field {form} name="website">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Website</Form.Label>
				<Input {...props} bind:value={$formData.website} />
				<Form.Description>Your personal website, blog, or portfolio.</Form.Description>
				<Form.FieldErrors />
			{/snippet}
		</Form.Control>
	</Form.Field>
	<Form.Button>Submit</Form.Button>
</form>
<SuperDebug data={$formData} />
