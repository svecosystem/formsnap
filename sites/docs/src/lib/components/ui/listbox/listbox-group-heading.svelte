<script lang="ts">
	import { Listbox as ListboxPrimitive } from "bits-ui";
	import { cn } from "$lib/utils/styles.js";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: ListboxPrimitive.GroupHeadingProps = $props();
</script>

<ListboxPrimitive.GroupHeading
	bind:ref
	class={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
	{...restProps}
/>
