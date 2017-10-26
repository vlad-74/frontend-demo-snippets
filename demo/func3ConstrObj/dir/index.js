let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

let str4 = `
Конструктор Function()
var f = new Function("x", "y", "return x*y;"); АНАЛОГ var f = function anonymous (x, y) { return x*y; }

Конструктор Function() принимает произвольное число строковых аргументов.
Последний аргумент должен содержать текст с телом функции;
Может содержать произвольное число инструкций на языке JavaScript, разделенных точкой с запятой
`
console.log(str4);

var f = new Function ("x", "y", "return x*y;");
console.log('!!! var f = new Function("x", "y", "return x*y;") = \n', f);
console.log('!!! f(2,5) = ', f(2,5));

let str5 = `
function User(name){
    this.name = name;
}

User.prototype.hello = function(){
    return "Hello, " + this.name;
}
`
console.log(str5);

function User(name){
    this.name = name;
}

User.prototype.hello = function(){
    return "Hello, " + this.name;
}
let vasya = new User("Вася");
console.log('let vasya = new User("Вася"); vasya.hello() = ', vasya.hello());