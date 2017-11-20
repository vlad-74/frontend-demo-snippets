var winston = require('winston');

module.exports = function(module) {
  return makeLogger(module.filename);
};

function makeLogger(path) {

  if (path.match(/dir\\request.js$/) || path.match(/dir\\index.js$/)) {
    let prod = false;
    prod = (!prod) ? 'silly' : 'error';

    var transports = [
      new winston.transports.Console({
        timestamp: true, // function() { return new Date().toString() }
        colorize: true,
        label: path.substring(path.indexOf('#logWinston/dir') + 67), // ПУТЬ
        level: prod // НАЧАЛЬНЫЙ УРОВЕНЬ ОТРАЖЕНИЯ СООБЩЕНИЙ - error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 
      }),
      new winston.transports.File({ filename: 'debug.log', level: 'debug' })
    ];
    return new winston.Logger({ transports: transports });
  } else {
    return new winston.Logger({
      transports: []
    });
  }
}
