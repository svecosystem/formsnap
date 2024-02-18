import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	plugins: [sveltekit() as any],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
