<script lang="ts">
	import type { PageData } from "./$types.js";
	import DynamicFields from "$lib/components/examples/dynamic-fields.svelte";

	export let data: PageData;
</script>

<DynamicFields data={data.form} />
