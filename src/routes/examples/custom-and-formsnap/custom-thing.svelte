<script lang="ts">
	import { getForm } from "@/lib";

	const { delayed } = getForm();

	$: console.log($delayed);
</script>

{#if $delayed}
	<h1>Hello world</h1>
{/if}
