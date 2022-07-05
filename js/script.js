"use strict";

//                                                                                  Пример объекта

//const obj = {
  //  name: "John",
    //age: 25,
    //isMarried: false
//};

//console.log(obj.name);  1 cпособ записи обьекта                             
//console.log(obj["name"]);  // 2 способ записи обьекта

//                                                                                  Пример Массива 
//let arr = ['plum.png', 'orange.jpg' , 6 , 'apple.bmp' , {} , []];
//console.log (arr[1]);

//                                                                                  Вопрос пользователю
//const result = confirm("Ты здесь?");
//console.log(result);


 //                                                                                 Вопрос с ответом        
//const answer = prompt("Вам есть 18?" , "18");
//console.log(typeof(answer));

//                                                                                  Создание пустого массива и добавление в него ответов на вопросы
//const answers = [];
// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия ?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);

//                                                                                 ИНТЕРПОЛЯЦИЯ 
//const category = 'toys';
//console.log(`http://someurl.com/${category}`);


//                                                                                 Операторы

//console.log(4 + +"5");  Унарный = (+"5")

let incr = 10,
    decr = 10;  
console.log(incr++);    //Оператор инкримента (увелечение на 1 , ПОСТФИКСНЫЙ = сначало срабатывает incr )
console.log(decr++);    //Оператор декремента (уменьшение на 1 , ПОСТФИКСНЫЙ = сначало срабатывает decr)
console.log(++incr);    //Оператор инкримента (увелечение на 1 , ПРЕФИКСНЫЙ = сначало срабатывает сложение)
console.log(--decr);    //Оператор декремента (уменьшение на 1 , ПРЕФИКСНЫЙ = сначало срабатывает вычитание )

console.log(5%2); //ОСТАТОК (1)

// Оператор &&(И)
const isChecked = true; 
const isClose = true;
console.log(isChecked && isClose);

// Оператор || (ИЛИ)
const isChecked = true; 
const isClose = true;
console.log(isChecked || isClose);

console.log(2+2*2 != '6'); // Строгое равенство === или !== по типу , Не строгое == или != 