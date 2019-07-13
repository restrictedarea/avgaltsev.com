const path = require("path");

const less = require("less");

const PostcssExportsWebpackPlugin = require("postcss-exports-webpack-plugin").default;

const postcssExportsWebpackPlugin = new PostcssExportsWebpackPlugin({
	output: {
		// path: path.resolve(__dirname, "public"),
		// filename: "[name].css",
		filename: "main.css",
		// takeCss: (css) => {},
	}
});

module.exports = {
	mode: "development",

	entry: "./application/main.ts",

	output: {
		path: path.resolve(__dirname, "public"),
		filename: "[name].js",
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader",
			},

			{
				test: /\.less$/,
				loader: postcssExportsWebpackPlugin.getLoader(),

				options: {
					preprocess: (source) => {
						return less.render(`@import "${path.resolve("./application/variables.less")}";@import "${path.resolve("./application/mixins.less")}";${source}`).then((output) => {
							return output.css;
						});
					},

					// generateName: PRODUCTION ? function () {
					// 	return getClassName(currentNumber++);
					// } : null,
				},
			},
		],
	},

	resolve: {
		extensions: [".ts", ".tsx"],
	},

	plugins: [
		postcssExportsWebpackPlugin,
	],
};
