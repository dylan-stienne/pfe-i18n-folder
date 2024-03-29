module.exports = {
	parser: "babel-eslint",
	extends: ["react-app", "plugin:react/recommended"],
	plugins: ["react", "react-hooks"],
	rules: {
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
	},
};
