<svelte:options runes />

<script lang="ts" module>
	import { z } from "zod";

	export const schema = z.object({
		urls: z
			.array(z.string().url({ message: "Please enter a valid URL." }))
			.min(2, "You must include at least two URLs.")
			.default(["", ""]),
	});
</script>

<script lang="ts">
	import { defaults, superForm } from "sveltekit-superforms";
	import { zod, zodClient } from "sveltekit-superforms/adapters";
	import { toast } from "svelte-sonner";
	import {
		Fieldset,
		ElementField,
		Control,
		Description,
		FieldErrors,
		Legend,
		controlProps,
	} from "formsnap";
	import { Input, Button, DemoContainer } from "@svecodocs/kit";
	import Plus from "phosphor-svelte/lib/Plus";
	import Trash from "phosphor-svelte/lib/Trash";

	const form = superForm(defaults(zod(schema)), {
		validators: zodClient(schema),
		onUpdated: ({ form: fd }) => {
			if (fd.valid) {
				toast.success(`You submitted:${JSON.stringify(fd.data, null, 2)}`);
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

<DemoContainer>
	<form
		use:form.enhance
		class="mx-auto flex max-w-md flex-col gap-4"
		method="POST"
		action="?/dynamicFields"
	>
		<Fieldset {form} name="urls">
			<Legend class="inline pb-2">Public URLs</Legend>
			<div class="flex flex-none flex-col gap-2">
				{#each $formData.urls as _, i}
					<ElementField {form} name="urls[{i}]">
						<Control>
							<div class="flex items-center gap-3">
								<Input
									type="url"
									bind:value={$formData.urls[i]}
									{...controlProps()}
									class="w-full"
								/>
								<Button
									onclick={() => removeUrlByIndex(i)}
									variant="destructive"
									size="icon"
									aria-label="Delete URL {i}"
								>
									<Trash />
								</Button>
							</div>
						</Control>
						<Description class="sr-only">
							This URL will be displayed on your public profile.
						</Description>
						<FieldErrors class="text-destructive" />
					</ElementField>
				{/each}
			</div>
			<div class="flex items-center justify-between pt-2">
				<div aria-hidden="true" class="text-muted-foreground text-sm">
					These URLs will be displayed on your public profile.
				</div>
				<Button onclick={addUrl} class="ml-auto" variant="outline" size="sm">
					<Plus aria-label="Add" />
					URL
				</Button>
			</div>
			<FieldErrors />
		</Fieldset>

		<Button class="self-start" type="submit">Submit</Button>
	</form>
</DemoContainer>
