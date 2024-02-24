<script lang="ts">
	import SuperDebug, { superForm } from "sveltekit-superforms";
	import {
		Control,
		Description,
		ElementField,
		FieldErrors,
		Fieldset,
		Label,
		Legend,
	} from "formsnap";
	import { zodClient } from "sveltekit-superforms/adapters";
	import type { PageData } from "./$types.js";
	import { schema } from "./schema.js";

	export let data: PageData;

	const form = superForm(data.form, {
		validators: zodClient(schema),
		dataType: "json",
	});

	const { form: formData, enhance, errors } = form;

	function addTag() {
		$formData.tags = [...$formData.tags, { id: 1, name: "" }];
	}
</script>

<main class="container mx-auto py-3">
	<form method="post" use:enhance>
		<Fieldset {form} name="tags">
			<Legend>Nested data - Tags</Legend>
			{#each $formData.tags as _, i}
				<div class="grid grid-cols-2 gap-3">
					<div>
						<ElementField {form} name="tags[{i}].id">
							<Control let:attrs>
								<Label>ID</Label>
								<input
									type="number"
									{...attrs}
									bind:value={$formData.tags[i].id}
									class="w-full rounded border p-2 text-sm"
								/>
							</Control>
							<Description class="sr-only">The ID for the tag</Description>
							<!-- NOTE: I would have to do this -->

							<!-- {#if $errors.tags?.[i]?.id} -->
							<!-- <br /> -->
							<!-- <span class="text-sm text-rose-500">{$errors.tags[i].id}</span> -->
							<!-- {/if} -->

							<!-- FIXME: this is not working for nested data -->
							<FieldErrors />
						</ElementField>
					</div>
					<div>
						<ElementField {form} name="tags[{i}].name">
							<Control let:attrs>
								<Label>Name</Label>
								<input
									type="text"
									{...attrs}
									bind:value={$formData.tags[i].name}
									class="w-full rounded border p-2 text-sm"
								/>
							</Control>
							<Description class="sr-only">The ID for the tag</Description>
							<FieldErrors />
						</ElementField>
					</div>
				</div>
			{/each}
			<FieldErrors />
			<button class="mt-3 bg-neutral-800 p-2 text-neutral-200" type="button" on:click={addTag}
				>Add tag</button
			>
		</Fieldset>
		<button class="mt-3 bg-neutral-800 p-2 text-neutral-200" type="submit">Submit</button>
	</form>
</main>

<div class="mx-auto flex max-w-md flex-col gap-8">
	<div class="flex flex-col gap-2">
		<h1>Errors</h1>
		<SuperDebug data={$errors} />
	</div>

	<div class="flex flex-col gap-2">
		<h1>Data</h1>
		<SuperDebug data={$formData} />
	</div>
</div>
