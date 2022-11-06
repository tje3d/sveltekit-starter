import { sveltekit } from '@sveltejs/kit/vite'
import Icons from 'unplugin-icons/vite'
import path from 'path'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte'
		})
	],

	preview: {
		port: 80,
		host: '0.0.0.0'
	},

	alias: {
		'/src/': path.resolve(__dirname, 'src')
	}
}

export default config
