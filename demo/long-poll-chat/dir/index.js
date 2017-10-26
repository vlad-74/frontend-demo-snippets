let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

var http = require('http');
var fs = require('fs');
var url = require('url');
var chat = require('./chat');

http.createServer(function(req, res) {
  var urlParsed = url.parse(req.url);

  switch (urlParsed.pathname) {
    case '/':
      sendFile(__dirname + "/index.html", res);
      break;

    case '/subscribe':
      chat.subscribe(req, res);
      break;

    case '/publish':
      // chat.publish("......");
      var body = ''; var bd = '';

      req
        .on('readable', function() {
          body += req.read();
          bd = body.substring(0, body.indexOf('}null')+1);

          if (body.length > 1e4) {
            res.statusCode = 413;
            res.end("Your message is too big for my little chat");
          }
        })
        .on('end', function() {
          try {
            body = JSON.parse(bd);
          } catch (e) {
            res.statusCode = 400;
            res.end("Bad Request - }null");
            return;
          }

          chat.publish(body.message);
          res.end("ok");
        });

      break;

    default:
      res.statusCode = 404;
      res.end("Not found");
  }
console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/');
}).listen(3000);
var open = require("open");
open("http://127.0.0.1:3000/"); // subscribe chat.publish

function sendFile(fileName, res) {
	    console.log('fileName', fileName);
  var fileStream = fs.createReadStream(fileName);
  fileStream
    .on('error', function() {
      res.statusCode = 500;
      res.end("Server error");
    })
    .pipe(res)
    .on('close', function() {
      fileStream.destroy();
    });
}