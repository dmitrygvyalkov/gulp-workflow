(function() {
  'use strict';

  var builder = function($) {

    $.gulp.task('copy:images', function() {

      return $.gulp.src('./source/images/**/*.*')
        .pipe($.$gulp.changed($.config.root + '/assets/images/'))
        .pipe($.gulp.dest($.config.root + '/assets/images/'))
    });
  };

  module.exports = builder;
})();