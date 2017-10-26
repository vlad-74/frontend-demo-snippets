let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

let str = `
SUPERVISOR - отслеживает все файлы в дериктории и при изменение перезапускает NODE JS
npm i -g supervisor
https://github.com/petruisfan/node-supervisor
Теперь вместо node папка можно указывать : supervisor папка
Пример: (supervisor -i /public) будут игнорироваться все файлы в папке public
`;
console.log(str);