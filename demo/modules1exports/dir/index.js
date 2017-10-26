let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

var user = require('./user');

function run() {
  var vasya = new user.User("Вася");
  var petya = new user.User("Петя");

  vasya.hello(petya);
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}

str = `
var user = require('./user');

function run() {
  var vasya = new user.User("Вася");
  var petya = new user.User("Петя");

  vasya.hello(petya);
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}
`
console.log(str);

console.log('ЭТОТ МОДУЛЬ МОЖЕТ БЫТЬ ЗАПУЩЕН КАК САМОСТОЯТЕЛЬНО ТАК И ИЗ node modules1exports\\dir\\app');
