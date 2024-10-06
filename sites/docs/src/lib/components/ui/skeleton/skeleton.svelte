<script lang="ts">
	import type { WithoutChildren } from "bits-ui";
	import { type PrimitiveDivAttributes, cn } from "$lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: WithoutChildren<PrimitiveDivAttributes> = $props();
</script>

<div
	bind:this={ref}
	class={cn("bg-muted animate-pulse rounded-md", className)}
	{...restProps}
></div>
