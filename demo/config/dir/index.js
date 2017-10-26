let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog(__dirname + '/index.js')
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

var str = `
//ПАПКА config
-----------------------------------------------------------------
//ФАЙЛ config/index.js
var nconf = require('nconf');
var path = require('path');

nconf.argv()
  .env()
  .file({ file: path.join(__dirname, 'config.json') });

module.exports = nconf;
-----------------------------------------------------------------

//ФАЙЛ config/config.json
{
  "port": 3000
}
-----------------------------------------------------------------
В ФАЙЛЕ app.js подключить config
var config = require('config');

http.createServer(app).listen(config.get('port'), function(){
  log.info('Express server listening on port ' + config.get('port'));
});
`
console.log(str);