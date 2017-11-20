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
  console.log('\n' + "THE END" + '\n' + gl_hr + '\nРЕЗУЛЬТАТ ВЫПОЛНЕНИЯ gulpfile.js : node '+ __dirname.split('demo\\').pop()
    + '\nПРИ ИЗМЕНЕНИЕ В main.styl ИЛИ frontend/assets/** ПРОИСХОДИТ ИНКРЕМЕНТАЛЬНАЯ ПЕРЕСБОРКА В public' );
});
//-------------------------------------------------------------------------------------
let str = `
ИНКЕМЕНТАЛЬНАЯ СБОРКА (ПЕРЕСБОРКА): ###gulp3watch

НОВАЯ СБОРКА СТРОИТСЯ НА ОСНОВЕ ПРЕДЫДУЩЕЙ СБОРКИ (кроме первой)

gulp-newer - ДЛЯ БЫСТРОГО 1 ЗАПУСКА - ОТСЕКАЕТ ОДИНАКОВЫЕ ФАЙЛЫ В ИСХОДНИКЕ И public

{since: gulp.lastRun('assets')} - ОТБИРАЕТ ФАЙЛЫ С ЗАДАННОЙ ДАТЫ
gulp.lastRun('assets') - ВРЕМЯ ПОСЛЕДНЕЙ СБОРКИ assets - gulp.task('assets')

gulp.watch('frontend/styles/**/*.*', gulp.series('styles')

watch НАБЛЮДАЕТ ЗА ФАЙЛАМИ - 'frontend/styles/**/*.*'
И ПРИ ИЗМЕНЕНИЕ В ФАЙЛАХ ЗАПУСКАЕТ ФУНКЦИЮ ИЛИ gulp.series('styles')
`
console.log(str);

var child_process = require('child_process');

child_process.exec("cd " + __dirname.split('demo\\').pop() + "&gulp dev", function(error, stdout, stderr) {
    console.log(stdout);
});

var open = require("open");
setTimeout(function(){ 
	open("https://github.com/tschaub/gulp-newer"); 
}, 5000);
