"use strict";

const log = function(a, b, ...rest) { // операторы после ... могут выполниться , а могут и нет
    console.log(a, b, rest);
};
log('basic', 'rest', 'operator', 'usage'); // basic rest [ 'operator', 'usage' ]


function calcOrDouble(number, basis = 2) {
    // basis = basis || 2; //если basis не был передан, то умножаем на 2 (СТАРЫЙ МЕТОД)
    console.log (number * basis);
}
calcOrDouble(3, 5);

