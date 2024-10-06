<script lang="ts">
	import type { WithoutChildren } from "bits-ui";
	import { Control, type ControlProps } from "formsnap";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		children: childrenProp,
		...restProps
	}: ControlProps &
		WithoutChildren<HTMLAttributes<HTMLDivElement> & { ref?: HTMLElement | null }> = $props();
</script>

<Control>
	{#snippet children(props)}
		<div bind:this={ref} class={cn("flex flex-col gap-2", className)} {...restProps}>
			{@render childrenProp?.(props)}
		</div>
	{/snippet}
</Control>
