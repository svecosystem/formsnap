<script lang="ts">
	import { FORM_FIELD_CONTEXT, type FormFieldContext } from "$lib/internal/index.js";
	import { getContext } from "svelte";
	import type { HTMLInputAttributes } from "svelte/elements";
	import { get } from "svelte/store";

	type $$Props = HTMLInputAttributes & {
		value?: any;
	};

	const { formItemId, value, name } = getContext<FormFieldContext>(FORM_FIELD_CONTEXT);

	function action(node: HTMLInputElement) {
		node.id = formItemId;
		node.name = name;
		const handleChange = (e: Event) => {
			if (e.currentTarget instanceof HTMLInputElement) {
				if (e.currentTarget.checked) {
					value.set(e.currentTarget.value);
				}
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

<input type="radio" {...$$restProps} use:action />
