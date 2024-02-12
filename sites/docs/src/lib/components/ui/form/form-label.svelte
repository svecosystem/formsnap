<script lang="ts">
	import type { Label as LabelPrimitive } from "bits-ui";
	import { getFormField, getFormItem } from "formsnap";
	import { cn } from "$lib/utils";
	import { Label } from "$lib/components/ui/label";

	type $$Props = LabelPrimitive.Props;

	let className: $$Props["class"] = undefined;
	export { className as class };

	const { id } = getFormItem();
	const { errors } = getFormField();
</script>

<Label for={$id} class={cn($errors.length > 0 && "text-destructive", className)} {...$$restProps}>
	<slot />
</Label>
