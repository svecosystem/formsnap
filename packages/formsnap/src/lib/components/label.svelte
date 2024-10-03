<script lang="ts">
	import { box, mergeProps } from "svelte-toolbelt";
	import type { LabelProps } from "./types.js";
	import { useId } from "$lib/internal/utils/id.js";
	import { useLabel } from "$lib/formsnap.svelte.js";

	let {
		id = useId(),
		ref = $bindable(null),
		children,
		child,
		...restProps
	}: LabelProps = $props();

	const labelState = useLabel({
		id: box.with(() => id),
		ref: box.with(
			() => ref,
			(v) => (ref = v)
		),
	});

	const mergedProps = $derived(mergeProps(restProps, labelState.props));
</script>

<!--
@component
## Label
A component that renders a label element associated with a form control, and must be used within a [Control](https://formsnap.dev/docs/components/control) component.

- [Label Documentation](https://formsnap.dev/docs/components/label)

@example
```svelte
<Control let:attrs>
	<Label>First Name</Label>
	<input type="text" name="first_name" {...attrs} bind:value={$formData.first_name} />
</Control>
```

### Slot Props
- `labelAttrs` - A spreadable object of attributes for the label element if `asChild` is `true`.

@param {boolean} [asChild=false] - Whether to opt out of rendering the label element. [[asChild Docs](https://formsnap.dev/docs/composition/aschild)]
-->
{#if child}
	{@render child({ props: mergedProps })}
{:else}
	<label {...mergedProps}>
		{@render children?.()}
	</label>
{/if}
