<script lang="ts">
	import * as Button from "$lib/components/ui/button";

	let { ref = $bindable(null), ...restProps }: Omit<Button.Props, "type"> = $props();
</script>

<Button.Root type="submit" bind:ref {...restProps} />
