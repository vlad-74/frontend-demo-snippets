let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

var fs = require('fs');
var stream = new fs.ReadStream(__dirname + '\\gulpfile.js', {encoding: 'utf-8'});
console.log('\n' + "START" + '\n');
stream.on('readable', function() {
  var data = stream.read();
  if(data != null){console.log('ФАЙЛ ' + __dirname + '/gulpfile.js : ' + '\n' + gl_hr + '\n' + data.toString());}
});

stream.on('end', function() {
  console.log('\n' + "THE END" + '\n' + gl_hr + '\nРЕЗУЛЬТАТ ВЫПОЛНЕНИЯ gulpfile.js СМОТРИ НИЖЕ ЧЕРЕЗ НЕСКОЛЬКО СЕКУНД' );
});
//-------------------------------------------------------------------------------------
let str = `
npm install gulp-cli -g
npm install gulpjs/gulp#4.0 -S
type nul > "gulpfile.js" // СОЗДАТЬ ПУСТОЙ gulpfile.js  ИЛИ  touch gulpfile.js
gulp -v

npm rm --global gulp

КАК ВАРИАНТ ЧТОБЫ ОБОЙТИСЬ БЕЗ ГЛОБАЛЬНОГО И ЗАПУСКАТЬ ЛОКАЛЬНЫЙ gulp - ВСТАВИТЬ В package.json В "scripts":
"gulp": ""./node_modules/.bin/gulp //gulp.cmd

'use strict';
const gulp = require('gulp');
gulp.task('hello', function(callback) {
  console.log("Hello");
  callback(); //ВСЕ ЗААЧИ В gulp АСИНХРОННЫЕ, ДЛЯ ТОГО ЧТОБЫ ПОНЯТЬ ЧТО ЗАДАЧА ЗАВЕРШЕНА - callback()
});

gulp.task('default', function() {
  return gulp.src('source/**/*.*') //СОЗДАТЬ В ПАМЯТИ РЕКУРСИВНО ВСЕ ФАЙЛЫ ИЗ ПАПКИ source
  	.pipe(gulp.dest('dest'); //ВСТАВИТЬ РЕКУРСИВНО ВСЕ ФАЙЛЫ ИЗ ПАМЯТИ В ПАПКУ dest
});

// По умолчанию запускаются скрипты и стили
gulp.task('default', ['scripts', 'styles'], function() {...});

// Both scripts and styles call clean
gulp.task('styles', ['clean'], function() {...});
gulp.task('scripts', ['clean'], function() {...});


gulp - НЕ ПОЗВОЛЯЕТ ПЕРЕДАВАТЬ ДАННЫЕ МЕЖДУ ЗАДАЧАМИ, ПРОЧИТАННОЕ НЕ ИСПОЛЬЗУЕТ !!!
gulp.parallel()
gulp.series()
gulp.task('example', gulp.parallel('hello', 'example:promise', 'example:stream', 'example:process'));
`
console.log(str);

var child_process = require('child_process');


// child_process.exec('node array/dir', function(error, stdout, stderr) {
// 	console.log(stdout);
// });


child_process.exec("cd ###gulp/dir&gulp example", function(error, stdout, stderr) {
    console.log(stdout);
});

var open = require("open");
setTimeout(function(){ open("https://gulpjs.com/"); }, 5000);
