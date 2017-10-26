let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

var User = require('./user');

function run() {
  var vasya = new User("Вася");
  var petya = new User("Петя");

  vasya.hello(petya);
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}

str = `
var User = require('./user');

function run() {
  var vasya = new User("Вася");
  var petya = new User("Петя");

  vasya.hello(petya);
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}
`
console.log(str);
console.log('1. ЭТОТ МОДУЛЬ МОЖЕТ БЫТЬ ЗАПУЩЕН КАК САМОСТОЯТЕЛЬНО ТАК И ИЗ node modules1exports\\dir\\app');
console.log('2. ЕСЛИ У В "require(\'./user\')" БЫЛ ПРОСТО exports.User = User ТО ОН ВЫЗЫВАЕТСЯ var vasya = new user.User("Вася");');
console.log('3. ЕСЛИ У В "require(\'./user\')" БЫЛ module.exports = User; ТО ОН ВЫЗЫВАЕТСЯ var vasya = new User("Вася");');