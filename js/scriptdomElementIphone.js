'use strict';


window.addEventListener('DOMcontentLoaded', () =>{
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('start');
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('start');
    });
});