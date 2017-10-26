// var log = require('logger')(module);
// log(db.getPhrase("Run successful"));

module.exports = function(module) {
  return function(/* ... */) {
    var args = ['logger - ' + module.filename.substring(module.filename.indexOf('modules4logger\\dir') + 18)].concat([].slice.call(arguments));
    console.log.apply(console, args);
  };
};