let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

let str = `
// http://127.0.0.1:3000/echo?message=Hello -> Hello

var http = require('http');
var url = require('url');
var counter = 0;

var server = new http.Server(function(req, res) {

  var urlParsed = url.parse(req.url, true);

  if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
    res.setHeader('Cache-control', 'no-cache,no-store,must-revalidate');
    res.end( urlParsed.query.message +  ' | ' + ++counter );
  } else {
    res.statusCode = 404; // Not Found
    res.end("Page not found");
  }
});
server.listen(3000, '127.0.0.1');
`;
console.log(str);
console.log(gl_rz);

var http = require('http');
var url = require('url');
var counter = 0;

var server = new http.Server(function(req, res) {

  var urlParsed = url.parse(req.url, true);

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

console.log(gl_hr);

var open = require("open");
open("http://127.0.0.1:3000/echo?message=Hello");