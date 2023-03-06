/*
Функция должна возвращать все переданные ей аргументы в виде массива.
Количество переданных аргументов заранее неизвестно.
*/

function argumentsFunc() {
    return Array.from(arguments);
}

console.log(argumentsFunc(1, 2, 3, 'ab', [7, 8, 9]));

