let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

console.log('ДЛЯ НОРМАЛЬНОЙ РАБОТЫ НУЖНО ЧТОБЫ БЫЛ ПОДКЛЮЧЕН - help-functions/watch.js ');
let str2 = `
var o = { p: 1 };
o.watch('p', function (id, oldval, newval) {
  console.log('o.' + id + ' changed from ' + oldval + ' to ' + newval);
  return newval;
});

o.p = 2; o.p = 3; 
delete o.p; o.p = 4;
o.unwatch('p'); o.p = 5;
`
console.log(str2);


var o = { p: 1 };

o.watch('p', function (id, oldval, newval) {
  console.log('o.' + id + ' changed from ' + oldval + ' to ' + newval);
  return newval;
});

o.p = 2; o.p = 3;
delete o.p; o.p = 4;
o.unwatch('p'); o.p = 5;