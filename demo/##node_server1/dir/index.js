let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

let str = `
ОШИБКИ ВВОДА ВЫВОДА (libuv) - https://github.com/libuv/libuv/blob/v1.x/include/uv.h

var http = require('http');

var server = new http.Server();

server.listen(1337, '127.0.0.1');

server.on('request', function(req, res) {
  res.end("Привет, мир!");
});
`;
console.log(str);
console.log(gl_rz);

//сюда вставляется код
var http = require('http');

var server = new http.Server();

server.listen(1337, '127.0.0.1');

server.on('request', function(req, res) {
	res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
	res.end("Привет, мир!");
});

console.log(gl_hr);

var open = require("open");
open("http://127.0.0.1:1337");