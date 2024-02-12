<script lang="ts" context="module">
	type T = Record<string, unknown>;
</script>

<script lang="ts" generics="T extends Record<string, unknown> = Record<string, unknown>">
	import type { SuperForm } from 'sveltekit-superforms';

	export let form: SuperForm<T>;
</script>

<form>
	<slot config={form} />
</form>
