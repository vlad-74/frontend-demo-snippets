// var log = require('logger')(module);
// log(hf.fun.getFunctionName() + 'ТЕКСТ ЛОГА ');

module.exports = function(module) {
  return function(/* ... */) {
    var args = [' - logger = ' + module.filename.substring(module.filename.indexOf('##log1Module/dir') + 70)].concat([].slice.call(arguments));
    console.log.apply(console, args);
  };
};