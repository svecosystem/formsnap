<script lang="ts">
	import {
		GitHubIcon,
		Code,
		MarkdownIcon,
		ShadcnIcon,
		MoonStars,
		FileHTML,
		Plug,
	} from "$lib/icons/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import FeatureCard from "$lib/components/feature-card.svelte";
	import A from "$lib/components/markdown/a.svelte";
</script>

<span class="hero-gradient"></span>
<div class="container relative mx-auto max-w-5xl py-20 sm:py-28 md:py-32">
	<h1
		class="text-balance text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
	>
		Documentation doesn't need to be so difficult
	</h1>
	<p class="mx-auto mt-6 max-w-3xl text-balance text-center text-base sm:text-lg">
		An opinionated template for documentation sites with SvelteKit and Markdown. Built and
		maintained by the <a
			href="https://github.com/svecosystem"
			target="_blank"
			class="font-medium text-brand underline underline-offset-4 transition-all hover:text-brand/95 hover:underline-offset-[6px]"
			>Svecosystem</a
		> team for our own use, but we hope you find it useful too!
	</p>
	<div class="mt-8 flex items-center justify-center gap-4">
		<Button href="/docs/guide" variant="brand" size="lg">Get Started</Button>
		<Button href="https://github.com/svecosystem/svecodocs" variant="outline" size="lg">
			<GitHubIcon class="mr-2 h-4 w-4" />
			View on GitHub
		</Button>
	</div>
</div>
<section class="relative mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-32 lg:px-8">
	<h2 class="mb-10 text-balance text-center text-3xl font-bold tracking-tight lg:text-4xl">
		What's included
	</h2>
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
		<FeatureCard title="Markdown Support" icon={MarkdownIcon}>
			Nothing beats the simplicity of Markdown for documenting your projects.
		</FeatureCard>
		<FeatureCard title="Syntax Highlighting" icon={Code}>
			Powered by <A href="https://shikiji.netlify.app/">Shikiji</A>, and enhanced by <A
				href="https://rehype-pretty-code.netlify.app/">Pretty Code</A
			> to provide the same syntax highlighting as VSCode.
		</FeatureCard>
		<FeatureCard title="Pre-built Components" icon={ShadcnIcon}>
			Simple to use components for common doc site elements, powered by shadcn-svelte.
		</FeatureCard>
		<FeatureCard title="Light and Dark Mode" icon={MoonStars}>
			Stop forcing your users to use one or the other. Out of the box light/dark mode lets them
			choose.
		</FeatureCard>
		<FeatureCard title="Meta Tags" icon={FileHTML}>
			All the meta tags you need to make your site look good when shared on social media.
		</FeatureCard>
		<FeatureCard title="Unified Plugins" icon={Plug}>
			Leverage the power of the <A href="https://github.com/unifiedjs">Unified</A> ecosystem with remark
			and rehype plugins.
		</FeatureCard>
	</div>
</section>
