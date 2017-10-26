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

var app = express();
app.set('port', 3000);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// Middleware - app.use
//обычно функция с 3 параметрами (req, res, next), 
//если с 4 (err, req, res, next) то это для обработки ошибки

app.use(function(req, res, next) {
  if (req.url == '/') {
    res.end("Hello");
  } else {
    next();
  }
});

app.use(function(req, res, next) {
  if (req.url == '/test') {
    res.end("Test");
  } else {
    next();
  }
});

app.use(function(req, res, next) {
  if (req.url == '/forbidden') {
    next(new Error("wops, denied")); // next с аргументом - переход к обработчику ошибок
  } else {
    next();
  }
});

app.use(function(req, res) {
  res.send(404, "Page Not Found Sorry");
});

//обработчик ошибок
app.use(function(err, req, res, next) {
  // NODE_ENV = 'production'
  if (app.get('env') == 'development') {
    var errorHandler = express.errorHandler();
    errorHandler(err, req, res, next);
  } else {
    res.send(500);
  }
});
`
console.log(str + gl_hr);

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
app.set('port', 3000);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/');
var open = require("open");
open("http://127.0.0.1:3000/");


// Middleware - app.use
//обычно функция с 3 параметрами (req, res, next), 
//если с 4 (err, req, res, next) то это для обработки ошибки

app.use(function(req, res, next) {
  if (req.url == '/') {
    res.end("Hello");
  } else {
    next();
  }
});

app.use(function(req, res, next) {
  if (req.url == '/test') {
    res.end("Test");
  } else {
    next();
  }
});

app.use(function(req, res, next) {
  if (req.url == '/forbidden') {
    next(new Error("wops, denied")); // next с аргументом - переход к обработчику ошибок
  } else {
    next();
  }
});

app.use(function(req, res) {
  res.send(404, "Page Not Found Sorry");
});

//обработчик ошибок
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
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/users', user.list);

*/