'use strict';

const gulp = require('gulp');
const through2 = require('through2').obj;
const File = require('vinyl');

gulp.task('assets', function() { // ДВЦУСТАДИЙНАЯ ОБРАБОТКА (2 through2)

  const mtimes = {};// СОХРАНЯЕТ ДАТЫ ИЗМЕНЕНИЙ

  return gulp.src('frontend/assets/**/*.*')
      .pipe(through2(
          function(file, enc, callback) {
            mtimes[file.relative] = file.stat.mtime;
            callback(null, file);// ПЕРЕДАЕМ ФАЙЛ ДАЛЬШЕ, callback()- ПРЕКРАЩЕНИЕ ПРОЦЕССА
          }
      ))
      .pipe(gulp.dest('public')) //gulp.dest - КИДАЕТ В ПОТОК ФАЙЛЫ КОТОРЫЕ СКОПИРОВАЛ
      .pipe(through2(
          function(file, enc, callback) {
            callback(); // ОТФИЛЬТРОВЫВАЕМ ФАЙЛЫ, ЗАВЕРШАЕМ ПЕРВЫЙ ПРОЦЕСС
          },
          function(callback) {//function(callback) ЗАПУСТИТСЯ КОГДА БУДЕТ on.end ПЕРВОЙ ФУНКЦИИ
            let manifest = new File({ // ДЕЛАЕМ НОВЫЙ ФАЙЛ
              // cwd base path contents
              contents: new Buffer(JSON.stringify(mtimes)),
              base:     process.cwd(),
              path:     process.cwd() + '/manifest.json'
            });
            this.push(manifest);
            callback();
          }
      ))
      .pipe(gulp.dest('.'));// manifest.json ПОПАДЕТ В КОРЕНЬ ПРОЕКТА

});