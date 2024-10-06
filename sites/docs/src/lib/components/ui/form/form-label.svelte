<script lang="ts">
	import {
		getFormField,
		type LabelProps as PrimitiveLabelProps,
		Label as PrimitiveLabel,
	} from "formsnap";
	import { cn } from "$lib/utils";
	import { Label } from "$lib/components/ui/label";
	import type { WithoutChildrenOrChild } from "bits-ui";
	import type { Snippet } from "svelte";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithoutChildrenOrChild<PrimitiveLabelProps> & { children?: Snippet } = $props();

	const field = getFormField();
</script>

<PrimitiveLabel bind:ref {...restProps}>
	{#snippet child({ props })}
		<Label
			class={cn(field.errors.length > 0 && "text-destructive", className)}
			{...props}
			{children}
		/>
	{/snippet}
</PrimitiveLabel>
