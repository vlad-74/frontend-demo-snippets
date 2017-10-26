let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

let str = `
// EventEmitter(EE) - основной объект реализующий работу с событиями
//.on - это подписка например на 'request'
//.emit - генерирует событие ('request') и передает данные {from: "Клиент", to: "Фиговый"}. 
//Переданные данные попадают в функцию обработчика - в .on

// Демо простейшего применения EE - аргументы передаются по цепочке
// обработчики срабатывают в том же порядке, в котором назначены

ПРИМЕР
var EventEmitter = require('events').EventEmitter;
var server = new EventEmitter;

server.on('request', function(request) {
  request.approved = true;
  request.hernya = false;
});
server.on('request', function(request) {console.log(request);});

server.emit('request', {from: "Клиент", to: "Фиговый"});
server.emit('request', {from: "Ещё клиент"});
`
console.log(str);

console.log(gl_hr);

var EventEmitter = require('events').EventEmitter;
var server = new EventEmitter;

server.on('request', function(request) {
  request.approved = true;
  request.hernya = false;
});
server.on('request', function(request) {console.log(request);});

server.emit('request', {from: "Клиент", to: "Фиговый"});
server.emit('request', {from: "Ещё клиент"});

console.log('EventEmitter (server) ПРОСЛУШИВАЕТ СОБЫТИЕ request  = ' + server.listenerCount('request') + ' раза');
// console.log('СОБЫТИЕ request ПРОСЛУШИВАЮТ = ', server.listeners('request'));


