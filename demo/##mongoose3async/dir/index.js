let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------
// npm install --global async
// ЗАПУСТИТЬ mongod
// ЗАПУСТИТЬ mongo
// !!! ЗАПУСТИТЬ ФАЙЛ - node async-mongoose/dir (set NODE_PATH=.&node async-mongoose/dir)!!!
// ДЛЯ ОТОБРАЖЕНИЯ ДАННЫХ ИЗ MONGODB - STUDIO 3T(https://studio3t.com/)

var mongoose = require('./lib/mongoose');

mongoose.set('debug', true);

var async = require('async');

async.series([
  open,
  dropDatabase,
  requireModels,
  createUsers
], function(err) {
  console.log(arguments);
  mongoose.disconnect(); //ЗАКРЫВАЮ СОЕДИНЕНИЕ
  process.exit(err ? 255 : 0);
});

//каждый callback передаст в arguments series

function open(callback) {
  mongoose.connection.on('open', callback);
  // console.log('!!! mongoose.connection.readyState !!! = ', mongoose.connection.readyState); // => 2
}

function dropDatabase(callback) {
  var db = mongoose.connection.db;
  db.dropDatabase(callback);
}

function requireModels(callback) {
  require('./models/user');

  async.each(Object.keys(mongoose.models), function(modelName, callback) {
    mongoose.models[modelName].ensureIndexes(callback);
  }, callback);
}

function createUsers(callback) {

  var users = [
    {username: 'Вася', password: 'supervasya'},
    {username: 'Петя', password: '123'},
    {username: 'admin', password: 'thetruehero'}
  ];

  async.each(users, function(userData, callback) {
    var user = new mongoose.models.User(userData);
    user.save(callback);
  }, callback);
}
