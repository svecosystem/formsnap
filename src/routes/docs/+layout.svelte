<script lang="ts">
	import { SidebarNav } from "@/components/index.js";
	import { navigation } from "@/config/index.js";
</script>

<div class="border-b">
	<div
		class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-4 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-8"
	>
		<aside
			class="fixed top-14 z-30 -ml-2 hidden min-h-[calc(100vh-64px)] w-full shrink-0 md:sticky md:block overflow-y-auto"
		>
			<div class="relative overflow-hidden h-full py-6 pr-6 pl-8 lg:py-8">
				<SidebarNav items={navigation.sidebar} />
			</div>
		</aside>
		<slot />
	</div>
</div>
