(function() {
  'use strict';

  var js = {
  	src: [
  		'./source/js/**/*.js',
  	],
  	entry: {
  	  		main: './source/js/main.js',
  	  		app: './source/js/00000-app.js'
  	  	},
  	dest: './build/assets/js'
  };

  module.exports = js;
})();