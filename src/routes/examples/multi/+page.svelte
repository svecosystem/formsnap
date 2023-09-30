<script lang="ts">
	import { Form } from "@/lib/index.js";
	import type { PageData } from "./$types.js";
	import { multiSelectSchema } from "../schemas.js";
	import { Button } from "@/components/ui/button/index.js";
	export let data: PageData;

	const colors = ["green", "blue", "orange", "red"];
</script>

<div class="flex flex-col h-full min-h-screen w-full items-center py-28">
	<h1 class="text-3xl font-semibold tracking-tight pb-8">Account Settings</h1>
	<Form.Root
		schema={multiSelectSchema}
		form={data.form}
		debug={true}
		let:config
		class="container max-w-[750px] mx-auto flex flex-col gap-8"
	>
		<Form.FieldMulti {config} name="notifications" let:handlers let:attrs>
			<div class="grid gap-2">
				<Form.Label>Notifications</Form.Label>
				<select {...attrs.input} on:change={handlers.multiSelect} multiple class="bg-transparent">
					<option value="all">All</option>
					<option value="mentions">Mentions</option>
					<option value="none">None</option>
				</select>
				<Form.Validation class="text-destructive" />
			</div>
		</Form.FieldMulti>
		<Form.FieldMulti {config} name="colors" let:handlers>
			<div class="grid gap-2">
				<Form.Label>Colors</Form.Label>
				{#each colors as color}
					<div class="flex items-center gap-4">
						<input id={color} type="checkbox" value={color} on:change={handlers.multiCheck} />
						<label for={color}>{color}</label>
					</div>
				{/each}
				<Form.Validation class="text-destructive" />
			</div>
		</Form.FieldMulti>
		<Button type="submit">Submit</Button>
	</Form.Root>
</div>
