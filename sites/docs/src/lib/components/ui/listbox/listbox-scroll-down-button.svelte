<script lang="ts">
	import CaretDown from "phosphor-svelte/lib/CaretDown";
	import { Listbox as ListboxPrimitive, type WithoutChildrenOrChild } from "bits-ui";
	import { cn } from "$lib/utils/styles.js";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: WithoutChildrenOrChild<ListboxPrimitive.ScrollDownButtonProps> = $props();
</script>

<ListboxPrimitive.ScrollDownButton
	bind:ref
	class={cn("flex cursor-default items-center justify-center py-1", className)}
	{...restProps}
>
	<CaretDown class="size-4" />
</ListboxPrimitive.ScrollDownButton>
