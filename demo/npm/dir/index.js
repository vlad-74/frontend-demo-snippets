let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

let str = `
npm help          		ПОМОЩЬ
npm s             		ПОИСК МОДУЛЯ

npm init          		СОЗДАНИЕ ФАЙЛА package.json
npm i [module] -S 		УСТАНОВИТЬ МОДУЛЬ

npm adduser       		ДОБАВИТЬ ПОЛЬЗОВАТЕЛЯ
npm publish       		ОПУБДИКОВАТЬ МОДУЛЬ В npm
npm unpublish     		УДАЛИТЬ МОДУЛЬ

npm ls            		ИНФОРМАЦИЯ О СБОРКЕ (версии модулей)
npm outdated      		СРАВНИТЕЛЬНАЯ ИНФОРМАЦИЯ ТЕКУЩЕЙ СБОРКИ И НОВЫХ ВЕРСИЯХ

npm r [module]    		УДАЛИТЬ МОДУЛЬ У ПОЛЬЗОВАТЕЛЯ (можно и руками)
npm up [module] 		ОБНОВИТЬ МОДУЛЬ У ПОЛЬЗОВАТЕЛЯ
npm prune         		УДАЛЯЕТ ВСЕ ЛИШНИЕ МОДУЛИ НЕ ПЕРЕЧИСЛЕНЫ В ЗАВИСИМОСТЯХ
npm help scripts  		СПИСОК ВСТРОЕННЫХ КОМАНД

npm login
npm logout

C:/Users/TOMA/AppData/Roaming/npm
`
console.log(str);