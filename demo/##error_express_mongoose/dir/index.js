let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------
var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./config');
var log = require('./lib/log')(module);
var HttpError = require('./error').HttpError;

log.info('!!! ДЛЯ НОРМАЛЬНОЙ РАБОТЫ СКРИПТА ДОЛЖНЫ БЫТЬ ПОДКЛЮЧЕНЫ : mongod & mongo !!!');

var app = express();

app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/template');
app.set('view engine', 'ejs');

app.use(express.favicon());

if (app.get('env') == 'development') {
  app.use(express.logger('dev'));
} else {
  app.use(express.logger('default'));
}

app.use(express.bodyParser());

app.use(express.cookieParser());

app.use(require('./middleware/sendHttpError')); // СВОЙ ОБРАБОТЧИК ОШИБОК 

app.use(app.router);

require('./routes')(app);

app.use(express.static(path.join(__dirname, 'public')));


app.use(function(err, req, res, next) {
  if (typeof err == 'number') { // next(404);
    err = new HttpError(err);
  }

  if (err instanceof HttpError) {
    res.sendHttpError(err);
  } else {
    if (app.get('env') == 'development') {
      express.errorHandler()(err, req, res, next);
    } else {
      log.error(err);
      err = new HttpError(500);
      res.sendHttpError(err);
    };
  };
});


http.createServer(app).listen(config.get('port'), function(){
  log.info('Express server listening on port ' + config.get('port'));
});

var open = require("open");
open("http://127.0.0.1:3000/");