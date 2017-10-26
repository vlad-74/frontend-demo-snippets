let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

let str = `
var http = require('http');
var server = new http.Server(function(req, res) {
  /* обработка запросов */
}).listen(3000);

setTimeout(function() {
  server.close();
}, 2500);

var timer = setInterval(function() {
  console.log(process.memoryUsage());
}, 1000);

timer.unref(); //С unref процесс становится второстепенным!!!
`;
console.log(str);
console.log(gl_rz);
//сюда вставляется код
var http = require('http');
var server = new http.Server(function(req, res) {
  /* обработка запросов */
}).listen(3000);

setTimeout(function() {server.close();}, 2500);
var timer = setInterval(function() {console.log(process.memoryUsage())}, 1000);
timer.unref(); //С unref процесс становится второстепенным!!!

console.log(gl_hr);

// var open = require("open");
// open("http://127.0.0.1:3000");