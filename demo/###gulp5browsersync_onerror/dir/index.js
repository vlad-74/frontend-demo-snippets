let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

var fs = require('fs');
var stream = new fs.ReadStream(__dirname + '\\gulpfile.js', {encoding: 'utf-8'});
console.log('\n' + "START" + '\n');
stream.on('readable', function() {
  var data = stream.read();
  if(data != null){console.log('ФАЙЛ ' + __dirname + '/gulpfile.js : ' + '\n' + gl_hr + '\n' + data.toString());}
});

stream.on('end', function() {
  console.log('\n' + "THE END" + '\n' + gl_hr + '\nРЕЗУЛЬТАТ ВЫПОЛНЕНИЯ gulpfile.js : node '+ __dirname.split('demo\\').pop()
  + '\nПРИ ИЗМЕНЕНИЕ ВО frontend ПРОИСХОДИТ ИНКРЕМЕНТАЛЬНАЯ ПЕРЕСБОРКА В public'
  + '\nПРИ ИЗМЕНЕНИЕ В public ПЕРЕЗАГРУЗКА БРАУЗЕРА' 
  + '\nПРИ ДЕЙСТВИЕ НА ОДНОМ БРАУЗЕРЕ (chrome), АНАЛОГИЧНЫЕ ДЕЙСТВИЯ ОТРАЖАЮТСЯ В ДРУГОМ БРАУЗЕРЕ (opera)' 
  );
});
//-------------------------------------------------------------------------------------
let str = `
const browserSync = require('browser-sync').create();

gulp.task('serve', function() {
  browserSync.init({
    server: 'public' // ОТДАЕТ ФАЙЛЫ ИЗ ДАННОЙ ДИРЕКТОРИИ - public
  });
  
  // ПРИ ИЗМЕНЕНИЯХ - ПЕРЕЗАГРУЗКА БРАУЗЕРА
  browserSync.watch('public/**/*.*').on('change', browserSync.reload); 
});

gulp.task('dev',
    gulp.series('build', gulp.parallel('watch', 'serve'))
);
---------------------------------------------------------------------------------------

ОТЛОВ ОШИБОК
gulp.task('styles', function() {
  return combiner(
      gulp.src('frontend/styles/main.styl'),
      gulpIf(isDevelopment, sourcemaps.init()),
      gulpIf(isDevelopment, stylus(), stylus({compress: true})),
      gulpIf(isDevelopment, sourcemaps.write()),
      gulp.dest('public')
  ).on('error', notify.onError(function(err){ // ВЫВОДИТ ОШИБКИ gulp.task 'styles'
    return{
      title: "gulp.task styles",
      message: err.message
    }
  }));
});
`
console.log(str);

var child_process = require('child_process');

child_process.exec("cd " + __dirname.split('demo\\').pop() + "&gulp dev", function(error, stdout, stderr) {
    console.log(stdout);
});

var open = require("open");
setTimeout(function(){ 
	open("https://browsersync.io/docs/options"); 
  open("https://github.com/mikaelbr/gulp-notify");
  open("https://github.com/substack/stream-combiner2"); 
}, 5000);
