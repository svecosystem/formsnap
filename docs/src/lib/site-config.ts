import { defineSiteConfig } from "@svecodocs/kit";

export const siteConfig = defineSiteConfig({
	name: "Svecodocs",
	url: "https://docs.sveco.dev",
	ogImage: {
		url: "https://docs.sveco.dev/og.png",
		height: "630",
		width: "1200",
	},
	description: "Documentation toolkit for Svecosystem Projects.",
	author: "Huntabyte",
	keywords: ["svecosystem", "sveltekit", "documentation", "docs"],
	license: {
		name: "MIT",
		url: "https://github.com/svecosystem/svecodocs/blob/main/LICENSE",
	},
	links: {
		x: "https://x.com/huntabyte",
		github: "https://github.com/svecosystem/svecodocs",
	},
});
