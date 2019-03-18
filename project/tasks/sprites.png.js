(function() {
  'use strict';

  var builder = function($) {

    $.gulp.task('sprites:png', function() {

      $.gulp.src($.path.sprites.pngStylesDest + '/empty.scss')
        .pipe($.rename(function (path){
          path.dirname = "";
          path.basename = '_sprite';
        }))
        .pipe($.gulp.dest($.path.sprites.pngStylesDest));


      var spriteData = $.gulp.src($.path.sprites.png)
        .pipe($.plumber())
        .pipe($.spritesmith({
            imgName: 'sprite.png',
            cssName: '_sprite.scss',
            padding: 40
        }));

      var imgStream = spriteData.img
        // DEV: We must buffer our stream into a Buffer for `imagemin` 
        //.pipe(buffer())
        //.pipe(imagemin())
        .pipe($.gulp.dest($.path.sprites.pngDest));

      var cssStream = spriteData.css
        .pipe($.gulp.dest($.path.sprites.pngStylesDest));

        return $.merge(imgStream, cssStream);
    });
  };

  module.exports = builder;
})();
