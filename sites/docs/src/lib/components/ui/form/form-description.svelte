<script lang="ts">
	import {
		Description as DescriptionPrimitive,
		type DescriptionProps as DescriptionPrimitiveProps,
	} from "formsnap";
	import { cn } from "$lib/utils";

	type $$Props = DescriptionPrimitiveProps;
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<DescriptionPrimitive class={cn("text-sm text-muted-foreground", className)} {...$$restProps}>
	<slot />
</DescriptionPrimitive>
