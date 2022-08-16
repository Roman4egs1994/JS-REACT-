"use strict";

// Cоздание классов с помощью this  E6 
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {  //Наследование от Rectangle
    constructor (height, width, text, bgColor) {
        super(height, width); // Вызывает суперконструктор родителя ( собирает свойства наслудуемого класса). Всегда идет первой строчкой
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}
const div = new ColoredRectangleWithText(25, 10, 'Hello world', 'red');


const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(long.calcArea());
console.log(square.calcArea());