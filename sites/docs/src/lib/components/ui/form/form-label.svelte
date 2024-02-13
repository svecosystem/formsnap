<script lang="ts">
	import { getFormField, getFormItem, Form } from "formsnap";
	import { cn } from "$lib/utils";
	import { Label } from "$lib/components/ui/label";

	type $$Props = Form.LabelProps;

	let className: $$Props["class"] = undefined;
	export { className as class };

	const { id, labelAttrs } = getFormItem();
	const { errors } = getFormField();
</script>

<Label
	for={$id}
	class={cn($errors.length > 0 && "text-destructive", className)}
	{...$labelAttrs}
	{...$$restProps}
>
	<slot />
</Label>
