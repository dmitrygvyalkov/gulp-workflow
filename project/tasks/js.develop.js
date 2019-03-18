(function() {
  'use strict';

  var builder = function($) {

    $.gulp.task('js:develop', function() {
    	var webpackConfig = require('../../webpack.config.js');

      return $.gulp.src($.path.js.src)
			.pipe($.gulpWebpack(webpackConfig, $.webpack))
    		.pipe($.gulp.dest($.path.js.dest));
    });
  };

  module.exports = builder;
})();