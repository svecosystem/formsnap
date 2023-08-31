<script lang="ts">
	import { Form } from "$lib/index.js";
	import type { PageData } from "./$types.js";
	import { someFormSchema } from "./schemas.js";
	import { Button } from "$components/ui/button/index.js";
	import * as Select from "$components/ui/select/index.js";
	import { Input } from "$components/ui/input/index.js";
	import { Textarea } from "$components/ui/textarea/index.js";
	import { Checkbox } from "$components/ui/checkbox/index.js";

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
		schema={someFormSchema}
		data={data.form}
		debug={true}
		let:form
		method="POST"
		class="container max-w-[750px] mx-auto flex flex-col gap-8"
	>
		<Form.Field {form} name="email" let:field>
			<div class="grid gap-2">
				<Form.Label>Email</Form.Label>
				<Input {...field.attrs} on:input={field.handleInput} />
				<Form.Message class="text-destructive" />
			</div>
		</Form.Field>
		<Form.Field {form} name="username" let:field>
			<div class="grid gap-2">
				<Form.Label>Username</Form.Label>
				<Input {...field.attrs} on:input={field.handleInput} />
				<Form.Message class="text-destructive" />
			</div>
		</Form.Field>
		<Form.Field {form} name="bio" let:field>
			<div class="grid gap-2">
				<Form.Label>Bio</Form.Label>
				<Textarea {...field.attrs} on:input={field.handleInput} />
				<Form.Message class="text-destructive" />
			</div>
		</Form.Field>
		<Form.Field {form} name="website" let:field>
			<div class="grid gap-2">
				<Form.Label>Website</Form.Label>
				<Input {...field.attrs} on:input={field.handleInput} />
				<Form.Message class="text-destructive" />
			</div>
		</Form.Field>
		<Form.Field {form} name="notifications" let:field>
			<div class="grid gap-2">
				<Form.Label>Notifications</Form.Label>
				<select {...field.attrs} on:change={field.handleInput}>
					<option value="all">All</option>
					<option value="mentions">Mentions</option>
					<option value="none">None</option>
				</select>
				<Form.Message class="text-destructive" />
			</div>
		</Form.Field>
		<Form.Field {form} name="language" let:field>
			{@const { value } = field.attrs}
			<div class="grid gap-2">
				<Form.Label>Language</Form.Label>
				<Select.Root
					selected={{ value, label: languages[value] }}
					onSelectedChange={(v) => field.updateValue(v?.value)}
				>
					<Select.Trigger {...field.attrs}>
						<Select.Value placeholder="Select a language" />
					</Select.Trigger>
					<Select.Content>
						{#each Object.entries(languages) as [value, lang]}
							<Select.Item {value}>{lang}</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			</div>
		</Form.Field>
		<Form.Field {form} name="usage" let:field>
			{@const { value, ...rest } = field.attrs}
			<div class="flex items-center gap-4">
				<Checkbox
					checked={value}
					onCheckedChange={(v) => {
						if (typeof v === "boolean") field.updateValue(v);
					}}
					{...rest}
				/>
				<Form.Label>Send bugs and crash statistics</Form.Label>
			</div>
		</Form.Field>

		<Button type="submit">Submit</Button>
	</Form.Root>
</div>
