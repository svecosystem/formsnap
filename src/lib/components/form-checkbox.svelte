<script lang="ts">
	import { getFormField } from "@/lib/index.js";
	import type { CheckboxProps } from "../types.js";

	type $$Props = CheckboxProps;
	const { actions } = getFormField();
</script>

<input type="checkbox" use:actions.checkbox />
