<script lang="ts">
	import * as Alert from "@/components/ui/alert/index.js";
</script>

<Alert.Root class="mt-4">
	<slot name="icon" />

	<Alert.Title class="text-lg">
		<slot name="title" />
	</Alert.Title>

	<Alert.Description class="text-sm leading-relaxed">
		<p>
			<slot />
		</p>
	</Alert.Description>
</Alert.Root>
