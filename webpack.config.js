const webpack = require('webpack');
const path = require('./project/path.javascript.js');

const config = {
	entry: path.entry,
	mode: 'development',
	output: {
		filename: "[name].bundle.js"
	},
	plugins: [
	],
};

module.exports = config;