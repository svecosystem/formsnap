<script lang="ts">
	import { Form as FormPrimitive } from "formsnap";
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	type $$Props = HTMLAttributes<HTMLParagraphElement>;
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<FormPrimitive.FieldErrors
	class={cn("text-destructive text-sm font-medium", className)}
	{...$$restProps}
/>
