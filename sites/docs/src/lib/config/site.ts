export const siteConfig = {
	name: "Formsnap",
	url: "https://formsnap.dev",
	description: "Accessible form components for SvelteKit.",
	links: {
		x: "https://x.com/huntabyte",
		github: "https://github.com/huntabyte/formsnap",
	},
	author: "Huntabyte",
	keywords:
		"Svelte forms,Sveltekit forms,superforms,svelte form components,accessible svelte forms,sveltekit form actions,Svelte ecosystem,ecosystem,svecosystem,sveltekit,svelte libraries",
	ogImage: {
		url: "https://formsnap.dev/og.png",
		width: "1200",
		height: "630",
	},
	license: {
		name: "MIT",
		url: "https://github.com/huntabyte/formsnap/blob/main/LICENSE",
	},
};

export type SiteConfig = typeof siteConfig;
