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

bower -v

Создадим bower.json:
bower init

Поиск пакетов:
bower search jquery
???открыть в браузере bower.io/search/

Попробуем что-нибудь установить, например jQuery:
bower install --save jquery
bower i jquery -S
bower install jquery#1.6.4
bower i normalize.css
bower install desandro/masonry
bower install git://github.com/user/package.git // Git endpoint
bower install http://example.com/script.js // URL

Можно устанавливать несколько пакетов сразу:
bower install --save social-likes jquery-icheck fotorama

Флаг --save говорит Боверу, что он должен сохранить имя пакета и его версию в 
специальный файл со списком всех зависимостей проекта — bower.json

При установке с флагом --save версии пакетов добавляются в bower.json в виде ~1.0.1. 
Тильда в начале говорит о том, что при установке будет выбрана версия 1.0.1 
или с большим последним числом (ПАТЧ), если она есть

Список установленных библиотек
bower list покажет список всех установленных пакетов. Ты увидишь, что все пакеты 
зависят от jQuery и что Бовер смог найти удовлетворяющую всех версию jQuery
bower list --path

Для обновления пакетов (и bower.json) до действительно последних версий можно воспользоваться 
npm install -g bower-update
Запускаем: bower-update

В Бовере есть команда bower update, но она обновляет пакеты с учетом требований, описанных в 
bower.json. Например, если там требуется :
jQuery ~2.0.0, то он сможет обновить его, например, до 2.0.9, но 2.1.0 уже не поставит
jQuery ^1.0.4, то он сможет обновить его, например, до 1.11.3, но 2.0.0 уже не поставит
А если заменить ^ на latest, то получим версию 2.1.4

Для удаления пакетов используется команда:
bower uninstall --save packageName

Ты можешь спокойно удалять папку bower_components или добавить ее в свой .gitignore. 
Команда bower install (без дополнительных параметров) вернет все как было

По-умолчанию, bower устанавливает все зависимости в папку bower_components. Однако, мы 
можем поменять как имя папки, так и её место расположение. Делается это очень просто: 
необходимо создать рабочий файл, который должен называться .bowerrc
{
	"directory" : "app/bower"
}
Теперь перенесем уже существующую папку в новое место. Для этого в консоли наберем
mkdir app
mv bower_components app/bower

====================================================================================================
gulp-google-cdn
Данный плагин заменяет ваши javascript библиотеки подключенные локально на аналогичные из google-cdn.

npm i gulp-google-cdn -D

gulpfile.js
var gulp = require('gulp');
var googlecdn = require('gulp-google-cdn');

gulp.task('default', function () {
    return gulp.src('index.html')
        .pipe(googlecdn(require('./bower.json')))
        .pipe(gulp.dest('dist'));
});
bower.json
{
  "name": "app",
  "dependencies": {
    "jquery": "~2.1.1"
  }
}

--------------------------------------------------------------------------------------------------
main-bower-files
Данный плагин поможет нам извлечь из всех сотен файлов скаченных bower’ом в папку 
bower_components только нужные нам файлы.

npm i main-bower-files -D

gulpfile.js
var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');

gulp.task('mainfiles', function() {
    return gulp.src(mainBowerFiles())
    .pipe(gulp.dest('dist/mainfiles')) //Обязательно укажем место назначения — куда будут складываться главные файлы
});

Переопределим главные файлы для bootstrap прямо внутри bower.json
"overrides": {
  "bootstrap": {
      "main": [ //пути указанные в bower.json bootstrap’а
          "./dist/js/bootstrap.min.js",
          "./dist/css/bootstrap.min.css",
          "./dist/css/bootstrap-theme.min.css"
          ]
  }
}
--------------------------------------------------------------------------------------------------

Preen
Preen просто-напросто уничтожает все неиспользуемые файлы из bower_components, оставляя только те файлы, 
которые мы сами его попросим оставить.

Preen нужно установить глобально

bower.json
  {
  	"name": "app",
  	"dependencies": {
  		"jquery": "~2.1.1"
  	},
  "preen": {
      "jquery": [
        "dist/*.js"
      ]
    }
  }
Далее, всё, что нам нужно — это просто написать в консоли команду
preen



`
console.log(str);