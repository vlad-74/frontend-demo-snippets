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
  + '\n1. ЧЕРЕЗ НЕСКОЛЬКО СЕКУНД browser-sync ОТКРОЕТ БРАУЗЕР'
  + '\n2. КОД ЗАДАЧ СТУКТУРИРОВАН ПО ФАЙЛАМ (1 ЗАДАЧА/1 ФАЙЛ)'
  + '\n3. БЛАГОДОРЯ gulp-load-plugins($.) НЕ НУЖНО ВРУЧНУЮ УКАЗЫВАТЬ НЕОБХОДИМЫЕ require'
  + '\n3.1. $. - ВМЕСТО gulpIf(isDevelopment, sourcemaps.init()) - $.if(isDevelopment, $.sourcemaps.init()),'
  + '\n3.2. БЛАГОДОРЯ lazyRequireTask - require МОДУЛЕЙ ПРОИСХОДИТ ПОЗАДАЧНО!!!'
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
	open("https://github.com/jackfranklin/gulp-load-plugins");  
}, 5000);
