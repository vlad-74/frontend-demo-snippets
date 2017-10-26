let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

var fs = require('fs');

fs.stat(__filename, function(err, stats) {
  console.log('СТАТИСТИКА ФАЙЛА/ПАПКИ : Это файл = ', stats.isFile());
  console.log('СТАТИСТИКА ФАЙЛА/ПАПКИ : Это папка = ', stats.isDirectory());
  console.log('СТАТИСТИКА ФАЙЛА/ПАПКИ : Информация о файле/папке : \n' , stats, '\n' + gl_hr);
});

fs.writeFile("file.tmp", "data", function(err) {
  if (err) throw err;
  console.log('ДЕЙСТВИЯ С ФАЙЛОМ : writeFile');
  fs.rename("file.tmp", "new.tmp", function(err) {
    if (err) throw err;
    console.log('ДЕЙСТВИЯ С ФАЙЛОМ : rename');
    fs.unlink("new.tmp", function(err) {
      if (err) throw err;
      console.log('ДЕЙСТВИЯ С ФАЙЛОМ : unlink'+ '\n' + gl_hr);
    });
  });
});

setTimeout(function(){
  console.log('ВЫВЕСТИ СОДЕРЖИМОЕ ФАЙЛА');
  hf.fil.fileTostring(__filename)
    .then(function res(result) {console.log(result + '\n' + gl_hr);})
    .catch(function err(result) {console.log('ОШИБОЧКА ВЫШЛА = ', result);});
},100);
// ЕЩЁ ВАРИАНТ ПОЛУЧЕНИЯ КОНТЕНТА ФАЙЛА
// const fetchResult = () => hf.fil.fileTostring(__filename)
// const getResult = async () => {const result = await fetchResult(); return result;}
// getResult().then(result => {console.log('result', result)})