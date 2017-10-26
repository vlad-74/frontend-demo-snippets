let hf = require('help-functions');
const NODE_f = process.env.NODE_f || __dirname;

let cont = hf.fil.choiceAllFilesFromFolder(NODE_f);
console.log('\n' + gl_hr + '\n' +'СОДЕРЖИМОЕ ПАПКИ - ' + NODE_f);
cont.map(item => console.log(item));
console.log(gl_hr)