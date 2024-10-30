import { URL, fileURLToPath } from "node:url";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			strict: false,
		},
	},
	assetsInclude: ["**/*.md", "**/*.mdx"],
	resolve: {
		alias: [
			{
				find: "contentlayer/generated",
				replacement: fileURLToPath(new URL("./.contentlayer/generated", import.meta.url)),
			},
		],
	},
});
