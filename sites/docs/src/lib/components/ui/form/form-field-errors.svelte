<script lang="ts">
	import { FieldErrors as FieldErrorsPrimitive } from "formsnap";
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	type $$Props = HTMLAttributes<HTMLParagraphElement>;
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<FieldErrorsPrimitive
	class={cn("text-sm font-medium text-destructive", className)}
	{...$$restProps}
/>
