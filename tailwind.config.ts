import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				blue: '#0544A4',
				'light-blue': '#E8ECFC',
				'dark-gray': '#4B4A4A',
				gray: '#797676',
				'light-gray': '#F8F9FA',
				'light-red': '#FEDCDC',
			},
		},
		screens: {
			xxs: '362px',
			xs: '425px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
	},
	plugins: [],
};
export default config;
