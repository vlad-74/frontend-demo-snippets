let hf = require('help-functions');
const NODE_f = process.env.NODE_f || __dirname;

let cont = hf.fil.choiceAllFilesFromFolder(NODE_f,'folder');
console.log('СОДЕРЖИМОЕ ПАПКИ - ' + NODE_f + '\n' + cont);