let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

console.log('ОТКРОЕТСЯ БРАУЗЕР : http://127.0.0.1:3000');

var express = require('express')
  , engine = require('ejs-locals')
  , app = express();

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs'); // so you can render('index')

// render 'index' into 'boilerplate':
app.get('/',function(req,res,next){
	//what используется в index.ejs->в body boilerplate.ejs || who используется в boilerplate.ejs
  	res.render('index', { what: 'best', who: 'me' }); 
});

app.listen(3000);

var open = require("open");
open("http://127.0.0.1:3000");