<script lang="ts">
	import CaretUp from "phosphor-svelte/lib/CaretUp";
	import { Listbox as ListboxPrimitive, type WithoutChildrenOrChild } from "bits-ui";
	import { cn } from "$lib/utils/styles.js";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: WithoutChildrenOrChild<ListboxPrimitive.ScrollUpButtonProps> = $props();
</script>

<ListboxPrimitive.ScrollUpButton
	bind:ref
	class={cn("flex cursor-default items-center justify-center py-1", className)}
	{...restProps}
>
	<CaretUp class="size-4" />
</ListboxPrimitive.ScrollUpButton>
