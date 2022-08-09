"use strict";

// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello');

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

    function myAnimation() {
        const eleme = document.querySelector('.box');
        let pos = 0;

        const id = setInterval(frame, 10);
        function frame() {
            if (pos == 300) {
                clearInterval(id);
            } else {
                pos++;
                eleme.style.top = pos + "px";
                eleme.style.left = pos + 'px';
            }
        }
    }

btn.addEventListener('click' , myAnimation );

// //clearInterval(timerId);

// function logger () {
//     if(i === 3 ) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// let id = setTimeout(function log (){
//     console.log('hello');
//     id = setTimeout(log, 2000 );
// }, 500); //Всегда будет ждать строго отведенное время    