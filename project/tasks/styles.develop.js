(function() {
  'use strict';

  var builder = function($) {

    $.gulp.task('styles:develop', function() {
      var plugins = [
          $.autoprefixer({
            browsers: ['last 3 version', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1'],
            cascade: true
          }),
        ];

      var options = {
        includePaths: $.path.styles.includes,
      };

      return $.gulp.src($.path.styles.src)
        .pipe($.sourcemaps.init())
        .pipe($.scss(options).on('error', $.scss.logError))
        .pipe($.postcss(plugins))
        .pipe($.sourcemaps.write('./'))
        .pipe($.gulp.dest($.path.styles.dest));
    });
  };

  module.exports = builder;
})();