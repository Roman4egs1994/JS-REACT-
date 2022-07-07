"use strict";
//                                                      УСЛОВИЯ
if (4 == 5 ) {
  console.log('ok!');
} else {
  console.log('Error');
}


const num = 50;

 if (num < 49) {
  console.log('Errors');
 } else if (num > 100) {
  console.log ('Много ');
 } else {
  console.log ('ok');
 }

 (num === 50) ? console.log('Оk!') : console.log('Error');  //Тернарный оператор 
 
 
 const num = 50;                                        // Конструкция SWITCH , строго ищет значение
 switch (num) {
  case 49:
    console.log('неверно');
    break;
  case 100:
    console.log('неверно');
    break;
  case 50:
    console.log('В точку!');
    break;
  default:
      console.log('Не в этот раз');
      break;
 }
