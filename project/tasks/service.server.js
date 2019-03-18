(function() {
  'use strict';

  var builder = function($) {

    $.gulp.task('service:server', function() {

      $.browserSync.init({
        server: $.path.build
      });

      $.gulp.watch($.path.build + '/**/*').on('change', $.browserSync.reload);;
      
    });
  };

  module.exports = builder;
})();