"use strict";

//JSON - формат передачи текстовых данных

const persone = {
    name: 'Alex',
    tel: '+744444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

console.log(JSON.stringify(persone)); //Метод отправки JSON
console.log(JSON.parse(JSON.stringify(persone))); //Получаем обьект обратно


//Создание ГЛУБОКОГО КЛОНА = копирование обьекта без изменений
const clone = JSON.parse(JSON.stringify(persone)); //JSON.stringify(persone))  = превращает существующий обьект в формат JSON //JSON.parse = распарсит обратно в обьект 
clone.parents.mom = 'Ann'; //клонирование mom =  Ann
console.log(persone);
console.log(clone);