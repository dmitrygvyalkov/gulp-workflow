(function() {
  'use strict';

  var builder = function($) {

  	var patterns = [];
    patterns.push({match: '%=version=%', replace: '?rel=' + $.package.version});

    $.gulp.task('templates:build', function() {
    	return $.gulp.src($.path.template.pages)
        .pipe($.pug({ pretty: true }))
        .pipe($.replace({
          patterns: patterns,
          usePrefix: false
        }))
        .pipe($.gulp.dest($.path.template.dest))
    });
  };

  module.exports = builder;
})();