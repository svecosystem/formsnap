<script lang="ts">
	import { createTextareaAction, getCtx } from "@/lib/internal/index.js";
	import type { TextareaProps } from "../types.js";

	type $$Props = TextareaProps;

	const { ids, value, name, attrStore } = getCtx();

	const action = createTextareaAction({
		id: ids.input,
		value,
		name,
		attrs: attrStore
	});
</script>

<textarea {...$$restProps} use:action />
