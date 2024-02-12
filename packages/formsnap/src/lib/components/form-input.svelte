<script lang="ts">
	import { getFormFieldCtx } from '$lib/context.js';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type $$Props = HTMLInputAttributes;

	const { ids } = getFormFieldCtx();
</script>

<input id={$ids.field} {...$$restProps} />
