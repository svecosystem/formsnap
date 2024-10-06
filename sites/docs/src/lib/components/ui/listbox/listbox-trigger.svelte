<script lang="ts">
	import { Listbox as ListboxPrimitive, type WithoutChild } from "bits-ui";
	import CaretDown from "phosphor-svelte/lib/CaretDown";
	import { cn } from "$lib/utils/styles.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithoutChild<ListboxPrimitive.TriggerProps> = $props();
</script>

<ListboxPrimitive.Trigger
	bind:ref
	class={cn(
		"border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
		className
	)}
	{...restProps}
>
	{@render children?.()}
	<CaretDown class="size-4 opacity-50" />
</ListboxPrimitive.Trigger>
