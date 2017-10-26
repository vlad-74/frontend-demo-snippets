let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

var util = require('util');
var phrases = {
  "Hello": "Привет",
  "world": "мир"
};

// message name stack
function PhraseError(message) {
  this.message = message;
  Error.captureStackTrace(this, PhraseError); // получаем стек возникновения ошибки
}
util.inherits(PhraseError, Error);
PhraseError.prototype.name = 'PhraseError';

function HttpError(status, message) {
  this.status = status;
  this.message = message;
  Error.captureStackTrace(this, HttpError); // получаем стек возникновения ошибки
}
util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';

function getPhrase(name) {
  if (!phrases[name]) {
    throw new PhraseError("Нет такой фразы: " + name); // HTTP 500, уведомление!
  }
  return phrases[name];
}

function makePage(url) {
  if (url != 'index.html') {
    throw new HttpError(404, "Нет такой страницы"); // HTTP 404
  }
  return util.format("%s, %s!", getPhrase("*****"), getPhrase("world"));
}

try {
  var page = makePage('index.html');
  console.log(page);
} catch (e) {
  if (e instanceof HttpError) {
    console.log(e.status, e.message);
  } else {
    console.error("Ошибка %s\n сообщение: %s\n стек: %s", e.name, e.message, e.stack);
  }
};
