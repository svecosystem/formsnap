<script lang="ts">
	import { FORM_FIELD_CONTEXT, type FormFieldContext } from "$lib/internal/index.js";
	import { getContext } from "svelte";
	import type { HTMLTextareaAttributes } from "svelte/elements";
	import { get } from "svelte/store";

	type $$Props = HTMLTextareaAttributes;

	const { formItemId, value, name } = getContext<FormFieldContext>(FORM_FIELD_CONTEXT);

	function action(node: HTMLTextAreaElement) {
		node.id = formItemId;
		node.value = (get(value) as string) ?? ("" as string);
		node.name = name;
		const handleInput = (e: Event) => {
			if (e.currentTarget instanceof HTMLTextAreaElement) {
				value.set(e.currentTarget.value);
			}
		};

		node.addEventListener("input", handleInput);

		return {
			destroy() {
				node.removeEventListener("input", handleInput);
			}
		};
	}
</script>

<textarea {...$$restProps} use:action />
