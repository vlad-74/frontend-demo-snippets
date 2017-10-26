let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

let str = `
В МОДУЛЕ winston - МОЖНО ВЫБРАТЬ :
1. ФАЙЛ(Ы) ДЛЯ ЛОГИРОВАНИЯ - if (path.match(/dir\\request.js$/) || path.match(/dir\\index.js$/))
2.НАЧАЛЬНЫЙ УРОВЕНЬ ОТРАЖЕНИЯ СООБЩЕНИЙ (level:)- error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5

log.js // ЛОГ
var winston = require('winston');

module.exports = function(module) {
  return makeLogger(module.filename);
};
function makeLogger(path) {
  if (path.match(/dir\\request.js$/) || path.match(/dir\\index.js$/)) {
    let prod = false;
    prod = (!prod) ? 'silly' : 'error';

    var transports = [
      new winston.transports.Console({
        timestamp: true, // function() { return new Date().toString() }
        colorize: true,
        label: path.substring(path.indexOf('##log\\dir') +65), // ПУТЬ
        level: prod // НАЧАЛЬНЫЙ УРОВЕНЬ ОТРАЖЕНИЯ СООБЩЕНИЙ - error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 
      }),
      new winston.transports.File({ filename: 'debug.log', level: 'debug' })
    ];
    return new winston.Logger({ transports: transports });
  } else {
    return new winston.Logger({
      transports: []
    });
  }
}

index.js //ИСПОЛЬЗОВАНИЕ ЛОГА
var http = require('http');
var log = require('./log')(module);
var server = http.createServer();
server.on('request', require('./request'));
server.listen(1337); //http://127.0.0.1:1337/

//{ error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
log.silly("Server is running");
log.debug("Server is running");
log.verbose("Server is running");
log.info("Server is running");
log.warn("Server is running");
log.error("Server is running");
`;
console.log(str);

var http = require('http');
var log = require('./log')(module);

var server = http.createServer();

server.on('request', require('./request'));

server.listen(1337); //http://127.0.0.1:1337/

//{ error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
log.silly("Server is running");
log.debug("Server is running");
log.verbose("Server is running");
log.info("Server is running");
log.warn("Server is running");
log.error("Server is running" + '\n');

var open = require("open");
open("http://127.0.0.1:1337/echo?message=Hello");