(function() {
  'use strict';

  var builder = function($) {

    $.gulp.task('svgsprites:scss', function() {
      return $.gulp.src('./source/images/svg/*.svg')
        .pipe($.$gulp.svgsprites({
          preview: false,
          selector: "%f",
          
          svg: {
            sprite: "build/assets/images/svgsprite.svg"
          },

          cssFile: "source/scss/svgsprites/_sprite.scss",
          templates: {
            css: require("fs").readFileSync('source/scss/templates/_sprite_template.scss', "utf-8")
          }

        }))
        .pipe($.gulp.dest("./"));

    });
  };

  module.exports = builder;
})();