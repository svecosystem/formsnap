<script lang="ts">
	import { getFormField } from "@/lib/index.js";
	import type { CheckboxProps } from "../types.js";

	type $$Props = CheckboxProps;
	const { actions, errors } = getFormField();
	const attrs = {
		"data-fs-checkbox": "",
		"data-fs-error": $errors ? "" : undefined
	};
</script>

<input type="checkbox" use:actions.checkbox {...attrs} />
