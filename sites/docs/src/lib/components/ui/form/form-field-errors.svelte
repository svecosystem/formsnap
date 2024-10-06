<script lang="ts">
	import { FieldErrors as FieldErrorsPrimitive, type FieldErrorsProps } from "formsnap";
	import { cn } from "$lib/utils";

	let { ref = $bindable(null), class: className, ...restProps }: FieldErrorsProps = $props();
</script>

<FieldErrorsPrimitive
	bind:ref
	class={cn("text-destructive text-sm font-medium", className)}
	{...restProps}
/>
