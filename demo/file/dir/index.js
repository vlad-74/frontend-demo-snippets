let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
// hf.fil.fileToLog('path')
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

// Читать файл (путь указывается по другому)
let rf = hf.fil.readFileSync(__dirname + '/addContent.json')
console.log('hf.fil.readFileSync - Контент из файла : ' + '\n' + rf + '\n');

// hf.fil.readFileAsync('../file/addContent.json')
// console.log('hf.fil.readFileAsync - Контент из файла :');

var linenumber = 0;
hf.fil.readFileLineByLine(__dirname + '/addContent.json', function(line) {
    console.log('hf.fil.readFileLineByLine ' + ++linenumber + " -- " + line);
});

//Удаляем файл
hf.fil.deleteFile(__dirname + '/new.json');

//Создание и запись в файл
hf.fil.createOrClearAndWrite (__dirname + '/new.json', '1 Этого файла не было;\n2 И этой записи тоже не было !!!');

//Перезапись в файле
hf.fil.createOrClearAndWrite (__dirname + '/assets.json', 'фигня номер 2');

//Добавить контент в конец файла
hf.fil.appendToFile (__dirname + '/addContent.json', '\nСтрока статическая (добавленная)');

//Копировать файл
hf.fil.copyFile (__dirname + '/addContent.json', __dirname + '/addContent2.json');

//КОПИРОВАНИЕ ФАЙЛОВ ИЗ ПАПКИ file В ПАПКУ file/copy, С ПРЕДВАРИТЕЛЬНЫМ УДАЛЕНИЕМ ПАПКИ file/copy
hf.fil.deleteDirectoryPromise(__dirname + '/copy');  //удаляю папку copy
setTimeout(function(){
	hf.fil.AsynchronousMkdir(__dirname + '/copy');//Создаю папку

	let tt = hf.fil.choiceAllFilesFromFolder(__dirname,'path');
	console.log('\nВСЕ ФАЙЛЫ В ТЕКУЩЕЙ ПАПКЕ (смотри путь в командной сроке ПЛЮС путь в переменной) :\n', tt);

	let filefrom = tt.map(item => item.replace(/\|/, '/'));
	filefrom = filefrom.map(item => item.replace(/\.\.\/\.\.\//, ''));

	console.log('\n', filefrom);

	let fileTo = tt.map(item => item.replace(/\|/, '/copy/'));
	fileTo = fileTo.map(item => item.replace(/\.\.\/\.\.\//, ''));

	console.log('\n',fileTo);

	for(var i=0; i < tt.length; i++){
		hf.fil.copyFile (filefrom[i], fileTo[i]);
	}
}, 1000);
