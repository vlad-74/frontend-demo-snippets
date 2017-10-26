let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

let str = `
Вызов функций:
• как функции,
• как методы,
• как конструкторы
• косвенно, с помощью их методов call() и apply().

Если вложенная функция вызывается как метод, значением this является объект,
относительно которого был сделан вызов. 
Если вложенная функция вызывается как функция, то значением this будет либо глобальный объект 
(в нестрогом режиме), либо undefined (в строгом режиме). 

Распространенная ошибка полагать, что во вложенной функции, которая вызывается как функция, 
можно использовать this для получения доступа к контексту внешней функции. Если во вложенной 
функции необходимо иметь доступ к значению this внешней функции, это значение следует сохранить 
в переменной, находящейся в области видимости внутренней функции. Для этой цели часто используется 
переменная с именем self

!!! Если вы пишете метод, не имеющий собственного возвращаемого значения, 
подумайте о возможности возвращать из него значение this. Тогда  появится возможность 
использовать стиль программирования, известный как составление цепочек из методов.
Например - shape.setX(100).setY(100).setSize(50).setOutline("red").setFill("blue").draw();

//Стрелочные функции :
var getTrack = (artist, track) => {
  return artist + ' ' + track;
}
var getTrack = (artist, track) => artist + ' ' + track;
var getTrack = () => 'track';

// Выводит имена и значения всех свойств объекта o. Возвращает undefined!!!
function printprops(o) {
 for(var p in o)
 console.log(p + ": " + o[p] + "\n");
}

// Рекурсивная функция (вызывающая сама себя), вычисляющая факториал
function factorial(x) {
 if (x <= 1) return 1;
 return x * factorial(x-1);
}

// Выражения определения функций могут иметь имена, что позволяет производить рекурсивные вызовы.
var f = function fact(x) { if (x <= 1) return 1; else return x*fact(x-1); };

// Функция присваивается переменной
var square = function(x) { return x*x; }

// Выражения определения функций могут также использоваться в качестве аргументов других выражений:
data.sort(function(a,b) { return a-b; });

// Вложенные функции
function hypotenuse(a, b) {
 function square(x) { return x*x; }
 return Math.sqrt(square(a) + square(b));
}

var calculator = { // Литерал объекта
 operand1: 1,
 operand2: 1,
 add: function() {
 // Обратите внимание, что для ссылки на этот объект используется ключевое слово this.
 this.result = this.operand1 + this.operand2;
 }
};
calculator.add(); // Вызвать метод, чтобы вычислить 1+1
calculator.result // => 2

o["m"](x,y); // Другой способ записать это выражение: o.m(x,y).
a[0](z) // Тоже вызов метода (предполагается, что a[0] - это функция).

customer.surname.toUpperCase(); // Вызвать метод объекта customer.surname
f().m(); // Вызвать метод m() возвращаемого значения функции f()

var o = { // Объект o.
	m: function() { // Метод m объекта.
		var self = this; // Сохранить значение this в переменной.
		console.log('his === o - ', this === o); // Выведет "true": this - это объект o.
		f(); // Вызвать вспомогательную ф-цию f().
		function f() { // Вложенная функция f
			console.log('this === o - ', this === o); // "false": this - глоб. об. или undefined
			console.log('self === o - ', self === o); // "true": self - знач. this внеш. ф-ции.
		}
		console.log(o);
	}
};
o.m(); // Вызвать метод m объекта o
`
console.log('\n ', str);

var o = { // Объект o.
	n: "свойство номер n",
	m: function() { // Метод m объекта.
		var self = this; // Сохранить значение this в переменной.
		console.log('this === o - ', this === o); // Выведет "true": this - это объект o.
		f(); // Вызвать вспомогательную ф-цию f().
		function f() { // Вложенная функция f
			console.log('this === o - ', this === o); // "false": this - глоб. об. или undefined
			console.log('self === o - ', self === o); // "true": self - знач. this внеш. ф-ции.
		}
		console.log('o == ', o);
	}
};
o.m(); // Вызвать метод m объекта o