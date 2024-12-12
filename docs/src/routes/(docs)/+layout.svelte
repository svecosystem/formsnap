<script lang="ts">
	import { DocsLayout } from "@svecodocs/kit";
	import { navigation } from "$lib/navigation";
	import FormsnapDark from "$lib/components/logos/formsnap-dark.svelte";
	import FormsnapLight from "$lib/components/logos/formsnap-light.svelte";
	import { Toaster } from "svelte-sonner";

	let { children } = $props();
</script>

<Toaster />

<DocsLayout {navigation}>
	{#snippet logo()}
		<FormsnapDark class="hidden max-h-7 dark:block" />
		<FormsnapLight class="block max-h-7 dark:hidden" />
		<span class="sr-only">Formsnap</span>
	{/snippet}

	{@render children?.()}
</DocsLayout>
