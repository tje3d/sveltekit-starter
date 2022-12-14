// import adapter from '@sveltejs/adapter-node'
import adapterStatic from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapterStatic({
			precompress: true,
			fallback: 'index.html'
		}),
		version: {
			pollInterval: 60 * 1000
		}
	}
}

export default config
