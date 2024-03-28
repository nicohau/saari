/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

import { version } from "./package.json";

export const publicRuntimeConfig = {
	version,
};
