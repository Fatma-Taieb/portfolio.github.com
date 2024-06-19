import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#FFF',
				'secondary': '#E3618E',
				'accent': '#E3618E',
				'text': '#353755',
				'dk-primary': '#000000',
				'dk-secondary': '#FD6C9E',
				'dk-accent': '#E3618E',
				'dk-text': '#C8DCF5',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		typography,
	],
}
