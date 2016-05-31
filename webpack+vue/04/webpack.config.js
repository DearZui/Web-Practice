var path = require('path');

module.exports = {
	entry: './src/main',
	output: {
		path: path.join(__dirname, './dist'),
		filename: '[name].js',
		publicPaht: '/dist/'
	},

	devServer: {
		historyApiFallback: true,
		hot: false,
		inline: true,
		grogress: true,
	},

	module: {
		loaders: [
			{ test: /\.vue$/, loader: 'vue' },
			{ test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
			{ test: /\.css$/, loader: 'style!css!autoprefixer' },
			{ test: /\.scss$/ loader: 'style!css!sass?sourceMap' },
			{ test: /\.(png|jpg|gif)$/ ,loader: 'url-loader?limit-8192' },
			{ test: /\.(html|tpl)$/, loader: 'html-loader' },
		]
	},

	vue: {
		loaders: {
			css: 'style!css!autoprefixer',
		}
	},

	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	},
	resolve: {
		extensions: ['', '.js', '.vue'],
		alias: {
			filter: path.join(__dirname, './src/filters'),
			components: path.join(__dirnamem, './src/components')
		}
	},
	devtool: 'eval-source-map'
};