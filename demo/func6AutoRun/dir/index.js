let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

let str = `
1. !!! ФУНКЦИЯ module !!!
(function() { 
  // Здесь находится реализация модуля.
}()); // конец литерала функции и ее вызов.

2. Выражения определения функций иногда могут тут же вызываться:
console.log('(function(x,y) {return x*y;}(10,2)) = ', '!!!' ,(function(x,y) {return x*y;}(10,2)))
`
console.log(str);

console.log('(function(x,y) {return x*y;}(10,2)) = ', '!!!' ,(function(x,y) {return x*y;}(10,2)))