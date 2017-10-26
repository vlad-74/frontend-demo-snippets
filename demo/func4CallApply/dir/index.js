let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

let str = `
Методы call() и apply() - !!! К ФУНКЦИИ ПРИКРЕПЛЯЕТСЯ ОБЪЕКТ !!!
Первым аргументом обоим методам, call() и apply(), передается объект, относительно которого вызывается 
функция; этот аргумент определяет контекст вызова и становится значением ключевого слова this в теле функции
`
console.log(str);

var add = function( a, b ) { return a + b;}

console.log('add( 1, 2 ) = ' ,add( 1, 2 )); // Обычный вызов
console.log('add.call( this, 1, 2 ) = ' , add.call( this, 1, 2 )); // call принимает каждый аргумент индивидуально и меняет контекст
console.log('add.apply( this, [ 1, 2 ] = ' , add.apply( this, [ 1, 2 ] )); // apply принимает массив аргументов также меняя контекст

console.log('\n1. Math.max(1,10,100,-1000) = ', Math.max(1,10,100,-1000));
console.log('2. Math.max([1,10,100,-1000]) = ', Math.max([1,10,100,-1000]));
console.log('3. Math.max.apply(Math, [1,10,100,-1000]) = ', Math.max.apply(Math, [1,10,100,-1000]));

function showFullName(age) { console.log( '\n' + this.firstName + " " + this.lastName + " " + age);}
var user = { firstName: "Василий", lastName: "Петров"};

let str2 = gl_hr + `\n
function showFullName(age) { console.log( '\\n' + this.firstName + " " + this.lastName + " " + age);}
var user = { firstName: "Василий", lastName: "Петров"};

// функция вызовется с this=user
showFullName.call(user, 30) // "Василий Петров"
showFullName.apply(user, [24]) // "Василий Петров"
`
console.log(str2 + '\n'+ gl_hr );

// функция вызовется с this=user
showFullName.call(user, 30) // "Василий Петров 30"
showFullName.apply(user, [24]) // "Василий Петров 24"

let str3 = gl_hr + `\n
Как мы знаем, arguments не массив, а обычный объект, поэтому таких полезных методов как 
push, pop, join и других у него нет. Но иногда так хочется, чтобы были…
Нет ничего проще! Давайте скопируем метод join из обычного массива:

function printArgs() {
  arguments.join = [].join; // одолжили метод (1)
  var argStr = arguments.join(':'); // (2)
  console.log( argStr ); // сработает и выведет 1:2:3
}

printArgs(1, 2, 3);

В строке (1) объявлен пустой массив [] и скопирован его метод [].join. 
Обратим внимание, мы не вызываем его, а просто копируем. Функция, в том числе встроенная – 
обычное значение, мы можем скопировать любое свойство любого объекта, и [].join здесь не исключение.
В строке (2) запустили join в контексте arguments, как будто он всегда там был.
`
console.log(str3 + '\n'+ gl_hr );

function printArgs() {
  arguments.join = [].join; // одолжили метод (1)
  var argStr = arguments.join(':'); // (2)
  console.log( argStr ); // сработает и выведет 1:2:3
}

printArgs(1, 2, 3);