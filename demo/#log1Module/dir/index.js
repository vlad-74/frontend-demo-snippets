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

function getFunctionName(){return (new Error()).stack.split('\n')[2].split(' ')[5];}

var User = require('./user');
// console.log('getFunctionName = ', hf.fun.getFunctionName());
function run() {
  var vasya = new User("Вася");
  var petya = new User("Петя");

  vasya.hello(petya);

  log(db.getPhrase("Run successful"));

  function test(r){
    log(hf.fun.getFunctionName());
    return r;
  };

  log(hf.fun.getFunctionName() + test('ВОЗВРАЩАЕТ return ФУНКЦИИ test '));

  log(hf.fun.getFunctionName() + 'ТЕКСТ ЛОГА ');
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}
