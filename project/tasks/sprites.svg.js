(function() {
  'use strict';

  var builder = function($) {

    $.gulp.task('sprites:svg', function() {
      return $.gulp.src($.path.sprites.svg)
        .pipe($.svgmin({
          js2svg: {
            pretty: true
          }
        }))
        .pipe($.cheerio({
          run: function ($) {
            $('[fill]').removeAttr('fill');
            $('[style]').removeAttr('style');
            $('[stroke]').removeAttr('stroke');
          },
          //parserOptions: { xmlMode: true }
        }))
        .pipe($.replace('&gt;', '>'))
        .pipe($.svgsprites({
          mode: "symbols",
          preview: false,
          selector: "svg-%f",
          
          svg: {
            symbols: $.path.sprites.svgDest
          },

        }))
        .pipe($.gulp.dest("./"));

    });
  };

  module.exports = builder;
})();