<script lang="ts">
	import { getFormField } from "@/lib/index.js";
	import type { LabelProps } from "../types.js";

	type $$Props = LabelProps;
	const { actions } = getFormField();
</script>

<label use:actions.label {...$$restProps}>
	<slot />
</label>
