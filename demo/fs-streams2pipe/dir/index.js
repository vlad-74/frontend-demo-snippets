let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

var http = require('http');
var fs = require('fs');
var open = require("open");
open("http://127.0.0.1:3000/big.html");

new http.Server(function(req, res) {
  // res instanceof http.ServerResponse < stream.Writable

  if (req.url == '/big.html') {
    var file = new fs.ReadStream(__dirname + '/big.html');
    sendFile(file, res);
  }
}).listen(3000);// http://127.0.0.1:3000/big.html

function sendFile(file, res) {

  file.pipe(res);

  file.on('error', function(err) {
    res.statusCode = 500;
    res.end("Server Error");
    console.error(err);
  });

  file
    .on('open',function() {
      res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
      console.log("open");
    })
    .on('close', function() {
      console.log("close");
    });

  res.on('close', function() {
    file.destroy();
  });

};