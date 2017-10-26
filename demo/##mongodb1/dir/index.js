let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

// Установить MongoDB
// Прописать путь - https://www.youtube.com/watch?v=1uFY60CESlM
// https://docs.mongodb.com/manual/reference/mongo-shell/
// https://www.w3schools.com/nodejs/nodejs_mongodb_create_db.asp

// !!! В ПАПКЕ mydb - ДАННЫЕ ДЛЯ ИМПОРТА ЧЕРЕЗ Studio 3T (https://studio3t.com/) !!!

// npm i mongodb -S
console.log('1. ПРИ ПОМОЩИ mongodb.bat ЧЕРЕЗ 9 -10 СЕКУНД ПОДКЛЮЧИТСЯ МОНГО\n'
	+ '2. ЗАТЕМ ЗАПУСТИТСЯ СКРИПТ РАБОТЫ С МОНГО');

var MongoClient = require('mongodb').MongoClient
var format = require('util').format;
var curUrl = 'mongodb://127.0.0.1:27017/chat'; 
var open = require("open");

MongoClient.connect(curUrl, function(err, db) {
	if(err){
		//ОТКРЫВАЮ mongod, mongo
		open(__dirname + "/mongodb/mongodb.bat");
		setTimeout(function(){run();}, 9000); 
	}else{
		run();
	}
});


//ЗАКРЫВАЮ mongodb (НО НЕ CMD ОКНА !!!)
// setTimeout(function(){open(__dirname + "/mongodb/mongodb/closeMongo.bat");}, 11000);

//ЗАКРЫВАЮ cmd ОКНА
// setTimeout(function(){open(__dirname + "/mongodb/mongodb/closeWin.bat");}, 12900);

function dbConnect(db){
	//ВЫБИРАЮ "ТАБЛИЦУ"
	var collection = db.collection('test_insert');

	//ОЧИЩАЮ "ТАБЛИЦУ"
	collection.remove({}, function(err, affected) {
		if (err) throw err;

		//ВСТАВЛЯЮ В "ТАБЛИЦУ"
		collection.insert({a: 22222222}, function(err, docs) {
			//ИЩУ В "ТАБЛИЦЕ"
		    var cursor = collection.find({a: 22222222});
		    cursor.toArray(function(err, results) {
		    	console.log('РЕЗУЛЬТАТ ИЗ MONGODB : ');
		        console.dir(results);
		        // ЗАКРЫВАЮ БАЗУ ДАННЫХ
		        db.close();        
		    });
		});

	});
};

function run(){
	MongoClient.connect(curUrl, function(err, db) {
		if (err) throw err;
		dbConnect(db); //ПРИСОЕДЕНЯЮСЬ К БД
	});
};
