(function() {
  'use strict';

  var builder = function($) {

    $.gulp.task('js:build', function() {

    	var webpackConfig = require('../../webpack.config.js');

    	if ($.debug) {
    		const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
	    	webpackConfig.plugins.push(new uglifyJSPlugin({
	    		sourceMap: true
	    		})); 
    	} else {
        webpackConfig.mode = 'production';
      }

    	

      return $.gulp.src($.path.js.src)
			.pipe($.gulpWebpack(webpackConfig, $.webpack))
    		.pipe($.gulp.dest($.path.js.dest));
    });
  };

  module.exports = builder;
})();