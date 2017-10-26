let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

// http://mongoosejs.com/
// npm i mongoose -S
// db.cats.deleteOne( { "name" : "Zildjian" } )
// http://mongoosejs.com/docs/connections.html#use-mongo-client

//MONGOOSE буферезует запросы которые идут е базе

var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient
var open = require("open");

//СВОЯ КОСТЫЛЬНАЯ ПРОВЕРКА 
MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
	if(err){
		//ОТКРЫВАЮ mongod, mongo
		open(__dirname + "/mongodb/mongodb.bat");
		setTimeout(function(){run();}, 9000); 
	}else{
		run();
	}
});

function run(){
	mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
	mongoose.Promise = global.Promise;

	//СОЗДАЮ СХЕМУ ДЛЯ КЛАССА (model) Cat
	var schema = mongoose.Schema({
	  name: String
	});

	//СОЗДАЮ МЕТОДЫ ДЛЯ КЛАССА (model) Cat
	schema.methods.meow = function(){
		console.log('МЕТОД meow ИЗ schema Cat = ', this.get('name') + '\n' + gl_hr);
	}

	//СОЗДАЮ КЛАСС
	var Cat = mongoose.model('Cat', schema); 

	// СОЗДАЮ НОВЫЙ ОБЪЕКТ КЛАССА Cat
	var kitty = new Cat({ name: 'Zildjian' }); 

	// ОБЪЕКТ АВТОМАТИЧЕСКИ СОХРАНЯЕТСЯ В КОЛЛЕКЦИИ Cats - ОТ КЛАССА Cat
	kitty.save(function (err) { 
	  if (err) {
	    console.log(err);
	  } else {
	    console.log('kitty save')
	  }
	});

	console.log(kitty + '\n' + gl_hr);
	kitty.meow();
}