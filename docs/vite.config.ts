import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

const __dirname = new URL(".", import.meta.url).pathname;

export default defineConfig({
	// @ts-expect-error - shh
	plugins: [sveltekit(), tailwindcss()],
	optimizeDeps: {
		exclude: ["formsnap"],
	},
	server: {
		fs: {
			allow: [resolve(__dirname, "./.velite")],
		},
	},
});
