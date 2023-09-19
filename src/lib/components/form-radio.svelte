<script lang="ts">
	import { getFormField } from "@/lib/index.js";
	import type { RadioProps } from "../types.js";

	type $$Props = RadioProps;
	const { actions, errors } = getFormField();
	const attrs = {
		"data-fs-radio": "",
		"data-fs-error": $errors ? "" : undefined
	};
</script>

<input type="radio" {...$$restProps} use:actions.radio {...attrs} />
