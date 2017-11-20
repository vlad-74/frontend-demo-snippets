let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

// npm i ws -S

var WebSocketServer = require('ws').Server;
var http = require('http');
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

var server = http.createServer(app);
server.listen(8080);

var webSocketServer = new WebSocketServer({server: server});
webSocketServer.on('connection', function(ws) {

  var timer = setInterval(function() {
    ws.send(JSON.stringify(process.memoryUsage()), function(error) {
      /* handle errors */
    });
  }, 100);

  console.log('клиент подключился');

  ws.on('close', function() {
    console.log('клиент отключился');
    clearInterval(timer);
  });
});

var open = require("open");
open("http://127.0.0.1:8080");
open("http://learn.javascript.ru/websockets"); // IE<10 ws НЕ РАБОТАЕТ
open("https://github.com/sockjs"); // КРОССБРАУЗЕРНОСТЬ ws
//НЕДОСТАТОК ws - ПРИ ПОМОЩИ ws НЕЛЬЗЯ ПЕРЕДАТЬ ОБЪЕКТЮ
//НУЖНО ВРУЧНУЮ ПРЕВРАТИТЬ В JSON, А ПРИ ПОЛУЧЕНИЕ ВОСТАНОВИТЬ ИЗ JSON 

open("https://socket.io/"); 
open("https://github.com/socketio/socket.io"); 