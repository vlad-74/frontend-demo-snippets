let hf = require('help-functions');
let cod = require('./cod');

var n = cod.timerCycles;
var i = 0;
var glArray = [];

while(i++, i <= n) {
	
	let start, stop;
	let j = 0;

	start = (new Date()).getTime();

	// ------------------------------------------------------------------------------
	cod.run();
	// ------------------------------------------------------------------------------
	
	stop = (new Date()).getTime();

	// console.log('Скорость кода (цикл из 1000 console.log(j)) = ', stop - start + ' миллисекунд');
	global['gl' + i] = stop - start;
	glArray.push(global['gl' + i] );
};

console.log('\nИТОГ :');
i = 0;
while(i++, i <= n){
	console.log('Скорость цикла' + i + ' была = ', global['gl' + i] + ' миллисекунд');
};

var summ = function(x,y) { return x+y; }; var mean = hf.arr.gl_reduce(glArray, summ)/glArray.length;
console.log('\nСедняя скорость кода из '+ n +' циклов = ', mean + ' миллисекунд');