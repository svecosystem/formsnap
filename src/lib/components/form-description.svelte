<script lang="ts">
	import { createDescriptionAction, getCtx } from "@/lib/internal/index.js";
	import type { DescriptionProps } from "../types.js";

	type $$Props = DescriptionProps;

	export let tag = "p";

	const { ids, hasDescription } = getCtx();

	const action = createDescriptionAction({
		id: ids.description,
		hasDescription
	});
</script>

<svelte:element this={tag} use:action {...$$restProps}>
	<slot />
</svelte:element>
