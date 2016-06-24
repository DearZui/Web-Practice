var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:8888',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [],
	module: {
		loader: [{
			test: /\.js$/,
			loaders: ['bable'],
			include: path.join(__dirname, 'src')
		}]
	}
};