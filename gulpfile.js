'use-strict';

// dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

//SCSS - CSS; inputs and outputs
var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

// Compile CSS - translate SCSS into readible CSS for the browser
gulp.task('compile_scss', function() {
	gulp.src(SCSS_SRC)
	  .pipe(sass().on('error', sass.logError))
	  .pipe(minifyCSS())
	  .pipe(rename({ suffix: '.min' }))
	  .pipe(changed(SCSS_DEST))
	  .pipe(gulp.dest(SCSS_DEST));
});

// Detect changes in SCSS file
gulp.task('watch_scss', function() {
	gulp.watch(SCSS_SRC, ['compile_scss']);
});

// Run tasks - when 'gulp' is called in the terminal this will run and call the others
gulp.task('default', ['watch_scss']);
