<script lang="ts">
	import { createInputAction, getCtx } from "@/lib/internal/index.js";
	import type { InputProps } from "../types.js";

	type $$Props = InputProps;

	const { ids, value, name, attrStore } = getCtx();

	const action = createInputAction({
		id: ids.input,
		value,
		name,
		attrs: attrStore
	});
</script>

<input {...$$restProps} use:action />
