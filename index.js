let hf = require('help-functions');
let fs = require('fs');
const path = require('path');

let files = fs.readdirSync(__dirname + '/demo/').filter(f => fs.statSync(path.join(__dirname + '/demo/', f)).isDirectory());

console.log('\n' + gl_hr, '\nВСЕ DEMO (визуализация javascript) : \n',  files, '\n', gl_hr);
