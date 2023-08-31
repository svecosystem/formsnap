<script lang="ts">
	import { FORM_FIELD_CONTEXT, type FormFieldContext } from "$lib/internal/index.js";
	import { getContext } from "svelte";
	import type { HTMLInputAttributes } from "svelte/elements";
	import { get } from "svelte/store";

	type $$Props = HTMLInputAttributes;

	const { formItemId, value } = getContext<FormFieldContext>(FORM_FIELD_CONTEXT);

	function action(node: HTMLInputElement) {
		node.id = formItemId;
		node.value = (get(value) as string) ?? ("" as string);

		const handleChange = (e: Event) => {
			if (!(e.currentTarget instanceof HTMLInputElement)) return;
			value.set(e.currentTarget.checked);
		};

		node.addEventListener("change", handleChange);

		return {
			destroy() {
				node.removeEventListener("change", handleChange);
			}
		};
	}
</script>

<input type="checkbox" use:action />
