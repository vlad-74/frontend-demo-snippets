let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------
let str = `
ПРОСТАЯ ОТЛАДКА
1. установить в коде debugge || node debug папка
2. repl - в этом режиме можно узнать что находится в переменных
3. run (r), cont (c), next (n), step (s), out (o), backtrace (bt), setBreakpoint (sb), clearBreakpoint (cb)
4. watch, unwatch, watchers, repl, exec, restart, kill, list, scripts, breakOnException, breakpoints, version
`;
console.log(str);