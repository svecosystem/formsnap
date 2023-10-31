/// <reference types="vitest" />
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { fileURLToPath, URL } from "url";

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"],
		globals: true,
		environment: "jsdom",
		includeSource: ["src/**/*.{js,ts,svelte}"],
		setupFiles: ["./other/setupTest.ts"],
		coverage: {
			exclude: ["setupTest.ts"]
		},
		alias: [{ find: /^svelte$/, replacement: "svelte/internal" }]
	},
	server: {
		fs: {
			strict: false
		}
	},
	assetsInclude: ["**/*.md", "**/*.mdx"],
	resolve: {
		alias: [
			{
				find: "contentlayer/generated",
				replacement: fileURLToPath(new URL("./.contentlayer/generated", import.meta.url))
			}
		]
	}
});
