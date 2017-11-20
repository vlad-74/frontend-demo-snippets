let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");

// var child_process = require('child_process');
// child_process.exec(__dirname + "/g.bat " + __dirname, function(error, stdout, stderr) {
//     console.log(stdout);
// });
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

let str = `
YARN генерирует при каждой установке пакета свой lock файл, из которого будут устанавливаться 
все пакеты в следующий раз. То есть, наконец то у нас есть нормальный лок файл, генерирующийся 
на лету и правильно обновляющий чексумы.

У нас указана куча пакетов. То есть это все зависимости express и здесь везде указаны точные 
версии, поэтому если мы еще раз будем писать yarn, для того, чтобы установить все пакеты, то 
у нас установятся точные зависимости и не поломается проект, если у нас какая-то зависимость 
обновится.

Starting a new project:
yarn init

Adding a dependency:
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]

Adding a dependency to different categories of dependencies
Add to devDependencies, peerDependencies, and optionalDependencies respectively:
yarn add [package] --dev
yarn add [package] --peer 
yarn add [package] --optional

Upgrading a dependency:
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]

Removing a dependency:
yarn remove [package]

Installing all the dependencies of project:
yarn
or
yarn install

-------------------------------CMD-------------------------------

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
`
console.log(str);

var open = require("open");
open("https://github.com/yarnpkg/yarn");
open("https://yarnpkg.com/en/docs/install");
open("https://yarnpkg.com/en/docs/usage");
open("https://monsterlessons.com/project/lessons/yarn-paketnyj-menedzher-ot-facebook");