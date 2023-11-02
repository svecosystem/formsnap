<script lang="ts" context="module">
	import { z } from "zod";
	export const schema = z.object({
		num: z.coerce.number(),
		items: z.array(z.string()),
		numbers: z.array(z.number()),
		urls: z.array(z.string().url()).default([""])
	});
</script>

<script lang="ts">
	import { Form } from "@/lib/index.js";
	import type { PageData } from "./$types.js";
	import { Button } from "@/components/ui/button/index.js";
	import { superForm } from "sveltekit-superforms/client";
	import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte";
	import { cn } from "@/utils/styles.js";
	import { tick } from "svelte";
	export let data: PageData;

	const superFrm = superForm(data.form, {
		validators: schema,
		taintedMessage: null
	});

	const { form, tainted, errors } = superFrm;

	function getRandomNumber() {
		superFrm.form.update((curr) => {
			return {
				...curr,
				num: Math.random() * 100
			};
		});
	}
</script>

<div class="flex flex-col h-full min-h-screen w-full items-center py-28">
	<h1 class="text-3xl font-semibold tracking-tight pb-8">Account Settings</h1>
	<Button on:click={getRandomNumber}>Random num</Button>
	<Form.Root
		{schema}
		form={superFrm}
		controlled
		debug
		let:config
		class="container max-w-[750px] mx-auto flex flex-col gap-8"
	>
		<Form.Field {config} name="num">
			<Form.Label>Random Num</Form.Label>
			<Form.Input type="number" />
			<Form.Validation />
		</Form.Field>
		<Form.MultiField {config} name="items">
			<Form.Label>Random Num</Form.Label>
			<Form.MultiSelect>
				<option value={1}>1</option>
				<option value={2}>2</option>
				<option value={3}>3</option>
				<option value={4}>4</option>
			</Form.MultiSelect>
			<Form.Validation />
		</Form.MultiField>
		{#each $form.urls as _, i}
			<Form.Field {config} name="urls[{i}]" inputId="input-{i}" let:tainted>
				<div class="flex flex-col gap-2">
					<Form.Label class={cn(i !== 0 && "sr-only")}>URL</Form.Label>
					<Form.Description class={cn(i !== 0 && "sr-only")}
						>Add links to your website, blog, or social media profiles.</Form.Description
					>
					<Form.Input type="url" />
					{#if tainted}
						<Form.Validation />
					{/if}
				</div>
			</Form.Field>
		{/each}
		<Button
			type="button"
			variant="outline"
			size="sm"
			class="mt-2"
			on:click={() => {
				tainted.update((currTainted) => {
					form.update((curr) => ({ ...curr, urls: [...curr.urls, ""] }));
					const newInputId = $form.urls.length - 1;
					if (currTainted && currTainted.urls) {
						delete currTainted.urls[newInputId];
					}

					tick().then(() => document.getElementById(`input-${newInputId}`)?.focus());
					return currTainted;
				});
			}}
		>
			Add URL
		</Button>
		<Button type="submit">Submit</Button>
		<SuperDebug data={$tainted} label="Tainted" />
		<SuperDebug data={$errors} label="Errors" />
	</Form.Root>
</div>
