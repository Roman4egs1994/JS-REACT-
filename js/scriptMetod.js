"use strict";

//Методы

const str = "tEst";
const arr = [1, 2, 4];
console.log(str.length); // Подстчет кол-ва символов
console.log(arr.length); // Подсчет кол-ва символов в массиве
console.log(str[2]);     // Выбор второго символа из массива
console.log(str.toUpperCase());  //Перевод в верхний регистр
console.log(str.toLowerCase());


const fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); // C какой позиции начинается данный текст (Поиск подстроки)


const logg = "Hello world";
console.log(logg.slice(6, 11)); //Вырезает выражение с 6 по 11 символ
console.log(logg.slice(6)); //Строка вырезается до конца с 6 символа
console.log(logg.slice(-5, -2)); //Использование метода с конца выражения
console.log(logg.substring(6, 11)); //Вырезать кусок
console.log(logg.substr(6, 5)); // с какого символа начать и сколько символов вырезать


const num = 12.2;
console.log(Math.round(num)); // Округление


const test = "12.2px";
console.log(parseInt(test)); //Превращение в числовой тип данных
console.log(parseFloat(test)); //Превращение в числовой тип данных
