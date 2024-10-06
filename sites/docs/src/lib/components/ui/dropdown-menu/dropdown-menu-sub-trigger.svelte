<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
	import CaretRight from "phosphor-svelte/lib/CaretRight";
	import { cn } from "$lib/utils/styles.js";

	let {
		ref = $bindable(null),
		class: className,
		inset,
		children,
		...restProps
	}: DropdownMenuPrimitive.SubTriggerProps & {
		inset?: boolean;
	} = $props();
</script>

<DropdownMenuPrimitive.SubTrigger
	bind:ref
	class={cn(
		"data-[highlighted]:bg-accent data-[state=open]:bg-accent data-[highlighted]:text-accent-foreground data-[state=open]:text-accent-foreground flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
		inset && "pl-8",
		className
	)}
	{...restProps}
>
	{@render children?.()}
	<CaretRight class="ml-auto size-4" />
</DropdownMenuPrimitive.SubTrigger>
