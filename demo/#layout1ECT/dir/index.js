let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

var ECT = require('ect'); // npm install ect -S

var renderer = ECT({ root : {
	layout: '<html><head><title><%- @title %></title></head><body><% content %></body></html>',
	page: '<% extend "layout" %><p>Page content</p>'
	}
});

var html = renderer.render('page', { title: 'Hello, World!' });

console.log('РЕЗУЛЬТАТ = ', html + '\n' + gl_hr);
