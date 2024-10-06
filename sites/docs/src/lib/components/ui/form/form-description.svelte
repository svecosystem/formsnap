<script lang="ts">
	import { Description as DescriptionPrimitive, type DescriptionProps } from "formsnap";
	import { cn } from "$lib/utils";

	let { ref = $bindable(null), class: className, ...restProps }: DescriptionProps = $props();
</script>

<DescriptionPrimitive
	bind:ref
	class={cn("text-muted-foreground text-sm", className)}
	{...restProps}
/>
