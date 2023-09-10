<script lang="ts">
	import { getFormField } from "@/lib/index.js";
	import type { InputProps } from "../types.js";

	type $$Props = InputProps;
	const { actions } = getFormField();
</script>

<input {...$$restProps} use:actions.input />
