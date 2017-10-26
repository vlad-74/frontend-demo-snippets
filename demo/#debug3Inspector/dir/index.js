let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

let str = `
NODE INSPECTOR
npm i -g node-inspector

ОТЛАДКА ПРИ ПОМОЩИ БРАУЗЕРА CHROME (ЛОГИКА)
1. В cmd набрать: node --debug #debug3Inspector/dir || node --debug-brk #debug3Inspector/dir (debug-brk - запускает скрипт в состояние останова)
2. После запуска cmd - index.bat запускает - node-inspector = (open(__dirname + "/index.bat");)
3. откроется браузер отладчик (url - адрес от node-inspector) = http://127.0.0.1:8080/?port=5858
4. откроется тестируемый адрес = http://127.0.0.1:3000/echo?message=Hello
5. !!! F10 - по шагово / F8 - выполнить (полностью или до следующего debugger) !!!
6. ВОЗОБНОВИТЬ ТЕСТ - ОБНОВИТЬ БРАУЗЕР ТЕСТИРУЕМЫЙ СТРАНИЦЫ
7. В КОНСОЛЕ МОЖНО УЗНАВАТЬ И ЗАДАВАТЬ ЗНАЧЕНИЯ ПЕРЕМЕННЫХ : urlParsed.pathname = 'BBFH'
`;
console.log(str);

// http://127.0.0.1:3000/echo?message=Hello -> Hello
var open = require("open");
open(__dirname + "/index.bat");
var http = require('http');
var url = require('url');
var counter = 0;

var server = new http.Server(function(req, res) {

  var urlParsed = url.parse(req.url, true);

debugger;

  if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
    res.setHeader('Cache-control', 'no-cache,no-store,must-revalidate');
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.end( urlParsed.query.message +  ' | ' + ++counter);
  } else {
    res.statusCode = 404; // Not Found
    res.end("Page not found");
  }
});

server.listen(3000, '127.0.0.1');

setTimeout(function(){
	open("http://127.0.0.1:8080/?port=5858");
	setTimeout(function(){
		open("http://127.0.0.1:3000/echo?message=в новом cmd окне запустить - node-inspector");
	}, 5000)
}, 3000)


console.log(gl_hr);