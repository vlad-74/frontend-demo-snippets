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
//-------------------------------------------------

// //Creating a Database
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });
// //-------------------------------------------------

// //Creating a Collection
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   db.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });
// //-------------------------------------------------

//Insert Into Collection
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { name: "Company Inc", address: "Highway 37" };
  db.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
// //-------------------------------------------------

//Find One
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log('Find One (первый) - ' + result.name);
    db.close();
  });
});
// // //-------------------------------------------------

//Filter the Result
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var query = { address: "Highway 37" };
  db.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log('Filter the Result - ' + result);
    db.close();
  });
});
//-------------------------------------------------

//Sort the Result
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var mysort = { name: 1 };
  db.collection("customers").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log('Sort the Result - ' + result);
    db.close();
  });
});
//-------------------------------------------------

//Update Document
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { address: "Highway 37" };
  var newvalues = { name: "Mickey", address: "Canyon 123" };
  db.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log('1 document updated');
    db.close();
  });
});
//-------------------------------------------------

//Limit the Result
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("customers").find().limit(5).toArray(function(err, result) {
    if (err) throw err;
    console.log('Limit the Result - ' + result);
    db.close();
  });
});
//-------------------------------------------------

//Join Collections
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection('orders').aggregate([
    { $lookup:
       {
         from: 'products',
         localField: 'product_id',
         foreignField: '_id',
         as: 'orderdetails'
       }
     }
    ], function(err, res) {
    if (err) throw err;
    console.log('Join Collections = ', JSON.stringify(res));
    db.close();
  });
});
//-------------------------------------------------

//Delete Document
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { address: 'Canyon 123' };
  db.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log('1 document deleted');
    db.close();
  });
});
//-------------------------------------------------

// // //Drop Collection
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   db.collection("customers").drop(function(err, delOK) {
//     if (err) throw err;
//     console.log('Collection deleted');
//     db.close();
//   });
// });
// //-------------------------------------------------

};
