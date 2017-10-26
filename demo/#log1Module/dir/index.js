let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

str = `
МОДУЛЬ ЛОГИРОВАНИЯ :
module.exports = function(module) {

  return function(/* ... */) {
    var args = [' - logger = ' + module.filename.substring(module.filename.indexOf('##log\\dir') +10)].concat([].slice.call(arguments));
    console.log.apply(console, args);
  };
};

ИСПОЛЬЗОВАНИЕ МОДУЛЯ
var log = require('logger')(module);
log(db.getPhrase("Run successful"));
`
console.log(str + '\n' + gl_hr);

var log = require('./logger')(module);
var db = require('./db');
db.connect();

var User = require('./user');

function run() {
  var vasya = new User("Вася");
  var petya = new User("Петя");

  vasya.hello(petya);

  log(db.getPhrase("Run successful"));

  function test(r){
    return r;
  };

  log(test('ВОЗВРАЩАЕТ return ФУНКЦИИ test'));
  log('ПРОСТОЙ ТЕКСТ ЛОГА');
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}
