(function() {
  'use strict';

  var builder = function($) {

    $.gulp.task('js:foundation', function() {

      return $.gulp.src('./bower_components/**/*.*')
        .pipe($.$gulp.changed($.config.root))
        .pipe($.gulp.dest($.config.root + '/assets/js/foundation'));
    });
  };

  module.exports = builder;
})();
