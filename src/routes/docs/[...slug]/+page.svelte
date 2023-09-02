<script lang="ts">
	import "@/styles/markdown.postcss";
	import { page } from "$app/stores";
	import type { SvelteComponent } from "svelte";
	import type { PageData } from "./$types.js";
	import {
		PageHeader,
		PageHeaderDescription,
		PageHeaderHeading,
		PageHeaderTagline
	} from "@/components/index.js";
	type Component = $$Generic<typeof SvelteComponent>;

	export let data: PageData;
	let tagline: string;
	$: component = data.component as unknown as Component;
	$: doc = data.metadata;
	$: if ($page.url.pathname.split("/")[2] === "components") {
		tagline = "Components";
	} else {
		tagline = "Overview";
	}
</script>

<main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
	<div class="mx-auto w-full min-w-0">
		<PageHeader>
			<PageHeaderTagline>{tagline}</PageHeaderTagline>
			<PageHeaderHeading>{doc.title}</PageHeaderHeading>
			<PageHeaderDescription>{doc.description}</PageHeaderDescription>
		</PageHeader>
		<div class="markdown pt-8">
			<svelte:component this={component} />
		</div>
	</div>
</main>
