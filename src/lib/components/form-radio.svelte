<script lang="ts">
	import { getFormField } from "@/lib/index.js";
	import type { RadioProps } from "../types.js";

	type $$Props = RadioProps;
	const { actions, errors, attrStore } = getFormField();
	$: attrs = {
		"data-fs-select": "",
		"data-fs-error": $errors ? "" : undefined,
		...$attrStore
	};
</script>

<input type="radio" {...$$restProps} use:actions.radio {...attrs} />
