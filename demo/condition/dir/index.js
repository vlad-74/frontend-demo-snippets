let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

try { 
	let x = '5';
    if(x == "") throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10) throw "is too high";
    if(x < 5) throw "is too low";
    console.log('try_ catch_finally : ПРОВРКА - код дошел до этого места');
}
catch(err) {
    console.log('try_ catch_finally :  Результат : Ошибка - ', err ); // СЮДА ПРОБРАСЫВАЕТСЯ  ОШИБКА throw ИЗ try
}
finally {
    console.log('try_ catch_finally :  Результат :  Эта часть кода реализуется всегда ');
};

var text ='';
switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "switch : 4 или 5";
        break; 
    case 0:
    case 6:
        text = "switch : 0 или 6";
        break;
    default: 
        text = "switch : default";
};
console.log('switch :  new Date().getDay() = ', new Date().getDay() );
console.log('switch :  Результат - ', text );

let time = 5; 
if (time < 10) {
	console.log('if_else if_else : IF')
} else if (time < 20) {
	console.log('if_else if_else : ELSE IF')
} else {
	console.log('if_else if_else : ELSE')
};


console.log('\n\n=====================ОКОНЧАНИЕ БЛОКА КОНСТРУКЦИИ=====================') ;
