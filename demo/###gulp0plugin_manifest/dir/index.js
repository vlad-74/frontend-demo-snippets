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
  + '\nПРИ ДЕЙСТВИЕ НА ОДНОМ БРАУЗЕРЕ (chrome), АНАЛОГИЧНЫЕ ДЕЙСТВИЯ ОТРАЖАЮТСЯ В ДРУГОМ БРАУЗЕРЕ (opera)' 
  );
});
//-------------------------------------------------------------------------------------
let str = `
ДОБАВИТЬ ФАЙЛЫ В ПОТОК - this.push(...)
`
console.log(str);

var child_process = require('child_process');

child_process.exec("cd " + __dirname.split('demo\\').pop() + "&gulp assets", function(error, stdout, stderr) {
    console.log(stdout);
});

var open = require("open");
setTimeout(function(){ 
	open("https://github.com/rvagg/through2"); 
	open("https://github.com/sindresorhus/gulp-rev");  // unicorn.css → unicorn-d41d8cd98f.css
}, 5000);
