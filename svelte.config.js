import adapter from "@sveltejs/adapter-node";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],

	kit: {
		adapter: adapter({
			out: "dist",
		}),
		csrf: { checkOrigin: true },
		serviceWorker: {
			register: true,
			files: (filepath) => !/\.DS_Store/.test(filepath),
		},
	},
};

export default config;
