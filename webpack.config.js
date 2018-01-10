const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './js/app.js',

	output: {
		path: __dirname,
		filename: 'bundle.js',
		publicPath: '/',
	},

	devServer: {
		contentBase: __dirname,
		port: 4005,
		hot: true,
	},
};
