let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------
// npm install --global async (https://caolan.github.io/async/)

var async = require('async');
var i = 0;

//ПЕРВЫЙ АРГУМЕНТ - МАССИВ, ВТОРОЙ - ФУНКЦИЯ КОТОРАЯ ОБРАБАТЫВАЕТ ЭЛЕМЕНТ (item) МАССИВА
// __filename - ПУТЬ - КАК МАССИВ БУКВ
async.each(__filename, function(item, callback) { 

    // Perform operation on item here.
    console.log(i++ +' - Processing item - ' + item ); // ПО БУКВАМ ВЫВОДИТ ПУТЬ ФАЙЛА

    if( item.length > 32 ) {
      console.log('This item name is too long');
      callback('item name too long');
    } else {
      // Do work to process item here
      console.log('item.length processed - ' + item.length);
      callback();
    }
}, function(err) {
    // if any of the item processing produced an error, err would equal that error
    if( err ) {
      // One of the iterations produced an error.
      // All processing will now stop.
      console.log('A item failed to process');
    } else {
      console.log('All items have been processed successfully');
    }
});

async.parallel({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 105);
    },
    two: function(callback) {
        setTimeout(function() {
            callback(null, 2);
        }, 100);
    }
}, function(err, results) {
    console.log('parallel =  ',results); // results : {two: 2, one: 1} ИЗ-ЗА 105 У one И 100 У two
});

//waterfall - ДАННЫЕ ПЕРЕДАЮТСЯ ОТ ФУНКЦИИ К ФУНКЦИИ
async.waterfall([
    myFirstFunction,
    mySecondFunction,
    myLastFunction,
], function (err, result) {
    // result now equals 'done'
    console.log('async.waterfall result = ', result);

});
function myFirstFunction(callback) {
    setTimeout(function() {
      console.log('300 myFirstFunction = ', 'one', 'two');
      callback(null, 'one', 'two');
  }, 300);
}
function mySecondFunction(arg1, arg2, callback) {
    // arg1 now equals 'one' and arg2 now equals 'two'
    setTimeout(function() {
      console.log('200 mySecondFunction arg1, arg2 = ', arg1, arg2);
      callback(null, 'three');
    }, 200);
}
function myLastFunction(arg1, callback) {
    // arg1 now equals 'three'
    setTimeout(function() {
      console.log('100 myLastFunction arg1 = ', arg1);
      callback(null, 'done');
    }, 100);
}

async.series({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 200);
    },
    two: function(callback){
        setTimeout(function() {
            callback(null, 2);
        }, 100);
    }
}, function(err, results) {
    console.log('series = ', results);  // results is now equal to: {one: 1, two: 2}
});

// ТРЕНИРОВКА=============================================================
var gd5, gd15;

let getData = (n) => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Promise ФУНКЦИЯ getData'+ n +'() ОТРАБОТАЛА УСПЕШНО !');
        }, n);
    });
};

async.series([
    function(callback) {
        // do some more stuff ...
        getData(1500)
          .then(// result - аргумент resolve   
            result => {gd15 = result; console.log("1500 - " + result);}, 
            error => {console.log("Rejected: " + error);} 
          ); 
        callback(null, 'one');
    },
    function(callback) {
        // do some more stuff ...
        var res;
        getData(500)
          .then(// result - аргумент resolve   
            result => {gd5 = result; console.log("500 -  " + result);}, 
            error => {console.log("Rejected: " + error);} 
          );
        callback(null, 'two');
    },
    function(callback) {
        // do some more stuff ...
        var res;
        getData(1000)
          .then(// result - аргумент resolve   
            result => { callback(null, result);}, 
            error => { callback(null, error);}
          );
    }
],
// optional callback
function(err, results) {
    setTimeout(function(){console.log('setTimeout 100 - ', gd15, gd5);}, 100);
  results.map(item => console.log('item = ', item))
  // console.log('results - ', results);// results is now equal to ['one', 'two']  
});


// ПРИМЕР ИЗ ASYNC-MONGOOSE (ФУНКЦИИ ВНУТРИ МАССИВА)
// async.series([
//   open,
//   dropDatabase,
//   requireModels,
//   createUsers
// ], function(err) {
//   console.log(arguments);
//   mongoose.disconnect(); //ЗАКРЫВАЮ СОЕДИНЕНИЕ
//   process.exit(err ? 255 : 0);
// });