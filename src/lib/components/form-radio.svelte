<script lang="ts">
	import { createRadioAction, getCtx } from "@/lib/internal/index.js";
	import type { RadioProps } from "../types.js";

	type $$Props = RadioProps;

	const { ids, value, name, attrStore } = getCtx();

	const action = createRadioAction({
		id: ids.input,
		value,
		name,
		attrs: attrStore
	});
</script>

<input type="radio" {...$$restProps} use:action />
