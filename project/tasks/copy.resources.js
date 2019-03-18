(function() {
  'use strict';

  var builder = function($) {

    $.gulp.task('copy:resources', function() {

      return $.gulp.src($.path.resources.all)
              .pipe($.changed($.path.build))
              .pipe($.gulp.dest($.path.build))
      
    });
  };

  module.exports = builder;
})();