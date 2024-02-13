<script lang="ts">
	import { FormsnapDark, FormsnapLight } from "$lib/components/logos/index.js";
</script>

<div class="flex items-center gap-1.5 lg:flex-1">
	<a
		href="/"
		class="flex flex-shrink-0 items-end gap-1.5 text-xl font-bold text-gray-900 dark:text-white"
	>
		<FormsnapLight class="block h-7 w-auto dark:hidden" />
		<FormsnapDark class="hidden h-7 w-auto dark:block" />
		<span class="sr-only"> Current Page Here </span>
	</a>
</div>
