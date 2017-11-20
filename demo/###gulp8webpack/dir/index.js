let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

var fs = require('fs');
var stream = new fs.ReadStream(__dirname + '\\gulpfile.js', {encoding: 'utf-8'});
console.log('\n' + "START" + '\n');
stream.on('readable', function() {
  var data = stream.read();
  if(data != null){console.log('ФАЙЛ ' + __dirname + '/gulpfile.js : ' + '\n' + gl_hr + '\n' + data.toString());}
});

stream.on('end', function() {
  console.log('\n' + "THE END" + '\n' + gl_hr + '\nРЕЗУЛЬТАТ ВЫПОЛНЕНИЯ gulpfile.js : node '+ __dirname.split('demo\\').pop()
  + 'stylus.resolver; // ПЕРЕПИСЫВАНИЕ УРЛОВ'
  + 'gulp-rev //ПЕРЕИМЕНОВАНИЕ - ДОБАВЛЕНИЕ ХЕША'
  + 'gulp-rev-replace //ЗАМЕНИТЬ URL В HTML, JS, CSS'
  + 'gulp-svg-sprite // СОЗДАНИЕ СПРАЙТА'
  + 'gulp-cssnano // МИНИМИЗАЦИЯ'
  );
});
//-------------------------------------------------------------------------------------
let str = `

`
console.log(str);

var child_process = require('child_process');

child_process.exec("cd " + __dirname.split('demo\\').pop() + "&gulp dev", function(error, stdout, stderr) {
    console.log(stdout);
});

var open = require("open");
setTimeout(function(){ 
	// open("http://stylus-lang.com/docs/js.html"); 
	// open(__dirname + "/webpack.mp4");  
}, 5000);
