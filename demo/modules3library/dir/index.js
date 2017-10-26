let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

let str = `
1. БИБЛИОТЕКА 1 УРОВНЯ:
1.0. exports.addTwo2 = function (a, b) {return a + b}
1.1. exports.multiplyTwo2 = function(a, b) {return a * b}

2.БИБЛИОТЕКА 2 УРОВНЯ (ГЛОБАЛЬНЯ !!!):
2.1. exports.gl = require('./math2'); //!!! ИМПОРТ БИБЛИОТЕКИ 1 УРОВНЯ !!!
2.2. exports.addTwo = function (a, b) {return a + b}
2.3. exports.multiplyTwo = function(a, b) {return a * b}

3. ИСПОЛЬЗОВАНИЕ ГЛОБАЛЬНОЙ БИБЛИОТЕКИ (2 УРОВНЯ):
3.1. var math = require('./math'); // С WEBPACK_ом = import * as math from './math';
3.2. console.log('ВЫПОЛНЕНИЕ ИЗ БИБЛИОТЕКИ 2 УРОВНЯ = ', math.addTwo(1, 2), math.multiplyTwo(1, 2));
3.3. console.log('ВЫПОЛНЕНИЕ ИЗ БИБЛИОТЕКИ 1 УРОВНЯ = ', math.gl.addTwo2(1, 2), math.gl.multiplyTwo2(1, 2));

`
console.log(str);
console.log(gl_rz);

var math = require('./math'); // С WEBPACK_ом = import * as math from './math';
console.log('ВЫПОЛНЕНИЕ ИЗ БИБЛИОТЕКИ 2 УРОВНЯ = ', math.addTwo(1, 2), math.multiplyTwo(1, 2));
console.log('ВЫПОЛНЕНИЕ ИЗ БИБЛИОТЕКИ 1 УРОВНЯ = ', math.gl.addTwo2(1, 2), math.gl.multiplyTwo2(1, 2));
