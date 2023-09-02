<script lang="ts">
	import type { SidebarNavItem } from "@/config/index.js";
	import { SidebarNavItems } from "@/components/index.js";
	export let items: SidebarNavItem[] = [];
</script>

{#if items.length}
	<nav class="w-full">
		{#each items as item, index (index)}
			<div class="pb-4">
				<h4 class="mb-1 rounded-md px-1 py-1 text-sm font-medium text-muted-foreground">
					{item.title}
				</h4>
				{#if item.items}
					<SidebarNavItems items={item.items} />
				{/if}
			</div>
		{/each}
	</nav>
{/if}
