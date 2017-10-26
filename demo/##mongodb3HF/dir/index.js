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
var url = "mongodb://localhost:27017/mydb";
var open = require("open");

MongoClient.connect(url, function(err, db) {
	if(err){
		//ОТКРЫВАЮ mongod, mongo
		open(__dirname + "/mongodb/mongodb.bat");
		setTimeout(function(){run();}, 9000); 
	}else{
		run();
	}
});

function run(){

hf.mng.creatCollection('mydb', 'fignya');

hf.mng.insertIntoCollection('mydb', {name: "vladimir"}, 'fignya');
hf.mng.insertIntoCollection('mydb', {name: "федя"}, 'fignya');
hf.mng.insertIntoCollection('mydb', {name: "ибрагим"}, 'fignya');
hf.mng.insertIntoCollection('mydb', {name: "ваня"}, 'fignya');
hf.mng.insertIntoCollection('mydb', {name: "джон"}, 'fignya');

hf.mng.udateCollection('mydb', {name: "vladimir"}, {name: "петя"}, 'fignya');

hf.mng.findOneFirst('mydb', 'fignya')
  .then(function res(result) {
    console.log('findOneFirst = ', JSON.stringify(result) + '\n' + gl_hr);
  });

hf.mng.findInCollection('mydb', {name: "петя"}, 'fignya')
  .then(function res(result) {
    console.log('findInCollection = ', JSON.stringify(result) + '\n' + gl_hr);
  });

hf.mng.limitCollection('mydb', 'fignya', 3) 
  .then(function res(result) {
    console.log('limitCollection = ', JSON.stringify(result) + '\n' + gl_hr);
  });  

hf.mng.sortCollection('mydb', {name: -1},'fignya')
  .then(function res(result) {
    console.log('sortCollection = ', JSON.stringify(result) + '\n' + gl_hr);
  });  

hf.mng.delOne('mydb', {name: "петя"}, 'fignya');
hf.mng.delOne('mydb', {name: "федя"}, 'fignya');
hf.mng.delOne('mydb', {name: "ибрагим"}, 'fignya');
hf.mng.delOne('mydb', {name: "ваня"}, 'fignya');
hf.mng.delOne('mydb', {name: "джон"}, 'fignya');


hf.mng.dropCollection('mydb', 'fignya');  
};
