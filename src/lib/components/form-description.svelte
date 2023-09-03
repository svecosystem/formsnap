<script lang="ts">
	import { createDescriptionAction, getCtx } from "@/lib/internal/index.js";
	import type { DescriptionProps } from "../types.js";

	type $$Props = DescriptionProps;

	const { ids, hasDescription } = getCtx();

	const action = createDescriptionAction({
		id: ids.description,
		hasDescription
	});
</script>

<span use:action {...$$restProps}>
	<slot />
</span>
