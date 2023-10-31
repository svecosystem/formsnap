<script lang="ts">
	import { Form } from "@/lib/index.js";
	import type { PageData } from "./$types.js";
	import { sinkFormSchema } from "../schemas.js";
	import { Button } from "@/components/ui/button/index.js";
	import * as Select from "@/components/ui/select/index.js";
	import DateInput from "./DateInput.svelte";
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
		schema={sinkFormSchema}
		form={data.form}
		debug={true}
		let:config
		options={{ dataType: "json" }}
		class="container max-w-[750px] mx-auto flex flex-col gap-8"
	>
		<Form.Field {config} name="language" let:attrs let:setValue>
			{@const { value } = attrs.input}
			<div class="grid gap-2">
				<Form.Label>Language</Form.Label>
				<Select.Root
					let:ids
					selected={{ value, label: languages[value] }}
					onSelectedChange={(v) => setValue(v?.value)}
				>
					<Form.Control id={ids.trigger} let:attrs>
						<Select.Trigger {...attrs}>
							<Select.Value placeholder="Select a language" />
						</Select.Trigger>
					</Form.Control>
					<Select.Content>
						{#each Object.entries(languages) as [value, lang]}
							<Select.Item {value}>{lang}</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
				<Form.Validation />
			</div>
		</Form.Field>
		<Form.Field {config} name="dateField">
			<Form.Label>Date field</Form.Label>
			<div class="max-w-[14rem]">
				<DateInput type="datetime-local" />
			</div>
			<Form.Validation />
		</Form.Field>
		<Button type="submit">Submit</Button>
	</Form.Root>
</div>
