let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

// db.users.deleteOne( { "username" : "Tester2" } )
var User = require('./models/user').User;

var user = new User({
  username: "Tester2",
  password: "secret"
});

user.save(function(err, user, affected) {
  if (err) throw err;

  User.findOne({username: "Tester"}, function(err, tester) {
    console.log(tester);
  });
});

// User.remove НЕ СРАБАТЫВАЕТ НА ТОЛЬКО ЧТО СОЗДАННЫЙ ОБЪЕКТ
//User.remove({ username: "Tester2" }, function(err, countObj) { })

//УДАЛЯЮ СОЗДАННЫЙ Tester2 ПРИ ПОМОЩИ mongodb
hf.mng.delOne('chat', {username: "Tester2"}, 'users')