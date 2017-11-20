// БЛОК АВТОМАТИЧЕСКОГО АПРЕДЕЛЕНИЯ ЯЗЫКА
  var ACTIVE_PAGE = 'home';
  var nowEntry = new Date();
  var DEFAULT_LANGUAGE = 'ru';
  var CURRENT_LANGUAGE = navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || DEFAULT_LANGUAGE;

// localStorage.removeItem("Ключ")=======localStorage.clear()=======escapeHtml_decode (menuHeader)

  let getBrowser = function() {
      var b = "unknown";
      try {
          var e;
          var f = e.width;
      } catch (e) {
          var err = e.toString();
          if(err.search("not an object") !== -1){
              return "safari";
          } else if(err.search("Cannot read") !== -1){
              return "chrome";
          } else if(err.search("e is undefined") !== -1){
              return "firefox";
          } else if(err.search("Unable to get property 'width' of undefined or null reference") !== -1){
              if(!(false || !!document.documentMode) && !!window.StyleMedia){
                  return "edge";
              }
          } else if(err.search("cannot convert e into object") !== -1){
              return "opera";
          } else if(/*@cc_on!@*/false || !!document.documentMode){
              return "IE";
          } else {
              return undefined;
          }
      }
  };

  currBrowser = getBrowser(); //браузер клиента

  let supports_localStorage = function(){
    ttt = console.trace('fgfggfgf');
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
  };

  var supportsLocalStorage = supports_localStorage();
  // alert(supportsLocalStorage);

  var isIE = /*@cc_on!@*/false || !!document.documentMode;
  if(isIE == true){ supportsLocalStorage = false }

  if(supportsLocalStorage === true){
    try {
      var firstEntry = localStorage.getItem('firstEntry'); 

    }catch(e){
      // languageStorage='ru'; alert(supportsLocalStorage !== null);
    } finally {
      if(firstEntry==null){
        localStorage.setItem('firstEntry', 'true');

        if(CURRENT_LANGUAGE.indexOf("-") > 1){
          CURRENT_LANGUAGE = CURRENT_LANGUAGE.substring(0,CURRENT_LANGUAGE.indexOf("-"));
        }
        localStorage.setItem('languageStorage',CURRENT_LANGUAGE);
      };
      localStorage.setItem('lastLoginTimeStorage',nowEntry);
    }  
  }

if(supportsLocalStorage) {
    var languageStorage = null; 
    languageStorage = localStorage.getItem('languageStorage'); 
}else{languageStorage='ru'}

alert(currBrowser + " || supportsLocalStorage = " + supportsLocalStorage + " || languageStorage = " + languageStorage);

console.error('Имя введено не было') // вид как у шибки

console.time('muFunc');
//...
console.timeEnd('muFunc'); // => muFunc: 0ms

console.log('Фамилия: %s %s', 'family', 'imya', ttt);

console.trace(); // => !!! ЕСЛИ ИСПОЛЬЗОВАТЬ В ФУНКЦИИ УКАЖЕТ ИМЯ ВЫЗЫВАЕМОЙ ФУНКЦИИ

console.profile('myFunc'); // => Profile 'myFunc' started.
//...
console.profileEnd('myFunc'); // => Profile 'myFunc' finished.

console.dir();