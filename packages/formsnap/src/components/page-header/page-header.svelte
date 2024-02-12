<script lang="ts">
	import { cn } from "@/utils/index.js";
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<section class={cn("relative border-b border-border pb-8", className)}>
	<slot />
</section>
