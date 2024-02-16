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
	import type { PageData } from "./$types";
	import { superForm } from "sveltekit-superforms";
	import { zod } from "sveltekit-superforms/adapters";
	import * as Form from "$lib/components/ui/form/index.js";
	import * as Select from "$lib/components/ui/select/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import SuperDebug from "sveltekit-superforms";
	import { Textarea } from "$lib/components/ui/textarea/index.js";
	import { toast } from "svelte-sonner";
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
		<Form.Control let:attrs>
			<Form.Label>Username</Form.Label>
			<Input {...attrs} bind:value={$formData.username} />
			<Form.Description>
				This is your public display name. It can be your real name or a pseudonym. You can only
				change this once every 30 days.
			</Form.Description>
			<Form.Validation />
		</Form.Control>
	</Form.Field>
	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<Form.Label>Email</Form.Label>
			<Select.Root
				selected={{ label: $formData.email, value: $formData.email }}
				onSelectedChange={(s) => {
					s && ($formData.email = s.value);
				}}
			>
				<Select.Input bind:value={$formData.email} name={attrs.name} />
				<Select.Trigger {...attrs}>
					<Select.Value placeholder="Select a verified email to display" />
				</Select.Trigger>
				<Select.Content>
					<Select.Item value="me@example.com" label="me@example.com" />
					<Select.Item value="you@example.com" label="you@example.com" />
					<Select.Item value="them@example.com" label="them@example.com" />
				</Select.Content>
			</Select.Root>
			<Form.Description></Form.Description>
			<Form.Validation />
		</Form.Control>
	</Form.Field>
	<Form.Field {form} name="bio">
		<Form.Control let:attrs>
			<Form.Label>Bio</Form.Label>
			<Textarea {...attrs} bind:value={$formData.bio} class="resize-none" rows={2} />
			<Form.Description>
				You can @mention other users and organizations to link to them.
			</Form.Description>
			<Form.Validation />
		</Form.Control>
	</Form.Field>
	<Form.Field {form} name="website">
		<Form.Control let:attrs>
			<Form.Label>Website</Form.Label>
			<Input {...attrs} bind:value={$formData.website} />
			<Form.Description>Your personal website, blog, or portfolio.</Form.Description>
			<Form.Validation />
		</Form.Control>
	</Form.Field>
	<Form.Button>Submit</Form.Button>
</form>
<SuperDebug data={$formData} />
