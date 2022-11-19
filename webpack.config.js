const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry: [
		'react-hot-loader/patch',
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		'./js/index',
		'./sass/layout.scss',
	],
	output: {
		path: path.join(__dirname, 'js'),
		filename: 'bundle.js',
		publicPath: '/js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	plugins: [
		/**
		 * This is where the magic happens! You need this to enable Hot Module Replacement!
		 */
		new webpack.HotModuleReplacementPlugin(),
		/**
		 * NoErrorsPlugin prevents your webpack CLI from exiting with an error code if
		 * there are errors during compiling - essentially, assets that include errors
		 * will not be emitted. If you want your webpack to 'fail', you need to check out
		 * the bail option.
		 */
		new webpack.NoEmitOnErrorsPlugin(),
		/**
		 * DefinePlugin allows us to define free variables, in any webpack build, you can
		 * use it to create separate builds with debug logging or adding global constants!
		 * Here, we use it to specify a development build.
		 */
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
	],
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/],
				loader: 'babel-loader',
				include: path.join(__dirname, 'js'),
			},
			{
				test: /\.scss?/,
				loaders: ['style-loader', 'css-loader', 'sass-loader'],
				include: path.join(__dirname, 'sass'),
			},
		],
	},
};
