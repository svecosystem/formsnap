<script lang="ts">
	import { getFormFieldCtx } from '$lib/context.js';
	import type { HTMLLabelAttributes } from 'svelte/elements';

	type $$Props = HTMLLabelAttributes;

	const { ids } = getFormFieldCtx();
</script>

<label for={$ids.field} {...$$restProps}>
	<slot />
</label>
