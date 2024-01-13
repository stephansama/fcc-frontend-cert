// eslint-disable-next-line @typescript-eslint/no-var-requires
const presetEnv = require("postcss-preset-env");

module.exports = {
	plugins: [
		// https://tailwindcss.com/docs/using-with-preprocessors
		require("postcss-import"),
		require("tailwindcss/nesting"),
		require("tailwindcss"),
		require("autoprefixer"),
		// https://preset-env.cssdb.org/features/
		presetEnv({ stage: 1 }),
	],
};
