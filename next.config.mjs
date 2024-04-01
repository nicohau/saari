import { readFile } from "fs/promises";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const packageJson = JSON.parse(await readFile(`${process.cwd()}/package.json`, "utf8"));
const { version } = packageJson;

const config = {
	publicRuntimeConfig: {
		version,
	},
};

export default { ...nextConfig, ...config };
