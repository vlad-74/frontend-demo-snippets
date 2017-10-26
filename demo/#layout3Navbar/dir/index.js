let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------


var ECT = require('ect'); // npm install ect -S

var renderer = ECT({ root : __dirname + '/view', ext : '.ejs' });

renderer.render('index', {title : 'Hello, world!'}, function(error, ejs) {
	if (error) console.log(error);
	console.log(ejs);
});