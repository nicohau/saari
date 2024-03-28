/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

const { version } = require("./package.json");

module.exports = {
	publicRuntimeConfig: {
		version,
	},
};
