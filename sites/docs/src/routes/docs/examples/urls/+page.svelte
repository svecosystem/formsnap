<script lang="ts">
	import DynamicFields from "$lib/components/examples/dynamic-fields.svelte";

	let { data } = $props();
</script>

<DynamicFields data={data.form} />
