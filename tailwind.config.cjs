const config = {
	mode: 'jit',

	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'class',

	theme: {
		screens: {
			sm: '600px',
			md: '960px',
			lg: '1280px',
			xl: '1440px'
		},

		extend: {
			maxWidth: ({ theme }) => ({
				...theme('spacing'),
				screen: '100vw'
			})
		}
	},

	plugins: [require('daisyui'), require('tailwindcss-flip'), require('tailwindcss-dir')()],

	daisyui: {
		rtl: false
	}
}

module.exports = config
