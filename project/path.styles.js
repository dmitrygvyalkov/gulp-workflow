(function() {
  'use strict';

  var styles = {
  	all: [
  		'./source/scss/**/*.scss',
  	],
    includes: [
      'node_modules',
    ],
  	src: [
  		'./source/scss/*.scss',
  	],
  	dest: './build/assets/css',
  };

  module.exports = styles;
})();