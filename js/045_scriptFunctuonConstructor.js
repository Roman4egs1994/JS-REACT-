"use strict";


// Функция конструктор , с помощью которой мы можем созждать новых пользователей
function User(name, id) {
    this.name = name; // У каждого пользователя будет свое уникальное имя
    this.id = id; // У каждого пользователя будет свой уникальный индификатор
    this.human = true;
    this.hello = function() { //Создание метода в прототипе         
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`); //создание прототипа , которого можем позже вызывать
};

const ivan = new User('Ivan', 28);  //Создание нового пользователя
const alex = new User('Alex', 34);  //Создание нового пользователя

ivan.exit(); //Вызов метода exit

ivan.hello(); //Вызов метода hello  
alex.hello(); //Вызов метода hello  


console.log(ivan);  //Получился обьект
console.log(alex);  //Получился обьект


//Прототипы нужны для создания новых пользователей сайта , роликов на ютуб , везде , где есть шаблонизация 