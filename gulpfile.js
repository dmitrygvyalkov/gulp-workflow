$ = {
	debug: true,
	mode: 'development',
	package: require('./package.json'),
	path: {
		build: './build',
    	source: './source',
    	task: require('./project/path.task.js'),
		template: require('./project/path.template.js'),
		styles: require('./project/path.styles.js'),
		js: require('./project/path.javascript.js'),
		resources: require('./project/path.resources.js'),
		sprites: require('./project/path.sprites.js'),
	},
	gulp: require('gulp'),
	pug:  require('gulp-pug'),
	scss: require('gulp-sass'),
	autoprefixer: require('autoprefixer'),
	del: require('del'),
	color: require('ansi-colors'),
	webpack: require('webpack'),
	gulpWebpack: require('webpack-stream'),
	browserSync: require('browser-sync').create(),
	changed: require('gulp-changed'),
	spritesmith: require('gulp.spritesmith'),
	merge: require('merge-stream'),
	plumber: require('gulp-plumber'),
	rename: require('gulp-rename'),
	svgsprites: require('gulp-svg-sprites'),
	svgmin: require('gulp-svgmin'),
	cheerio: require('gulp-cheerio'),
	replace: require('gulp-replace-task'),
	cssnano: require('cssnano'),
	postcss: require('gulp-postcss'),
	sourcemaps: require('gulp-sourcemaps'),
	if: require('gulp-if'),
};

// Load Tasks
$.path.task.forEach(function(taskPath) {
  var builder = require(taskPath)($);
});

// Build task
$.gulp.task('build', $.gulp.series(
	'service:clean',
	'sprites:png',
	'sprites:svg',
	'copy:resources',
	$.gulp.parallel('styles:build', 'templates:build', 'js:build')
	));

// Default (develop) task
$.gulp.task('dev', $.gulp.series(
	'service:clean',
	'sprites:png',
	'sprites:svg',
	'copy:resources',
	$.gulp.parallel('styles:develop', 'templates:develop', 'js:develop'),
	$.gulp.parallel('service:watch', 'service:server')
	));

$.gulp.task('default', $.gulp.series('dev'));