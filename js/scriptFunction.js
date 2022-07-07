"use strict";
//Функции

let num = 20; // Глобальная переменная

function showFirstMessage(text) {
    console.log (text);
   let num = 10; // Локальная переменная (Существует внутри функции)
   console.log(num);  
}


showFirstMessage("hello World");
console.log(num);


//function calc (a, b ) {
//    return (a + b);
//}
//console.log(calc(4,3));
//console.log(calc(6,3));
//console.log(calc(9,3));
//console.log(calc(131,3));



function ret () {
    let num = 40;
    return num ;
}
const anotherNum = ret();
console.log(anotherNum);



//Используется только тогда , когда доходит поток кода, можно вызвать только после объявления
function logger() {
    console.log("Hello!");
}
logger(); 


//Стрелочная функция
const calc = (a, b) => { 
    return a + b 
};
console.log(calc(5 , 5));