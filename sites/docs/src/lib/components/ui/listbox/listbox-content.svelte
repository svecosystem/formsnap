<script lang="ts">
	import { Listbox as ListboxPrimitive, type WithoutChildrenOrChild } from "bits-ui";
	import type { Snippet } from "svelte";
	import ListboxScrollDownButton from "./listbox-scroll-down-button.svelte";
	import ListboxScrollUpButton from "./listbox-scroll-up-button.svelte";
	import { cn } from "$lib/utils/styles.js";

	let {
		ref = $bindable(null),
		class: className,
		sideOffset = 4,
		children,
		...restProps
	}: WithoutChildrenOrChild<ListboxPrimitive.ContentProps> & { children: Snippet } = $props();
</script>

<ListboxPrimitive.Portal>
	<ListboxPrimitive.Content
		bind:ref
		{sideOffset}
		class={cn(
			"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-popover text-popover-foreground relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",

			className
		)}
		{...restProps}
	>
		<ListboxScrollUpButton />
		<ListboxPrimitive.Viewport
			class={cn(
				"h-[var(--bits-select-trigger-height)] w-full min-w-[var(--bits-select-trigger-width)] p-1"
			)}
		>
			{@render children?.()}
		</ListboxPrimitive.Viewport>
		<ListboxScrollDownButton />
	</ListboxPrimitive.Content>
</ListboxPrimitive.Portal>
