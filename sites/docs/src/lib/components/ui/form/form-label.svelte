<script lang="ts">
	import { getFormField, getFormControl, type LabelProps as PrimitiveLabelProps } from "formsnap";
	import { cn } from "$lib/utils";
	import { Label } from "$lib/components/ui/label";

	type $$Props = PrimitiveLabelProps;

	let className: $$Props["class"] = undefined;
	export { className as class };

	const { labelAttrs } = getFormControl();
	const { errors } = getFormField();
</script>

<Label
	class={cn($errors.length > 0 && "text-destructive", className)}
	{...$$restProps}
	{...$labelAttrs}
>
	<slot />
</Label>
