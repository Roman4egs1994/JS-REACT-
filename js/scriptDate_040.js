"use strict";

const now = new Date();
console.log(now);  // Вывод актуальной даты

const now1 = new Date('2023-08-09T06:27');
console.log(now1);  // Вывод даты , которую ты хочешь показать

const now2 = new Date(2020, 5, 1, 20);
console.log(now2);  // Вывод даты , которую ты хочешь показать числовыми значениями


const now3 = new Date(-999999);
console.log(now3);  // Все даты конвертируются из миллисекунд



const nowDate = new Date();
console.log(nowDate.getFullYear()); //Получить актуальный код 
console.log(nowDate.getMonth()); //Получить актуальный месяц
console.log(nowDate.getDate()); //Получить актуальный день
console.log(nowDate.getDay()); //Получить номер дня недели . Начинается с воскресенья 
console.log(nowDate.getHours()); // Получить часы
console.log(nowDate.getUTCHours()); // Получить часы по UTC
console.log(nowDate.getTimezoneOffset()); //Разница в минутах между часовым поясом и UTC
console.log(nowDate.getTime());// Количество милисекунд прошедших с 1 января 1970 года 


const nowDateTwo = new Date();
console.log(nowDateTwo.setHours(18, 40)); //Установка часов и минут
console.log(nowDateTwo);


let start = new Date();
for (let i = 0; i < 3000000; i++) {
    let some = i ** 3;
}
let end = new Date();
console.log(`Цикл отработал за ${end - start} миллисекунд`); //Просмотр производительности