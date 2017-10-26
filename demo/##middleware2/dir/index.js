let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------
var str = `
var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./config');
var log = require('./libs/log')(module);

var app = express();
app.set('views', __dirname + '/template');
app.set('view engine', 'ejs');

app.use(express.favicon()); // /favicon.ico
if (app.get('env') == 'development') {
  app.use(express.logger('dev'));
} else {
  app.use(express.logger('default'));
}

app.use(express.bodyParser());  // req.body....

app.use(express.cookieParser()); // req.cookies

app.use(app.router);

app.get('/', function(req, res, next) {
  res.render("index", {
    body: '<b>Hello</b>'
  });
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(err, req, res, next) {
  // NODE_ENV = 'production'
  if (app.get('env') == 'development') {
    var errorHandler = express.errorHandler();
    errorHandler(err, req, res, next);
  } else {
    res.send(500);
  }
});
/*

var routes = require('./routes');
var user = require('./routes/user');

// all environments

app.get('/', routes.index);
app.get('/users', user.list);

*/
console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/');

http.createServer(app).listen(config.get('port'), function(){
  log.info('Express server listening on port ' + config.get('port'));
});
`
console.log(str + gl_hr)

var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./config');
var log = require('./libs/log')(module);

var app = express();
app.set('views', __dirname + '/template');
app.set('view engine', 'ejs');

app.use(express.favicon()); // /favicon.ico
if (app.get('env') == 'development') {
  app.use(express.logger('dev'));
} else {
  app.use(express.logger('default'));
}

app.use(express.bodyParser());  // req.body....

app.use(express.cookieParser()); // req.cookies

app.use(app.router);

app.get('/', function(req, res, next) {
  res.render("index", {
    body: '<b>Hello</b>'
  });
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(err, req, res, next) {
  // NODE_ENV = 'production'
  if (app.get('env') == 'development') {
    var errorHandler = express.errorHandler();
    errorHandler(err, req, res, next);
  } else {
    res.send(500);
  }
});
/*

var routes = require('./routes');
var user = require('./routes/user');

// all environments

app.get('/', routes.index);
app.get('/users', user.list);

*/
console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/');

http.createServer(app).listen(config.get('port'), function(){
  log.info('Express server listening on port ' + config.get('port'));
});

var open = require("open");
open("http://127.0.0.1:3000/");
