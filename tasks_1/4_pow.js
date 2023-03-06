/*
Напишите функцию pow(x,n), которая возводит x в степень n и
возвращает результат.
*/

function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

console.log(pow(2, 2));
console.log(pow(3, 3));
