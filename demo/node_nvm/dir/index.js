let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

let str = `
1. nvm list available. В этом списке доступны как стабильные, так и нестабильные релизы.
2. установим последнюю версию Node.js четвертой ветки. Для этого, потребуется полностью прописать версию Node.js
2.1. nvm install 4.2.2
3. при установке есть возможность указать разрядность, например, для установки Node.js 5.1.0 32-битной разрядности следует выполнить
3.1. nvm install 5.1.0 32
4. Посмотрим на список уже установленных версий Node.js на машине
4.1. nvm list
5. Для того, чтобы начать использовать Node.js версии 4.2.2
5.1. nvm use 4.2.2
6. когда вы выполняеть команду nvm list, в выводе будет присутствовать указатель текущей версии:
7. устанавливаемые глобально пакеты доступны лишь в той версии, в которой они были установлены.
7.1. Для примера я установлю свой же пакет windows-ls в версии 4.2.2 и попытаюсь использовать 
	его в версии 5.1.0. В итоге я получаю ошибку, говорящую о том, что такого пакета нет


=========================================windows-ls=========================================
# Options
ls -a -l -R
ls -alR
 
Dirs
ls lib
ls lib -al
ls test -lR
 
# Glob
ls *.js
ls *.{js,json}
ls test/**/*
ls test/**/* -lh


flag	description
-a	do not ignore entries starting with .
-R	ist subdirectories recursively
-l	use a long listing format
-F	append / indicator to directories and * to executable files
-h	print sizes in human-readable format (e.g., 1K, 234M, 2G)
-p	append / indicator to directories

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
open("https://www.canonium.com/articles/managing-node-versions-with-windows-nvm");
open("https://github.com/coreybutler/nvm-windows/releases");
open("https://www.npmjs.com/package/windows-ls");