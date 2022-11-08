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
			}),
			minHeight: ({ theme }) => ({
				...theme('spacing')
			}),
			colors: {
				'base-content': '#1f2937',
				primary: '#560df8',
				'primary-focus': '#4506cb',
				'primary-content': '#fff',
				secondary: '#f000b8',
				'secondary-focus': '#c20095',
				'secondary-content': '#fff',
				accent: '#3acdbe',
				'accent-focus': '#2ca79b',
				'accent-content': '#153734',
				info: '#3cbff8',
				'info-content': '#002b3d',
				success: '#38d399',
				'success-content': '#00331f',
				warning: '#fcbd24',
				'warning-content': '#392900',
				error: '#f87272',
				'error-content': '#470001',
				neutral: '#3c4451',
				'neutral-focus': '#303640',
				'neutral-content': '#fff',
				'base-100': '#fff',
				'base-200': '#f2f2f2',
				'base-300': '#e5e6e6',
				'base-content': '#1f2937'
			}
		}
	},

	plugins: [require('tailwindcss-flip'), require('tailwindcss-dir')()]
}

module.exports = config
