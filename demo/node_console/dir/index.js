let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------
console.log.format = function (c) {
	return c.getDate() + ": [" + c.filename + ":" + c.getLineNumber() + "] " + c.functionName;
};


console.log("Log"); // = info (out)

console.error('Имя введено не было') // вид как у шибки

console.time('muFunc');
//...
console.timeEnd('muFunc'); // => muFunc: 0ms

console.log('Фамилия: %s %s', 'family', 'imya');

console.trace(); // => !!! ЕСЛИ ИСПОЛЬЗОВАТЬ В ФУНКЦИИ УКАЖЕТ ИМЯ ВЫЗЫВАЕМОЙ ФУНКЦИИ
let supports_localStorage = function(){
	console.trace();
}
supports_localStorage();

let supports = function(){
	console.trace();
}
supports();

console.dir('dir');

// работает 
// console.profile('myFunc'); // => Profile 'myFunc' started.
// //...
// console.profileEnd('myFunc'); // => Profile 'myFunc' finished.