let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

let br = hf.bro.getBrowser();
console.log('ТЕКУЩИЙ БРАУЗЕР = ', br);

console.log('\n\n================ОКОНЧАНИЕ БЛОКА BROWSER================');