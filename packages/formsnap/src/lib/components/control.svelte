<script lang="ts">
	import { writable } from "svelte/store";
	import type { ControlProps } from "./types.js";
	import { type FormControlContext, getFormField, setFormControl } from "$lib/context.js";
	import type { ControlAttrs, LabelAttrs } from "$lib/attrs.types.js";
	import {
		getAriaDescribedBy,
		getAriaInvalid,
		getAriaRequired,
		getDataFsError,
		useId,
	} from "$lib/internal/utils/index.js";

	type $$Props = ControlProps;

	export let id = useId();

	const { name, fieldErrorsId, descriptionId, errors, constraints } = getFormField();

	const controlContext: FormControlContext = {
		id: writable(id),
		attrs: writable<ControlAttrs>(),
		labelAttrs: writable<LabelAttrs>(),
	};

	const { id: idStore } = controlContext;

	$: controlContext.id.set(id);

	setFormControl(controlContext);

	$: errorAttr = getDataFsError($errors);

	$: attrs = {
		name: $name,
		id: $idStore,
		"data-fs-error": errorAttr,
		"aria-describedby": getAriaDescribedBy({
			fieldErrorsId: $fieldErrorsId,
			descriptionId: $descriptionId,
			errors: $errors,
		}),
		"aria-invalid": getAriaInvalid($errors),
		"aria-required": getAriaRequired($constraints),
		"data-fs-control": "",
	} satisfies ControlAttrs;

	$: labelAttrs = {
		for: $idStore,
		"data-fs-label": "",
		"data-fs-error": errorAttr,
	} satisfies LabelAttrs;

	$: controlContext.attrs.set(attrs);
	$: controlContext.labelAttrs.set(labelAttrs);
</script>

<!--
@component
## Control
Associates a [Label](https://formsnap.dev/docs/components/label) with and provides necessary attributes for a form control.

- [Control Documentation](https://formsnap.dev/docs/components/label)

@example
```svelte
<Control let:attrs>
	<Label>Name</Label>
	<input type="text" {...attrs} bind:value={$formData.name} />
</Control>
```

### Slot Props
- `attrs` - A spreadable object of attributes that must be applied to the form control element.
-->

<slot {attrs} />
