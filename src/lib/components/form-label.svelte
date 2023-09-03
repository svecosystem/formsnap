<script lang="ts">
	import { createLabelAction, getCtx } from "@/lib/internal/index.js";
	import type { LabelProps } from "../types.js";

	type $$Props = LabelProps;

	const { ids } = getCtx();

	const action = createLabelAction({ htmlFor: ids.input });
</script>

<label use:action {...$$restProps}>
	<slot />
</label>
