let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

var log = require('logger')(module);
var db = require('db');
db.connect();

var User = require('./user');

function run() {
  var vasya = new User("Вася");
  var petya = new User("Петя");

  vasya.hello(petya);

  log(db.getPhrase("Run successful"));
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}

str = `
var log = require('logger')(module);
var db = require('db');
db.connect();

var User = require('./user');

function run() {
  var vasya = new User("Вася");
  var petya = new User("Петя");

  vasya.hello(petya);

  log(db.getPhrase("Run successful"));
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}
`
console.log(str);
console.log('ДЛЯ КОРРЕКНОЙ РАБОТЫ :');
console.log('1. В CMD ВВЕСТИ = cd modules5loggerNODE_PATH/dir');
console.log('2. В CMD ВВЕСТИ = set NODE_PATH=.&node index.js');
console.log('Приоритетность поиска файлов : \n 1 .js 2 .node 3 .json 4. ../folder(index.js) 5. folder in node_modules\n');
