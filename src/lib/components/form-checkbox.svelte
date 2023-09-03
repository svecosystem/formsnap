<script lang="ts">
	import { createCheckboxAction, getCtx } from "@/lib/internal/index.js";
	import type { CheckboxProps } from "../types.js";

	type $$Props = CheckboxProps;

	const { ids, value, name, attrStore } = getCtx();

	const action = createCheckboxAction({
		id: ids.input,
		value,
		name,
		attrs: attrStore
	});
</script>

<input type="checkbox" use:action />
