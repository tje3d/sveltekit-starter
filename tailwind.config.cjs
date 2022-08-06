const config = {
	mode: 'jit',

	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'class',

	theme: {
		extend: {}
	},

	plugins: [require('daisyui'), require('tailwindcss-flip'), require('tailwindcss-dir')()],

	daisyui: {
		rtl: false
	}
}

module.exports = config
