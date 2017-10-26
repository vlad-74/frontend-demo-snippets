// set NODE_P=array/dir/index.js&node read
let hf = require('help-functions');
const NODE_P = process.env.NODE_P || __filename;

var fs = require('fs');
var stream = new fs.ReadStream(NODE_P, {encoding: 'utf-8'});
console.log('\n' + gl_hr + '\n' + "START" + '\n');
stream.on('readable', function() {
  var data = stream.read();
  if(data != null){console.log('ФАЙЛ ' + NODE_P + ': ' + '\n' + gl_hr + '\n' + data.toString());}
});

stream.on('end', function() {
  console.log('\n' + "THE END" + '\n' + gl_hr);
});