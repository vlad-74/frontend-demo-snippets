let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------
var open = require("open");

open(__dirname + "/mongodb.bat");

console.log('ДЛЯ НОРМАЛЬНОЙ РАБОТЫ СКРИПТА НУЖНО : \n' 
	+ '1. ЧТОБЫ БЫЛА УСТАНОВЛЕНА mongodb. ПУТЬ УСТАНОВЛЕННОЙ mongodb = C:\\mongodb\\bin \n'
	+ '2. ....И МОЖЕТ БЫТЬ, В ПЕРЕМЕННУЮ СРЕДЫ Path ДОБАВИТЬ ПУТЬ К ФАЙЛАМ mongodb = C:\\mongodb\\bin \n'
	+ '3. ЗАПУСКАТЬ МОЖНО ВРУЧНУЮ - 2 РАЗА КЛИКНУТЬ ПО mongodb.bat \n'
	+ '4. mongodb ЗАПУСТИТСЯ ЧЕРЕЗ 9 - 10 СЕКУНД');

console.log(gl_hr + '\nВЫВЕСТИ СОДЕРЖИМОЕ БАТНИКА (mongodb.bat)');
  hf.fil.fileTostring(__dirname + "/mongodb.bat")
    .then(function res(result) {console.log(result + '\n' + gl_hr);})
    .catch(function err(result) {console.log('ОШИБОЧКА ВЫШЛА = ', result);});
