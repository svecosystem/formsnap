<script lang="ts">
	import { getFormField } from "@/lib/index.js";
	import type { InputProps } from "../types.js";

	type $$Props = InputProps;
	const { actions, errors, attrStore } = getFormField();
	$: attrs = {
		"data-fs-input": "",
		"data-fs-error": $errors ? "" : undefined,
		...$attrStore
	};
</script>

<input {...$$restProps} use:actions.input {...attrs} />
