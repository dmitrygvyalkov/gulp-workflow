(function() {
  'use strict';

  var builder = function($) {

    $.gulp.task('service:watch', function() {

      $.gulp.watch($.path.styles.all, $.gulp.series('styles:develop'));
      $.gulp.watch($.path.template.src, $.gulp.series('templates:develop'));
      $.gulp.watch($.path.js.src, $.gulp.series('js:develop'));
      $.gulp.watch($.path.resources.all, $.gulp.series('copy:resources'));
      $.gulp.watch($.path.sprites.png, $.gulp.series('sprites:png'));
      
    });
  };

  module.exports = builder;
})();