<script lang="ts">
	import { getFormField } from "@/lib/index.js";
	import type { CheckboxProps } from "../types.js";

	type $$Props = CheckboxProps;
	const { actions, errors, attrStore } = getFormField();
	$: attrs = {
		"data-fs-checkbox": "",
		"data-fs-error": $errors ? "" : undefined,
		...$attrStore
	};
</script>

<input type="checkbox" use:actions.checkbox {...attrs} />
