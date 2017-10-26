let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

var db = require('./db');
db.connect(); //КАККБЫ ПОДКЛЮЧАЕМ БАЗУ

var User = require('./user');

function run() {
  console.log(db.getPhrase("Run successful"));
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}

str = `
index.js
var db = require('./db');
db.connect(); // КАККБЫ ПОДКЛЮЧАЕМ БАЗУ

var User = require('./user');

function run() {
  console.log(db.getPhrase("Run successful"));
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}


db/index.js
var phrases;
exports.connect = function() {
  phrases = require('./ru');
};

exports.getPhrase = function(name) {
  if (!phrases[name]) {
    throw new Error("Нет такой фразы: " + name);
  }
  return phrases[name];
};
`
console.log(str)