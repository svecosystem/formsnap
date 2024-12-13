import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsx } from "mdsx";
import mdsxConfig from "./mdsx.config.js";
import adapter from "@sveltejs/adapter-cloudflare";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [mdsx(mdsxConfig), vitePreprocess()],
	kit: {
		alias: {
			"$content/*": ".velite/*",
		},
		adapter: adapter(),
	},
	extensions: [".svelte", ".md"],
};

export default config;
