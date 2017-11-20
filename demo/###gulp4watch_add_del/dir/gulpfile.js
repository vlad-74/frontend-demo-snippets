'use strict';

const gulp = require('gulp');
const debug = require('gulp-debug');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const remember = require('gulp-remember');
const cached = require('gulp-cached');
const path = require('path');

// console.log('path.resolve(__filename = ', path.resolve(__filename);

gulp.task('styles', function() {

  return gulp.src('frontend/styles/**/*.css')
      .pipe(cached('styles')) // ИСКЛЮЧЕНИЕ ОДИНАКОВЫХ ФАЙЛОВ
      .pipe(autoprefixer()) // ДОБАВЛЯЕТ ПРЕФИКСЫ
      .pipe(remember('styles')) // КЭШИРОВАНИЕ РЕЗУЛЬТАТА
      .pipe(concat('all.css')) // ОБЪЕДЕНЯЕТ ФАЙЛЫ В 1 ФАЛ
      .pipe(gulp.dest('public'));

});

gulp.task('watch', function() {

  gulp.watch('frontend/styles/**/*.css', gulp.series('styles')).on('unlink', function(filepath) {
    remember.forget('styles', path.resolve(filepath));
    delete cached.caches.styles[path.resolve(filepath)];

  });

});

gulp.task('dev', gulp.series('styles', 'watch'));