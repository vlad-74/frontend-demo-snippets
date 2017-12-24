let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

let str = `
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  if (req.url == '/') {
    fs.readFile('index.html', function(err, info) {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end("На сервере произошла ошибка!");
        return;
      }
      res.end(info);
    });
  } else { 
    res.statusCode = 404;
    res.end("Not Found");
  }
}).listen(3000);
`;
// console.log(str);
// console.log(gl_rz);
//сюда вставляется код
var http = require('http');
var fs = require('fs');
var open = false;

http.createServer(function(req, res) {
  if (req.url == '/') {
    fs.readFile(__dirname + '/index.html', function(err, info) {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end("На сервере произошла ошибка!");
        return;
      }
      console.log('START SERVER');
      res.end(info);
    });
  } else { 
    res.statusCode = 404;
    res.end("Not Found");
  }
}).listen(3000);
console.log(gl_hr);


  // var open = require("open");
  // open("D:/_DEVELOPER/Sites/_GIT/frontend-demo-snippets/demo/node_nodemon/dir/app/index.html");
  // open("http://127.0.0.1:3000");
