<script lang="ts">
	import { Form } from "@/lib/index.js";
	import type { PageData } from "./$types.js";
	import { simpleFormSchema } from "../schemas.js";
	import { Button } from "@/components/ui/button/index.js";
	import * as Select from "@/components/ui/select/index.js";
	import { Input } from "@/components/ui/input/index.js";
	import { Textarea } from "@/components/ui/textarea/index.js";
	import { Checkbox } from "@/components/ui/checkbox/index.js";

	export let data: PageData;

	const languages = {
		en: "English",
		es: "Spanish",
		fr: "French"
	} as const;
</script>

<div class="flex flex-col h-full min-h-screen w-full items-center py-28">
	<h1 class="text-3xl font-semibold tracking-tight pb-8">Account Settings</h1>
	<Form.Root
		schema={simpleFormSchema}
		data={data.form}
		debug={true}
		let:form
		method="POST"
		class="container max-w-[750px] mx-auto flex flex-col gap-8"
	>
		<Form.Field {form} name="email" let:field>
			<div class="grid gap-2">
				<Form.Label>Email</Form.Label>
				<input
					{...field.attrs}
					on:input={field.handleInput}
					class="rounded bg-background border border-border h-9 text-foreground p-2"
				/>
				<Form.Message class="text-destructive" />
			</div>
		</Form.Field>
		<Form.Field {form} name="username" let:field>
			<div class="grid gap-2">
				<Form.Label>Username</Form.Label>
				<input
					{...field.attrs}
					on:input={field.handleInput}
					class="rounded bg-background border border-border h-9 text-foreground p-2"
				/>
				<Form.Message class="text-destructive" />
			</div>
		</Form.Field>
		<Form.Field {form} name="bio" let:field>
			<div class="grid gap-2">
				<Form.Label>Bio</Form.Label>
				<textarea
					{...field.attrs}
					on:input={field.handleInput}
					rows="4"
					class="rounded resize-none bg-background border border-border text-foreground p-2"
				/>
				<Form.Message class="text-destructive" />
			</div>
		</Form.Field>
		<Form.Field {form} name="website" let:field>
			<div class="grid gap-2">
				<Form.Label>Website</Form.Label>
				<input
					{...field.attrs}
					on:input={field.handleInput}
					class="rounded bg-background border border-border h-9 text-foreground p-2"
				/>
				<Form.Message class="text-destructive" />
			</div>
		</Form.Field>
		<Form.Field {form} name="notifications" let:field>
			<div class="grid gap-2">
				<Form.Label>Notifications</Form.Label>
				<select
					{...field.attrs}
					on:change={field.handleInput}
					class="rounded bg-background border border-border h-9 text-foreground p-2"
				>
					<option value="all">All</option>
					<option value="mentions">Mentions</option>
					<option value="none">None</option>
				</select>
				<Form.Message class="text-destructive" />
			</div>
		</Form.Field>
		<Button type="submit">Submit</Button>
	</Form.Root>
</div>
