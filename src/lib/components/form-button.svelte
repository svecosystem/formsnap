<script lang="ts">
	import type { ButtonProps } from "../types.js";

	import type { AnyZodObject } from "zod";

	type T = $$Generic<AnyZodObject>;

	type $$Props = ButtonProps<T>;

	export let config: $$Props["config"];

	const { delayed } = config.form;

</script>
<!-- Could be named form-submit instead of form-button ? -->
<slot
    delayed={$delayed}
/>
