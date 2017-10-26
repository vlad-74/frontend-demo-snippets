let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

let str = `
МОДУЛЬ debug: node debug/server
http://127.0.0.1:1337/echo?message=Hello
node debug/server - НИЧЕГО НЕ ОТОБРАЗИТЬСЯ !!!!
Для того чтобы debug отражал информацию запускать NODE  нужно :
set DEBUG=server&node ##log2Debug/dir - отображается по серверу, но не по request
set DEBUG=server:*&node ##log2Debug/dir  - server:* это для отображения действий с request (браузером) 
set DEBUG=server,server:*&node ##log2Debug/dir  - отображается по серверу и по request

ИСПОЛЬЗОВАНИЕ debug :
var http = require('http');
var debug = require('debug')('server'); // нужно установить npm i debug
var server = http.createServer();
server.on('request', require('./request'));
server.listen(1337);
debug("Server is running");
`
console.log(str);

var http = require('http');
var debug = require('debug')('server'); // нужно установить npm i debug

var server = http.createServer();

server.on('request', require('./request'));

server.listen(1337);

debug("Server is running");

var open = require("open");
open("http://127.0.0.1:1337/echo?message=Hello");