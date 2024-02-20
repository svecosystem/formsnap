<script lang="ts">
	import { getFormControl } from '$lib/context.js';
	import type { LabelProps } from './types.js';
	import type { LabelAttrs } from '$lib/attrs.types.js';

	type $$Props = LabelProps;

	export let asChild = false;
	export let el: $$Props['el'] = undefined;

	const { labelAttrs: labelAttrsStore } = getFormControl();

	$: localLabelAttrs = {
		...$labelAttrsStore,
		...$$restProps
	} satisfies LabelAttrs;
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

{#if asChild}
	<slot labelAttrs={localLabelAttrs} />
{:else}
	<label {...localLabelAttrs} bind:this={el}>
		<slot labelAttrs={localLabelAttrs} />
	</label>
{/if}
