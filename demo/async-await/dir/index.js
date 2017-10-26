let hf = require('help-functions');
console.log('\n' + gl_hr + '\n' +'РЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('snippetjs-demo') + 20), '\n' + gl_hr);
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------

let str =`
!!! async определяет, что функция является асинхронной и позволяет использовать внутри нее оператор await,
 который приостанавливает выполнение функции, на время получения результата. 
 Конструкцию await можно использовать не везде, только внутри асинхронных функций
`
console.log(str + '\n' + gl_hr);

let getData = () => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('1. Promise ФУНКЦИЯ getData() ОТРАБОТАЛА УСПЕШНО !!!');
        }, 500);
    });
};

(async () => {
    let main = async ()=> {
        console.log(await getData());
    };

    await main(); //ЖДЕТ ВЫПОЛНЕНИЕ ФУНКЦИИ main И ТОЛЬКО ЗАТЕМ СВОЙ console.log
    console.log('2. console.log ПОСЛЕ await main(console.log(await getData()))');
})();


const fetchProducts = () => Promise.resolve({data: [1,2,3]})
const fetchAdditional = (products) => Promise.resolve({data: [2,3,4]})

const getProducts = async () => {
  const products = await fetchProducts()

  if (!products.data.length) {
    return products.data
  }

  return await fetchAdditional(products.data)
}

getProducts().then(result => {
  console.log('result', result)
})