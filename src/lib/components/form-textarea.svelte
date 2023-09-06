<script lang="ts">
	import { getFormField } from "@/lib/index.js";
	import type { TextareaProps } from "../types.js";

	type $$Props = TextareaProps;
	const { actions } = getFormField();
</script>

<textarea {...$$restProps} use:actions.textarea />
