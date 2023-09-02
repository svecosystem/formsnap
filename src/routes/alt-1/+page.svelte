<script lang="ts">
	import { Form } from "@/lib/index.js";
	import type { PageData } from "./$types.js";
	import { someFormSchema } from "../alt-2/schemas.js";
	import { Button } from "@/components/ui/button/index.js";

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
				<Form.Input class="rounded bg-background border border-border h-9 text-foreground p-2" />
				<Form.Validation class="text-destructive" />
			</div>
		</Form.Field>
		<Form.Field {form} name="username">
			<div class="grid gap-2">
				<Form.Label>Username</Form.Label>
				<Form.Input class="rounded bg-background border border-border h-9 text-foreground p-2" />
				<Form.Validation class="text-destructive" />
			</div>
		</Form.Field>
		<Form.Field {form} name="bio">
			<div class="grid gap-2">
				<Form.Label>Bio</Form.Label>
				<Form.Textarea
					rows={4}
					class="resize-none rounded bg-background border border-border text-foreground p-2"
				/>
				<Form.Validation class="text-destructive" />
			</div>
		</Form.Field>
		<Form.Field {form} name="website">
			<div class="grid gap-2">
				<Form.Label>Website</Form.Label>
				<Form.Input class="rounded bg-background border border-border h-9 text-foreground p-2" />
				<Form.Validation class="text-destructive" />
			</div>
		</Form.Field>
		<Form.Field {form} name="notifications">
			<div class="grid gap-2">
				<Form.Label>Notifications</Form.Label>
				<Form.Select class="rounded bg-background border border-border h-9 text-foreground p-2">
					<option value="all">All</option>
					<option value="mentions">Mentions</option>
					<option value="none">None</option>
				</Form.Select>
				<Form.Validation class="text-destructive" />
			</div>
		</Form.Field>
		<Form.Field {form} name="language">
			<div class="grid gap-2">
				<Form.Label>Language</Form.Label>
				<Form.Select class="rounded bg-background border border-border h-9 text-foreground p-2">
					<option value="en">English</option>
					<option value="es">Spanish</option>
					<option value="fr">French</option>
				</Form.Select>
				<Form.Validation class="text-destructive" />
			</div>
		</Form.Field>
		<Form.Field {form} name="usage">
			<div class="grid gap-2">
				<div class="flex items-center gap-4">
					<Form.Checkbox />
					<Form.Label>Send crash reports & statistics</Form.Label>
				</div>
				<Form.Validation class="text-destructive" />
			</div>
		</Form.Field>
		<Form.Field {form} name="theme">
			<div class="grid gap-2">
				<div class="flex items-center gap-4">
					<Form.Radio value="light" />
					<Form.Label>Light</Form.Label>
				</div>
				<Form.Validation class="text-destructive" />
			</div>
		</Form.Field>
		<Form.Field {form} name="theme">
			<div class="grid gap-2">
				<div class="flex items-center gap-4">
					<Form.Radio value="dark" />
					<Form.Label>Dark</Form.Label>
				</div>
				<Form.Validation class="text-destructive" />
			</div>
		</Form.Field>

		<Button type="submit">Submit</Button>
	</Form.Root>
</div>
