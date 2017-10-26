let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var ROOT = __dirname + "\\public\\";
console.log(ROOT)

http.createServer(function(req, res) {

  if (!checkAccess(req)) {
    res.statusCode = 403;
    res.end("Tell me the secret to access!");
    return;
  }

  sendFileSafe(url.parse(req.url).pathname, res);

}).listen(3000);

var open = require("open");
open("http://127.0.0.1:3000/index.html?secret=o_O");

function checkAccess(req) {
  return url.parse(req.url, true).query.secret == 'o_O'; // http://127.0.0.1:3000/index.html?secret=o_O
};

function sendFileSafe(filePath, res) {

  try {
    filePath = decodeURIComponent(filePath); // %D1%8F = русской букве я
  } catch(e) {
    res.statusCode = 400;
    res.end("Bad Request");
    return;
  }

  if (~filePath.indexOf('\0')) { //\0 = нулевой байт - проверка безопасности 
    res.statusCode = 400;
    res.end("Bad Request");
    return;
  }

  //  /deep/nodejs.jpg ->  ....../path/public/deep/nodejs.jpg
  filePath = path.normalize(path.join(ROOT, filePath)); //normalize - удаляет из пути . .. // и т.д.

  if (filePath.indexOf(ROOT) != 0) {
    res.statusCode = 404;
    res.end("File not found_indexOf " + filePath + ' || ' + ROOT);
    return;
  }

  fs.stat(filePath, function(err, stats) {
    if (err || !stats.isFile()) {
      res.statusCode = 404;
      res.end("File not found_stat");
      return;
    }
    sendFile(filePath, res);
  });
}

function sendFile(filePath, res) {

  fs.readFile(filePath, function(err, content) {
    if (err) throw err;

    // var mime = require('mime').lookup(filePath); // npm install mime
    res.setHeader('Content-Type','text/html' + "; charset=utf-8"); // text/html image/jpeg
    res.end(content);
  });

}


