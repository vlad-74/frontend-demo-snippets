let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858", "chrome", "firefox");

// var child_process = require('child_process');
// child_process.exec(__dirname + "/g.bat " + __dirname, function(error, stdout, stderr) {
//     console.log(stdout);
// });

// var log = require('./logger')(module);
// var hf = require('help-functions/functions/functions');
// log(hf.getFunctionName() + 'ТЕКСТ ЛОГА ');
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

var mystring = "Работа с текстом";
var int = 10;

console.log('String(int) ЭТО = ', typeof String(int));
console.log('int.toString() ЭТО = ', typeof int.toString());

//Удалить с начала
	function delStart(string, i=1){
		return string.slice(i)
	};
	console.log('delStart(mystring, 5) = ', hf.str.delStart(mystring, 5));
//Удалить с конца
	function delFinish(string, i=1){
		return string.slice(0, -i)
	};
	console.log('delFinish(mystring, 5) = ', hf.str.delFinish(mystring, 5));
//Удалить промежуток
	function delMidle(string, start=0, end=1000){
		return string.substring(start, end)
	};
	console.log('delMidl(mystring, 9, 10) = ', hf.str.delMidle(mystring, 9, 10));

//Удалить от
	function delFrom(string, separator, i){
		let arr = string.split(separator)
		return arr[i]
	};
	console.log('delFrom(mystring) = ', hf.str.delFrom(mystring, 'с', 2));