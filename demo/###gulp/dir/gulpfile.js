//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

'use strict';

const gulp = require('gulp');

gulp.task('hello', function(callback) {
  console.log("Hello");
  callback(); //ВСЕ ЗААЧИ В gulp АСИНХРОННЫЕ, ДЛЯ ТОГО ЧТОБЫ ПОНЯТЬ ЧТО ЗАДАЧА ЗАВЕРШЕНА - callback()
});

gulp.task('example:promise', function() {
  return new Promise((resolve, reject) => {
    // ...
    resolve('result');
  });
});


gulp.task('example:stream', function() {
  // reads all from stream (and throws the data away) and then done
  return require('fs').createReadStream(__filename);
});


gulp.task('example:process', function() {
  // returns child process
  return require('child_process').exec('nul chcp 866&DIR', function(error, stdout, stderr) {
    console.log(stdout);
  });
});


gulp.task('example', gulp.parallel('hello', 'example:promise', 'example:stream', 'example:process'));
