"use strict"

// const arr = [1, 2, 3, 6, 8];
// arr.pop();//Удаление последнего элемента массива
// arr.push(10); //добавление элемента в массив
// console.log(arr);
// arr[99] = 0;    //показ ошибки или как не нужно делать
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// });


//перебор массива
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//перебор массива
// for (let value of  arr ) {
//     console.log(value);
// }


// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; ')); 




//Cортировка
const arr = [1, 2, 123, 3, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum (a, b) {
    return a-b;
}
