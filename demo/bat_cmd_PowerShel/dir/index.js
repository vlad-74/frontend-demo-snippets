let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------
var open = require("open");

open(__dirname + "/mongodb.bat");

console.log(`ДЛЯ НОРМАЛЬНОЙ РАБОТЫ СКРИПТА НУЖНО :
	1. ЧТОБЫ БЫЛА УСТАНОВЛЕНА mongodb. ПУТЬ УСТАНОВЛЕННОЙ mongodb = C:\\mongodb\\bin
	2. ....И МОЖЕТ БЫТЬ, В ПЕРЕМЕННУЮ СРЕДЫ Path ДОБАВИТЬ ПУТЬ К ФАЙЛАМ mongodb = C:\\mongodb\\bin
	3. ЗАПУСКАТЬ МОЖНО ВРУЧНУЮ - 2 РАЗА КЛИКНУТЬ ПО mongodb.bat 
	4. mongodb ЗАПУСТИТСЯ ЧЕРЕЗ 9 - 10 СЕКУНД

	СОЗДАНИЕ ПАПКИ:
	mkdir folder

	СОЗДАНИЕ ПУСТОГО ФАЙЛА:
	copy NUL EmptyFile.js
	ЗАПИСЬ В СУЩЕСТВУЮЩИЙ ФАЙЛ:
	echo SOME TEXT > EmptyFile.js

	ЗАПИСЬ В СОЗДАВАЕМЫЙ ФАЙЛ:
	echo SOME TEXT > notEmptyFile.js

	ЧТЕНИЕ ФАЙЛА:
	more notEmptyFile.js

	-----------------------------------------
	bush
	ВСЕ АЛИСЫ (ОТКРЫВАТЬ ОТ АДМИНИСТРАТОРА ЧЕРЕЗ РЕДАКТОР) - C:/Program Files/Git/etc/profile.d/aliases.sh 
	alias cls="clear; printf '\\033[3J'"

	СОЗДАНИЕ ПУСТОГО ФАЙЛА:
	touch index.html

	ЗАПИСЬ В СОЗДАВАЕМЫЙ ФАЙЛ:
	echo SOME TEXT > index.html

	ЧТЕНИЕ ФАЙЛА
	less
	vim
	`
	);

console.log(gl_hr + '\nВЫВЕСТИ СОДЕРЖИМОЕ БАТНИКА (mongodb.bat)');
  hf.fil.fileTostring(__dirname + "/mongodb.bat")
    .then(function res(result) {console.log(result + '\n' + gl_hr);})
    .catch(function err(result) {console.log('ОШИБОЧКА ВЫШЛА = ', result);});

var open = require("open");
open("http://click-storm.com/ru/articles/11918/");
open("https://technet.microsoft.com/en-us/library/ee176938.aspx");
open("https://docs.microsoft.com/ru-ru/powershell/scripting/getting-started/cookbooks/working-with-files-and-folders?view=powershell-5.1");
