/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack(config, { isServer }) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: /\.[jt]sx?$/,
			use: [{ loader: '@svgr/webpack', options: { icon: true } }],
		});
		if (!isServer) {
			config.node = {
				global: false,
			};
		}
		return config;
	},
};

module.exports = nextConfig;
