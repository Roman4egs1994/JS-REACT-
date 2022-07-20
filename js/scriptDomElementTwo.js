'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');
      
box.style.backgroundColor = 'blue';
box.style.width = '500px';
box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});


//const text = document.createTextNode('Гыыыыыгыыы Гыыы');

const div = document.createElement('div');
div.classList.add('black');
wrapper.append(div);   // Появление элемента вначале div wrapper

// document.querySelector('.wrapper').append(div);



// wrapper.appendChild(div); //старый метод



//hearts[0].before(div); 
//hearts[0].after(div);
// wrapper.insertBefore(div, hearts[2]);

// circles[0].remove(); //удаление элемента
// wrapper.removeChild(hearts[1]); //Старый способ удаление элемента


// hearts[0].replaceWith(circles[0]); //Заменить элемент с одного на другой
//wrapper.replaceChild(circles[0], hearts[0]); //Старый способ

// добавить текст в элемент
div.innerHTML = "<h1>Hello World</h1>";
// div.textContent = "Hello";