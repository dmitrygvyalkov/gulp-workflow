(function() {
  'use strict';

  var builder = function($) {

    $.gulp.task('service:clean', function() {

      return $.del($.path.build);
      
    });
  };

  module.exports = builder;
})();