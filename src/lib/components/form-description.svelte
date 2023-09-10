<script lang="ts">
	import { getFormField } from "@/lib/index.js";
	import type { DescriptionProps } from "../types.js";

	type $$Props = DescriptionProps;
	export let tag = "p";
	const { actions } = getFormField();
</script>

<svelte:element this={tag} use:actions.description {...$$restProps}>
	<slot />
</svelte:element>
