<script lang="ts">
	import Check from "phosphor-svelte/lib/Check";
	import { Listbox as ListboxPrimitive, type WithoutChild } from "bits-ui";
	import { cn } from "$lib/utils/styles.js";

	let {
		ref = $bindable(null),
		class: className,
		value,
		children: childrenProp,
		...restProps
	}: WithoutChild<ListboxPrimitive.ItemProps> = $props();
</script>

<ListboxPrimitive.Item
	bind:ref
	{value}
	class={cn(
		"data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		className
	)}
	{...restProps}
>
	{#snippet children(props)}
		<span class="absolute left-2 flex size-3.5 items-center justify-center">
			{#if props.selected}
				<Check class="size-4" />
			{/if}
		</span>
		{#if childrenProp}
			{@render childrenProp(props)}
		{:else}
			{value}
		{/if}
	{/snippet}
</ListboxPrimitive.Item>
