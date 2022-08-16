"use strict";

// Контекст вызова фунеции This

//Функция может вызываться 4 способами 


//1) Обычная функция: this = window, но если будет стоять "use strict" = undefined
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }

    console.log(sum());
}
showThis(4, 5);


//2 Обьект. Если мы используем метод внутри обьекта, то контекст у методов обьекта - сам обьект (возвращает весь этот обьект)
const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
};
obj.sum();


//3 Функции конструкторы. this в конструкторах и классах = новый экземпляр объекта!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function User(name, id) {
    this.name = name; // У каждого пользователя будет свое уникальное имя
    this.id = id; // У каждого пользователя будет свой уникальный индификатор
    this.human = true;
    this.hello = function() { //Создание метода в прототипе. Ссылается на обьект, который будет создан ниже        
        console.log(`Hello ${this.name}`);
    };
}    
let ivan = new User('Ivan', 23); //Создание обьекта


//4  Ручная привязка this: call, apply, bind 
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith'); //установка контекста методом call
sayName.apply(user, ['Smith']);//установка контекста методом apply 


// Работа BIND 
function count(num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(31));
console.log(double(311));


//Пример
const btn = document.querySelector('button');
btn.addEventListener('click', function() { //Когда в обработчике событий написанный в класическом режиме. THIS будет сам элемент на котором произошло событие
    console.log(this);
    this.style.backgroundColor = 'Red';
});


//Стрелочная функция (нет своего контекста вызова . Будет брать у своего родителя)
const objTwo = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };

        say();
    }
};

objTwo.sayNumber();


//Пример
const double = (a) => a * 2; // Стрелочная функция в одну строку
console.log(double(2));