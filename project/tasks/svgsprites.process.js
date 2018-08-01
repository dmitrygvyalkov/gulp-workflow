(function() {
  'use strict';

  var builder = function($) {

    $.gulp.task('svgsprites:process', function() {
      return $.gulp.src('./source/images/svg/*.svg')
        .pipe($.$gulp.svgmin({
          js2svg: {
            pretty: true
          }
        }))
        .pipe($.$gulp.cheerio({
          run: function ($) {
            $('[fill]').removeAttr('fill');
            $('[style]').removeAttr('style');
            $('[stroke]').removeAttr('stroke');
          },
          //parserOptions: { xmlMode: true }
        }))
        .pipe($.$gulp.replace('&gt;', '>'))
        .pipe($.$gulp.svgsprites({
          mode: "symbols",
          preview: false,
          selector: "icon-%f",
          
          svg: {
            symbols: "build/assets/images/svgsprite.svg"
          },
        }))
        .pipe($.gulp.dest("./"));

    });
  };

  module.exports = builder;
})();