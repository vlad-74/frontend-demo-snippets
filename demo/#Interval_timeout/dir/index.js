let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

var myInterval = setInterval(function(){ myTimer() }, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    console.log(t);
}

function myStopInterval() {clearInterval(myInterval);}

function mysetTimeout() {
  myTimeout = setTimeout(function(){myStopInterval(); }, 6000);
}

function myStopTimeout() {clearTimeout(myTimeout);}

mysetTimeout(); //myStopTimeout();
