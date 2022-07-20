"use strict";


// В строку 
// 1)
console.log(typeof(String(null)));
console.log(typeof(String(5)));
// 2)

console.log(typeof(5 + '')); // При сложении со строкой , получается строка

//Пример

const num = 5;
console.log("htttps:/vk.com/catalog/" + num);
const fontSize = 26  + 'px';


//В число 
//1
console.log(typeof(Number('4'))); 
//2
console.log(typeof(+'4')); 
//3
console.log(typeof(parseInt("15px", 10)));
//4
let answ = +prompt ("hello", "");


//Буленовое значение
//0, '', null, undefined, Nan;  //Не правда(false)
//1) Логическоен преобразование
let switcher = null; 
if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

//2
console.log(typeof(Boolean('4')));

//3
console.log(typeof(!! "4444"));