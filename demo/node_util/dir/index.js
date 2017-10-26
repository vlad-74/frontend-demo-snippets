let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

var util = require('util');
console.log(gl_hr);

var obj = {
  a: 5,
  b: 6,
  inspect: function() {
    return 123;
  }
};
obj.self = obj;

console.log('inspect (аналог toString()) = ', util.inspect(obj) );
console.log(gl_hr);

console.log('format - автоподмена') 
var str = ' My %s %d %j", "string", 123, {test: "obj"}'
console.log('Было = ' + str);

str = util.format("Стало = My %s %d %j", "string", 123, {test: "obj"});
console.log(str);
console.log(gl_hr);

console.log("inherits = НАСЛЕДОВАНИЕ СВОЙСТВ (ФУНКЦИЙ) РОДИТЕЛЯ");
str = `
// Родитель
function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  console.log("inherits = Ходит " + this.name);
};

// Потомок
function Rabbit(name) {
  this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function() {
  console.log("inherits = Прыгает " + this.name);
};

// Использование
var rabbit = new Rabbit("наш кролик");
rabbit.walk();
rabbit.jump();
`
console.log(str);
console.log(gl_rz);
// Родитель
function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  console.log("inherits = Ходит " + this.name);
};

// Потомок
function Rabbit(name) {
  this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function() {
  console.log("inherits = Прыгает " + this.name);
};

// Использование
var rabbit = new Rabbit("наш кролик");
rabbit.walk();
rabbit.jump();
console.log(gl_hr);