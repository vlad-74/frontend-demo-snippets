let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

let str = `
function callbackf(status, val){
 console.log('!!!Status__' + status.name + '__value = ' + val + ' (time: ' +  new Date(status.time).toLocaleString() + ') | oldvalue = ' + status.oldvalue + ' (oldtime: ' + new Date(status.oldtime).toLocaleString() + ')');
}

//!! Вторрой параметр - callback - ОПЦИОНАЛЬНО
// hf.sts.create_status('page', callbackf); 
// hf.sts.create_status('body'); 

let statuses = ['body','page', 'lng', 'flg'];
statuses.map(item => hf.sts.create_status(item, callbackf)); //ЦИКЛОМ СОЗДАЕМ СТАТУСЫ С ИМЕНАМИ ИЗ МАССИВА
statuses.map(item => global[item].currentStatus = "open"); //В СТАТУСАХ ЦИКЛОМ ИЗМЕНЯЕМ ИХ currentStatus
setTimeout(function(){ global[statuses[1]].currentStatus ="изменение"; }, 2000);

// setTimeout(function(){ page.currentStatus ="закрытие"; }, 4000);
`
console.log(str);

function callbackf(status, val){
	console.log(status.name + ': !eventCurrentStatus = ' + val  + ' (time: ' +  new Date(status.time).toLocaleString() + ') | oldvalue = ' + status.oldvalue + ' (oldtime: ' + new Date(status.oldtime).toLocaleString() + ')');
}

let statuses = ['status_body','status_current_page', 'status_current_lng', 'status_current_flg'];
statuses.map(item => hf.sts.create_status(item, callbackf)); //ЦИКЛОМ СОЗДАЕМ СТАТУСЫ С ИМЕНАМИ ИЗ МАССИВА
statuses.map(item => global[item].currentStatus = "open"); //В СТАТУСАХ ЦИКЛОМ ИЗМЕНЯЕМ ИХ currentStatus

setTimeout(function(){ global[statuses[1]].currentStatus ="изменение"; }, 2000);

console.log(gl_hr);