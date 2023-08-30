<script lang="ts">
	import { Form } from "$lib/index.js";
	import type { PageData } from "./$types.js";
	import { someFormSchema } from "./schemas.js";
	import { Button } from "$components/ui/button/index.js";

	export let data: PageData;
</script>

<div class="flex flex-col h-full min-h-screen w-full items-center py-28">
	<h1 class="text-3xl font-semibold tracking-tight pb-8">Account Settings</h1>
	<Form.Root
		schema={someFormSchema}
		data={data.form}
		debug={true}
		let:form
		method="POST"
		class="container max-w-[750px] mx-auto flex flex-col gap-8"
	>
		<Form.Field {form} name="email">
			<div class="grid gap-2">
				<Form.Label>Email</Form.Label>
				<Form.Input />
				<Form.Message class="text-destructive" />
			</div>
		</Form.Field>
		<Form.Field {form} name="username">
			<div class="grid gap-2">
				<Form.Label>Username</Form.Label>
				<Form.Input />
				<Form.Message class="text-destructive" />
			</div>
		</Form.Field>
		<Form.Field {form} name="bio">
			<div class="grid gap-2">
				<Form.Label>Bio</Form.Label>
				<Form.Textarea />
				<Form.Message class="text-destructive" />
			</div>
		</Form.Field>
		<Form.Field {form} name="website">
			<div class="grid gap-2">
				<Form.Label>Website</Form.Label>
				<Form.Input />
				<Form.Message class="text-destructive" />
			</div>
		</Form.Field>
		<Form.Field {form} name="notifications">
			<div class="grid gap-2">
				<Form.Label>Website</Form.Label>
				<Form.Select>
					<option value="all">All</option>
					<option value="mentions">Mentions</option>
					<option value="none">None</option>
				</Form.Select>
				<Form.Message class="text-destructive" />
			</div>
		</Form.Field>
		<Button type="submit">Submit</Button>
	</Form.Root>
</div>
