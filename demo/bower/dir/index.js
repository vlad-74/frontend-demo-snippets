let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

let str = `
Установка Бовера bower@1.8.2 (потребуются Node.js и Git). 
npm install -g bower

Создадим bower.json:
bower init

Попробуем что-нибудь установить, например jQuery:
bower install --save jquery
bower install desandro/masonry
bower install git://github.com/user/package.git // Git endpoint
bower install http://example.com/script.js // URL

Флаг --save говорит Боверу, что он должен сохранить имя пакета и его версию в 
специальный файл со списком всех зависимостей проекта — bower.json

При установке с флагом --save версии пакетов добавляются в bower.json в виде ~1.0.1. 
Тильда в начале говорит о том, что при установке будет выбрана версия 1.0.1 
или с большим последним числом (ПАТЧ), если она есть

Можно устанавливать несколько пакетов сразу:
bower install --save social-likes jquery-icheck fotorama

Поиск пакетов:
bower search jquery
открыть в браузере bower.io/search/

Для обновления пакетов (и bower.json) до действительно последних версий можно воспользоваться 
npm install -g bower-update
Запускаем: bower-update

В Бовере есть команда bower update, но она обновляет пакеты с учетом требований, описанных в 
ower.json. Например, если там требуется jQuery ~2.0.0, то он сможет обновить его, например, 
до 2.0.9, но 2.1.0 уже не поставит

Для удаления пакетов используется команда:
bower uninstall --save packageName

bower list покажет список всех установленных пакетов. Ты увидишь, что все пакеты 
зависят от jQuery и что Бовер смог найти удовлетворяющую всех версию jQuery

Ты можешь спокойно удалять папку bower_components или добавить ее в свой .gitignore. 
Команда bower install (без дополнительных параметров) вернет все как было
`
console.log(str);