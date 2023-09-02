<script lang="ts">
	import { FORM_FIELD_CONTEXT, type FormFieldContext } from "@/lib/internal/index.js";
	import { getContext } from "svelte";
	import type { HTMLInputAttributes } from "svelte/elements";
	import { get } from "svelte/store";

	type $$Props = HTMLInputAttributes & {
		value?: any;
	};

	const { formItemId, value, name } = getContext<FormFieldContext>(FORM_FIELD_CONTEXT);

	function action(node: HTMLInputElement) {
		node.id = formItemId;
		node.value = (get(value) as string) ?? ("" as string);
		node.name = name;
		const handleInput = (e: Event) => {
			if (e.currentTarget instanceof HTMLInputElement) {
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

<input {...$$restProps} use:action />
