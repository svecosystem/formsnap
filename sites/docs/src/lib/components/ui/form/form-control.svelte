<script lang="ts">
	import { cn } from "$lib/utils";
	import { Control } from "formsnap";
	import type { HTMLAttributes } from "svelte/elements";

	type $$Props = HTMLAttributes<HTMLDivElement>;
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<Control let:attrs>
	<div class={cn("flex flex-col gap-2", className)} {...$$restProps}>
		<slot {attrs} />
	</div>
</Control>
