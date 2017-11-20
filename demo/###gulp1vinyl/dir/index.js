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
  console.log('\n' + "THE END" + '\n' + gl_hr + '\nРЕЗУЛЬТАТ ВЫПОЛНЕНИЯ gulpfile.js :\n1. СМОТРИ НИЖЕ ЧЕРЕЗ НЕСКОЛЬКО СЕКУНД\n2. в папке ###gulp1vinyl/dir появятся 2 подпапки (css и js) : \nnode '+ __dirname.split('demo\\').pop());
});
//-------------------------------------------------------------------------------------

var child_process = require('child_process');
child_process.exec("cd ###gulp1vinyl/dir&gulp", function(error, stdout, stderr) {
    console.log(stdout);
});


var open = require("open");
setTimeout(function(){ open("https://github.com/gulpjs/vinyl"); }, 5000);

