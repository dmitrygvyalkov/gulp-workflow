(function() {
  'use strict';

  var template = {
  	src: [
  		'./source/templates/**/*.pug',
  	],
  	pages: './source/templates/*.pug',
  	dest: './build'
  };

  module.exports = template;
})();