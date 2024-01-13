const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["index.html", "./scripts/index.ts", "./styles/index.pcss"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Quicksand Variable"],
			},
		},
	},
	plugins: [addDynamicIconSelectors()],
};
