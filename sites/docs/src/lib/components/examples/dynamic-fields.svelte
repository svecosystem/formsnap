<script lang="ts" context="module">
	import { z } from "zod";

	export const schema = z.object({
		urls: z
			.array(z.string().url({ message: "Please enter a valid URL." }))
			.min(2, "You must include at least two URLs.")
			.default(["", ""]),
	});
</script>

<script lang="ts">
	import { superForm, type Infer, type SuperValidated } from "sveltekit-superforms";
	import * as Form from "$lib/components/ui/form/index.js";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { Input } from "$lib/components/ui/input";
	import { Button } from "$lib/components/ui/button";
	import { Trash, Plus } from "$icons/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
	import { toast } from "svelte-sonner";

	export let data: SuperValidated<Infer<typeof schema>>;

	const form = superForm(data, {
		validators: zodClient(schema),
		onUpdated: ({ form: fd }) => {
			if (fd.valid) {
				toast.success("You submitted:" + JSON.stringify(fd.data, null, 2));
			} else {
				toast.error("Please fix the errors in the form.");
			}
		},
	});

	const { form: formData } = form;

	function removeUrlByIndex(index: number) {
		$formData.urls = $formData.urls.filter((_, i) => i !== index);
	}

	function addUrl() {
		$formData.urls = [...$formData.urls, ""];
	}
</script>

<Card.Root>
	<Card.Content class="pt-6">
		<form
			use:form.enhance
			class="mx-auto flex max-w-md flex-col gap-4"
			method="POST"
			action="?/dynamicFields"
		>
			<Form.Fieldset {form} name="urls">
				<Form.Legend class="inline pb-2">Public URLs</Form.Legend>
				<div class="flex flex-none flex-col gap-2">
					{#each $formData.urls as _, i}
						<Form.ElementField {form} name="urls[{i}]">
							<Form.Control>
								{#snippet children({ props })}
									<div class="flex items-center gap-3">
										<Input
											type="url"
											bind:value={$formData.urls[i]}
											{...props}
											class="w-full"
										/>
										<Button
											onclick={() => removeUrlByIndex(i)}
											variant="destructive"
											size="icon"
											aria-label="Delete URL {i}"
										>
											<Trash class="size-5" />
										</Button>
									</div>
								{/snippet}
							</Form.Control>
							<Form.Description class="sr-only">
								This URL will be displayed on your public profile.
							</Form.Description>
							<Form.FieldErrors />
						</Form.ElementField>
					{/each}
				</div>
				<div class="flex items-center justify-between pt-2">
					<div aria-hidden="true" class="text-muted-foreground text-sm">
						These URLs will be displayed on your public profile.
					</div>
					<Button onclick={addUrl} class="ml-auto" variant="outline">
						<Plus class="mr-2 size-5" aria-label="Add" />
						URL
					</Button>
				</div>
				<Form.FieldErrors />
			</Form.Fieldset>

			<Form.Button class="self-start">Submit</Form.Button>
		</form>
	</Card.Content>
</Card.Root>
