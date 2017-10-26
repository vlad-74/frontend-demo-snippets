// var log = require('logger')(module);

module.exports = function(module) {

  return function(/* ... */) {
    var args = [' - logger = ' + module.filename.substring(module.filename.indexOf('##log1Module\\dir') +17)].concat([].slice.call(arguments));
    console.log.apply(console, args);
  };
};