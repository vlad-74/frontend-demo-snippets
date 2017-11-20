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
    + '\n1. cached - ПОТОК КЭШИРУЕТСЯ - ДЛЯ ИСКЛЮЧЕНИЯ ОДИНАКОВЫХ ФАЙЛОВ'
    + '\n2. autoprefixer - ДОБАВЛЯЕТ ПРЕФИКСЫ'
    + '\n3. remember - КЭШИРОВАНИЕ РЕЗУЛЬТАТА'
    + '\n4. concat - ОБЪЕДЕНЯЕТ ФАЙЛЫ В 1 ФАЙЛ(ПОТОК)'
    + '\n5. ПРИ ИЗМЕНЕНИЕ ВО frontend ПРОИСХОДИТ ИНКРЕМЕНТАЛЬНАЯ ПЕРЕСБОРКА В public' );
});
//-------------------------------------------------------------------------------------
let str = `
ИНКЕМЕНТАЛЬНАЯ СБОРКА (ПЕРЕСБОРКА):

НОВАЯ СБОРКА СТРОИТСЯ НА ОСНОВЕ ПРЕДЫДУЩЕЙ СБОРКИ (кроме первой)

gulp-remember - КЭШИРОВАНИЕ РЕЗУЛЬТАТА
gulp-cached - ИСКЛЮЧЕНИЕ ОДИНАКОВЫХ ФАЙЛОВ
gulp-cache -  КЭШИРОВАНИЕ НА ДИСК
gulp-autoprefixer - ДОБАВЛЯЕТ ПРЕФИКСЫ
gulp-concat - ОБЪЕДЕНЯЕТ ФАЙЛЫ В 1 ФАЛ

ОБРАБАТЫВАТЬ УДАЛЕНИЕ - ИСПОЛЬЗОВАТЬ модуль chokidar (получает путь удаленного файла)
`
console.log(str);

var child_process = require('child_process');

child_process.exec("cd " + __dirname.split('demo\\').pop() + "&gulp dev", function(error, stdout, stderr) {
    console.log(stdout);
});

var open = require("open");
setTimeout(function(){ 
	open("https://github.com/ahaurw01/gulp-remember"); 
	open("https://github.com/contra/gulp-cached");
  open("https://github.com/jgable/gulp-cache"); 
  open("https://github.com/sindresorhus/gulp-autoprefixer"); 
  open("https://github.com/contra/gulp-concat");
}, 5000);
