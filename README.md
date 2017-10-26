# ![#03CA27](https://placehold.it/30/c5f015/000000?text='') `frontend-demo-snippets - ЭТО КОНСОЛЬ-БРАУЗЕРНАЯ ВИЗУАЛИЗАЦИЯ ФУНКЦИОНАЛА javascript & css`
# ![#FFDD00](https://placehold.it/20/FFDD00/000000?text='') `frontend-demo-snippets содержит библиотеку help-functions`

## ПРИ УСТАНОВКЕ В node_modules УСТАНОВЯТСЯ МОДУЛИ :
### help-functions 	- рабочие функции
### debug          	- логирование
### winston        	- продвинутое логирование ошибок
### ect				- шаблонизатор со вкусом кофе
### ejs				- шаблонизатор
### ejs-locals		- движок рендеринга, который поддерживает наследование шаблонов 
### express			- веб-фреймворк, базовый пакет, для создания http-сервера
### mongodb			- native-driver для работы с MongoDB напрямую
### mongoose		- фреймверк, для удобной работы с MongoDB
### nconf			- для удобной работы с настройками приложения (собственный config.json)
### open			- открывает нужный URL/ФАЙЛ

## !!! ДЛЯ РАБОТЫ ПО ОТЛАДКЕ УСТАНОВИТЬ : 
### inspector (npm i -g node-inspector)
### supervisor (npm i -g supervisor)

## ВЫВЕСТИ НАЗВАНИЯ ВСЕХ DEMO (папок):
### ....\frontend-demo-snippets>`node index`

## ЛОГИКА ПРИЛОЖЕНИЯ. ПРИМЕР РАБОТЫ С DEMO :
#### ....\frontend-demo-snippets>`cd demo` // ПЕРЕЙТИ В КОРЕНЬ
#### ....\frontend-demo-snippets/demo>`node <название папки>` // ВЫВЕСТИ СОДЕРЖИМОЕ ФАЙЛА
#### ....\frontend-demo-snippets/demo>`node <название папки>/dir` // ЗАПУСТИТ ФАЙЛ
##### `node <название папки>/dir` - В ПАПКЕ МОЖЕТ БЫТЬ НЕСКОЛЬКО ПОДПАПКОК. СМОТРИТЕ ВСЕ ПАПКИ РАЗДЕЛА

## ВЫВЕСТИ СОДЕРЖИМОЕ ПАПКИ 
### Файлы читаются из !!! из frontend-demo-snippets/demo !!! :
### например если нужно вывести содержимое папки : frontend-demo-snippets/demo/array
#### `set NODE_F=array&node content`
#### !!! на винде если был SET NODE_F то заданная переменная остется ПОСТОЯННО до следующего SET !!!

## ВЫВЕСТИ СОДЕРЖИМОЕ ФАЙЛА 
### Файлы читаются из !!! корневой папки frontend-demo-snippets и из frontend-demo-snippets/demo !!! :
### например если нужно вывести содержимое файла : frontend-demo-snippets/demo/array/dir/index.js
#### `set NODE_P=demo/array/dir/index.js&node read` (если Вы находитесь в frontend-demo-snippets)
### например если нужно вывести содержимое файла test.txt из дериктории выше папки frontend-demo-snippets: 
#### `set NODE_P=../test.txt&node read` (если Вы находитесь в frontend-demo-snippets)
#### !!! на винде если был SET NODE_P то заданная переменная остется ПОСТОЯННО до следующего SET !!!

## ВЫВЕСТИ НАЗВАНИЯ ВСЕХ ФУНКЦИЙ В help-functions:
### ....\frontend-demo-snippets>`node allfunctions`

## [ПРИМЕР ИСПОЛЬЗОВАНИЯ ФУНКЦИЙ help-functions (ссылка на runkit)](https://npm.runkit.com/help-functions):
### `let hf = require('help-functions');` 
### `var largest = hf.arr.gl_max(1, 10, 100, 2, 3, 1000, 4, 5, 10000, 6); // => 10000`
### `console.log(largest);`

## ПРОВЕРИТЬ СКОРОСТЬ СКРИПТА :
### 1. В ФАЙЛЕ ....\frontend-demo-snippets>demo/timer/dir/cod.js В УКАЗАННОМ МЕСТЕ РАЗМЕСТИТЬ КОД
### 2. В ФАЙЛЕ ....\frontend-demo-snippets>demo/timer/dir/cod.js ДЛЯ exports.timerCycles УКАЗАТЬ КОЛИЧЕСТВО ЦИКЛОВ-ТЕСТОВ
### 3. ИЗ ПАПКИ demo - ....frontend-demo-snippets\demo> В КОМАНДНОЙ СТРОКЕ ВВЕСТИ node timer/dir.

## [ДЛЯ ОТОБРАЖЕНИЯ ДАННЫХ ИЗ MONGODB - STUDIO 3T](https://studio3t.com/)

## [КОМАНДЫ ДЛЯ CMD ОТ ab57.ru](http://ab57.ru/cmdlist.html)
## [14 ОСНОВНЫХ КОМАНДЫ ДЛЯ CMD ОТ softrew.ru](http://www.softrew.ru/instructions/1382-14-komand-cmd-kotorye-dolzhen-znat-kazhdyy-polzovatel.html)

### `"ПОПОЛНИМ КОПИЛКУ"` - ВЫСЫЛАЙТЕ СВОИ "РАБОЧИЕ" ФУНКЦИИ И DEMO