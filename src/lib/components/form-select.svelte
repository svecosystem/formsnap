<script lang="ts">
	import { FORM_FIELD_CONTEXT, type FormFieldContext } from "$lib/internal/index.js";
	import { getContext } from "svelte";
	import type { HTMLSelectAttributes } from "svelte/elements";
	import { get } from "svelte/store";

	type $$Props = HTMLSelectAttributes;

	const { formItemId, value, name } = getContext<FormFieldContext>(FORM_FIELD_CONTEXT);

	function action(node: HTMLSelectElement) {
		node.id = formItemId;
		node.value = (get(value) as string) ?? ("" as string);
		node.name = name;
		const handleChange = (e: Event) => {
			if (e.currentTarget instanceof HTMLSelectElement) {
				value.set(e.currentTarget.value);
			}
		};

		node.addEventListener("change", handleChange);

		return {
			destroy() {
				node.removeEventListener("change", handleChange);
			}
		};
	}
</script>

<select {...$$restProps} use:action>
	<slot />
</select>
