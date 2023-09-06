<script lang="ts">
	import { getFormField } from "@/lib/index.js";
	import type { RadioProps } from "../types.js";

	type $$Props = RadioProps;
	const { actions } = getFormField();
</script>

<input type="radio" {...$$restProps} use:actions.radio />
