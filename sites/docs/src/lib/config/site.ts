export const siteConfig = {
	name: "Svecodocs",
	url: "https://svecodocs.pages.dev",
	description: "Docs template for SvelteKit",
	links: {
		x: "https://x.com/huntabyte",
		github: "https://github.com/svecosystem",
	},
	author: "Huntabyte",
	keywords: "Svelte ecosystem,ecosystem,svecosystem,sveltekit,svelte libraries",
	ogImage: {
		url: "https://svecodocs.pages.dev/og.png",
		width: "1200",
		height: "630",
	},
	license: {
		name: "MIT",
		url: "https://github.com/svecosystem/svecodocs/blob/main/LICENSE",
	},
};

export type SiteConfig = typeof siteConfig;
