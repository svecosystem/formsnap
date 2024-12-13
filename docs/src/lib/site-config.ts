import { defineSiteConfig } from "@svecodocs/kit";

export const siteConfig = defineSiteConfig({
	name: "Formsnap",
	url: "https://next.formsnap.dev",
	ogImage: {
		url: "https://next.formsnap.dev/og.png",
		height: "630",
		width: "1200",
	},
	description: "Accessible and powerful form components for SvelteKit.",
	author: "Huntabyte",
	keywords: [
		"svelte",
		"sveltekit",
		"forms",
		"zod",
		"superforms",
		"sveltekit forms",
		"svelte forms",
		"svelte form components",
		"svelte form library",
		"formsnap",
		"sveltekit-superforms",
		"form components",
		"sveltekit form actions",
		"sveltekit SPA forms",
	],
	license: {
		name: "MIT",
		url: "https://github.com/svecosystem/formsnap/blob/main/LICENSE",
	},
	links: {
		x: "https://x.com/huntabyte",
		github: "https://github.com/svecosystem/formsnap",
	},
});
