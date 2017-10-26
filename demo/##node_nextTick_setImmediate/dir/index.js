let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

let str = `
var fs = require('fs');
fs.open(__filename, "r", function(err, file) {console.log("IO!");});
setImmediate(function() {console.log("immediate");}); //выполнится последним (можно задачу разбить на части)
process.nextTick(function() {console.log("nextTick");}); //выполнится первым до новых опираций ввода/вывода
`;
console.log(str);
console.log(gl_rz);
//сюда вставляется код
var fs = require('fs');
fs.open(__filename, "r", function(err, file) {console.log("IO!");});
setImmediate(function() {console.log("immediate");}); //выполнится последним (можно задачу разбить на части)
process.nextTick(function() {console.log("nextTick");}); //выполнится первым до новых опираций ввода/вывода

console.log(gl_hr);