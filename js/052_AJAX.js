"use strict";

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/052_current.json'); //Собирает настройки , что бы сделать запрос
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send(); //Вызов запроса
    
    request.addEventListener('readystatechange', () => { //Событие, которое отслежиевает готовность нашего запроса  в текущий момент
        if (request.reayState === 4 && request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });

    //status // Cтатус (200,404);
    //statusText // Текстовое описание ответа от сервера
    //response //Ответ от сервера
    //readyState //Текущее состояние от запроса
  
});

