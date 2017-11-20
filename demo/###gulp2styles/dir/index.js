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
  console.log('\n' + "THE END" + '\n' + gl_hr + '\nРЕЗУЛЬТАТ ВЫПОЛНЕНИЯ gulpfile.js СМОТРИ НИЖЕ ЧЕРЕЗ НЕСКОЛЬКО СЕКУНД + ДОБАВИТСЯ ПАПКА public С ФАЙЛАМИ : \nnode '+ __dirname.split('demo\\').pop() );
});
//-------------------------------------------------------------------------------------
let str = `
1. gulp-if(gulpIf) - ВВОДИТ УСЛОВИЕ В СБОРКУ:
  .pipe(gulpIf(isDevelopment, stylus(), stylus({compress: true})))
ЕСЛИ true - stylus(), ЕСЛИ false - stylus({compress: true})

2. gulp-stylus(stylus) - ВСЕ ФАЙЛЫ .styl ПРЕОБРАЗУЕТ В css
2.1. {compress: true} - МИНИМИЗИРУЕТ (СЖИМАЕТ) ФАЙЛ

3. gulp-sourcemaps(sourcemaps) - ДОБАВЛЯЕТ "КАРТУ" ДЛЯ css И js ФАЙЛОВ
3.1. sourcemaps СОСТОИТ ИЗ 2 ЧАСТЕЙ:
3.1.1. init  - .pipe(gulpIf(isDevelopment, sourcemaps.init()))
3.1.2. write - .pipe(gulpIf(isDevelopment, sourcemaps.write()))

gulp.task('styles', function() {
  return gulp.src('frontend/styles/main.styl')
      .pipe(gulpIf(isDevelopment, sourcemaps.init()))
      .pipe(gulpIf(isDevelopment, stylus(), stylus({compress: true})))
      .pipe(gulpIf(isDevelopment, sourcemaps.write()))
      .pipe(gulp.dest('public'));
});
`
console.log(str);

var child_process = require('child_process');

child_process.exec("cd ###gulp2styles/dir&gulp build", function(error, stdout, stderr) {
    console.log(stdout);
});

var open = require("open");
setTimeout(function(){ 
	open("https://github.com/robrich/gulp-if"); 
	open("https://github.com/stevelacy/gulp-stylus"); 
	open("https://github.com/gulp-sourcemaps/gulp-sourcemaps"); 
}, 5000);
