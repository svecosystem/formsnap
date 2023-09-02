<script lang="ts">
	import { dev } from "$app/environment";
	import { SiteFooter, SiteHeader, TailwindIndicator } from "@/components/index.js";
	import { setInitialClassState } from "@/components/light-switch/light-switch.js";
	import "@/styles/app.postcss";
</script>

<svelte:head>
	<!-- This causes the new eslint-plugin-svelte: https://github.com/sveltejs/eslint-plugin-svelte/issues/492 -->
	{@html `<\u{73}cript nonce="%sveltekit.nonce%">(${setInitialClassState.toString()})();</script>`}
</svelte:head>

<div class="relative flex min-h-screen flex-col">
	<SiteHeader />
	<div class="flex-1">
		<slot />
	</div>
	<SiteFooter />
	{#if dev}
		<TailwindIndicator />
	{/if}
</div>
