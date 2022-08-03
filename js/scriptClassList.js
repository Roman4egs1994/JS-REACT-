"use strict";

const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('btn-block');

console.log(btns[0].classList.length); //Посмотреть количество классов
console.log(btns[0].classList.item(0)); // Получить класс под индексом

console.log(btns[0].classList.add('red')); //Получить классу крсаный цвет 
console.log(btns[0].classList.remove('blue')); //удалить класс
console.log(btns[0].classList.toggle()); //Если класс есть , то будет удален, если нет то добавлен


if (btns[1].classList.contains('red')) {  //Проверка наличия класса на 2 элементе 
    console.log('red');  //False and Tue
}


btns[0].addEventListener('click' , () => {  //Когда кликая на первую кнопку 
    if (!btns[1].classList.contains('red')) {       //Проверяем у второй кнопки наличие класса red и что её нет
        btns[1].classList.add('red'); //Если класса нет , то добавляем класс red
    } else {
        btns[1].classList.remove('red') //Иначе удалим
    }    
    });

    
    
    //ДЕЛЕГИРОВАНИЕ

    wrapper.addEventListener('click', (event) => {
        if (event.target && event.target.tagName == "BUTTON") {
            console.log('Hello');
        }
        
    });


    wrapper.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('blue')) {
            console.log('Hello');
        }
    });

    const btn = document.createElement('button');
    btn.classList.add ('red');
    wrapper.append(btn);