(function() {
  'use strict';

  var sprites = {
  	png: [
  		'./source/sprites/png/*.png',
  	],
  	pngDest: './build/assets/images',
  	pngStylesDest: './source/scss/sprites',

  	svg: [
  		'./source/sprites/svg/*.svg',
  	],
  	svgDest: 'build/assets/images/svgsprite.svg',
  };

  module.exports = sprites;
})();