"use strict";

let str ="some";
let strObj = new String(str);
// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);



//Прототипирование

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("hello");
    }
};

const jonh = Object.create(soldier); //Создание  нового прототипа


// const jonh = {
//     health: 100
// };
// // jonh.__proto__ = soldier; //Устаревший формат.

// Object.setPrototypeOf(jonh, soldier); 

// console.log(jonh.armor);
jonh.sayHello();


