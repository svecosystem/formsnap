<script lang="ts">
	import { getFormField } from "@/lib/index.js";
	import type { SelectProps } from "../types.js";

	type $$Props = SelectProps;
	const { actions, errors } = getFormField();
	$: attrs = {
		"data-fs-select": "",
		"data-fs-error": $errors ? "" : undefined
	};
</script>

<select {...$$restProps} use:actions.select {...attrs}>
	<slot />
</select>
