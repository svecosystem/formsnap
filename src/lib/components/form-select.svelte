<script lang="ts">
	import { createSelectAction, getCtx } from "@/lib/internal/index.js";
	import type { SelectProps } from "../types.js";

	type $$Props = SelectProps;

	const { ids, value, name, attrStore } = getCtx();

	const action = createSelectAction({
		id: ids.input,
		value,
		name,
		attrs: attrStore
	});
</script>

<select {...$$restProps} use:action>
	<slot />
</select>
