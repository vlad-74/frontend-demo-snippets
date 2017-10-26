let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------
var fs = require('fs');

// __dirname + "/big.html"  || __filename
var stream = new fs.ReadStream(__dirname + "/big.html", {encoding: 'utf-8'}); 

console.log("START" + '\n' + gl_hr);
stream.on('readable', function() {
  var data = stream.read();
  if(data != null) console.log(data.toString()); //data.length
});

stream.on('end', function() {
  console.log(gl_hr + '\n' + "THE END" );
});

stream.on('error', function(err) {
  if (err.code == 'ENOENT') {
    console.log(gl_hr + '\n' + "Файл не найден, попинайте админа, пусть выложит.."+ '\n' + gl_hr);
  } else {
    console.error(err);
  }
});