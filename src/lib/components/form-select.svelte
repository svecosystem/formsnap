<script lang="ts">
	import { getFormField } from "@/lib/index.js";
	import type { SelectProps } from "../types.js";

	type $$Props = SelectProps;
	const { actions } = getFormField();
</script>

<select {...$$restProps} use:actions.select>
	<slot />
</select>
