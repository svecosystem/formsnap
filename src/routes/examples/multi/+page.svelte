<script lang="ts">
	import { Form } from "@/lib/index.js";
	import type { PageData } from "./$types.js";
	import { multiSelectSchema } from "../schemas.js";
	import { Button } from "@/components/ui/button/index.js";
	export let data: PageData;
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
				<select {...attrs.input} on:change={handlers.multiSelect} multiple>
					<option value="all">All</option>
					<option value="mentions">Mentions</option>
					<option value="none">None</option>
				</select>
				<Form.Validation class="text-destructive" />
			</div>
		</Form.FieldMulti>
		<Button type="submit">Submit</Button>
	</Form.Root>
</div>
