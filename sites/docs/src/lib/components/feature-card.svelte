<script lang="ts">
	import * as Card from "$lib/components/ui/card/index.js";
	import type { Component, Snippet } from "svelte";

	let {
		title,
		icon: Icon,
		children,
	}: { icon: Component; title: string; children: Snippet } = $props();
</script>

<Card.Root class="bg-card/60 flex flex-col p-6 [&>svg]:mb-2 [&>svg]:size-10">
	<div class="mb-2">
		<Icon class="mb-2 size-10" />
	</div>
	<Card.Title class="mb-1 text-base">
		{title}
	</Card.Title>
	<p class="text-foreground/60 text-[15px]">
		{@render children?.()}
	</p>
</Card.Root>
