const daisyui = require('daisyui')

const config = {
	mode: 'jit',

	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'class',

	theme: {
		extend: {}
	},

	plugins: [daisyui]
}

module.exports = config
