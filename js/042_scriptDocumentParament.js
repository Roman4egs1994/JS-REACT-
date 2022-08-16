"use strict";

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

const width = box.clientWidth;
const height = box.clientHeight;


const Width = box.offsetHeight;
const Height = box.offsetWidth;

console.log(width, height);
console.log(Width, Height);




const WIdth = box.scrollHeight;
const HEight = box.scrollWidth;

console.log(WIdth, HEight);


btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log (box.scrollTop);
});

console.log(box.getBoundingClientRect().top);




const style = window.getComputedStyle(box);
console.log(style.display);


console.log(document.documentElement.scrollTop);