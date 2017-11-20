'use strict';

const gulp = require('gulp');
const gulpIf = require('gulp-if');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');

const debug = require('gulp-debug');
const del = require('del');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('styles', function() {

  return gulp.src('frontend/styles/main.styl')
      .pipe(gulpIf(isDevelopment, sourcemaps.init()))
      .pipe(gulpIf(isDevelopment, stylus(), stylus({compress: true})))
      .pipe(gulpIf(isDevelopment, sourcemaps.write()))
      .pipe(gulp.dest('public'));

});

gulp.task('clean', function() {
  return del('public'); // ИСПОЛЬЗОВАТЬ ЛУЧШЕ ТОЛЬКО НА ПРОДЕ
});

gulp.task('assets', function() {
  return gulp.src('frontend/assets/**')
      .pipe(gulp.dest('public'));
});


gulp.task('build', gulp.series(
    'clean',
    gulp.parallel('assets', 'styles'))
);
