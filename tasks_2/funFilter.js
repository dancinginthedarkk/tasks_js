/*
Функция принимает массив и фильтрующую функцию и должна вернуть true или false
Функция должна вернуть true только если fn вернула true для всех элементов массива
Необходимо выбрасывать исключение в случаях:
- array не массив или пустой массив (с текстом "empty array")
- fn не является функцией (с текстом "fn is not a function")
Запрещено использовать встроенные методы для работы с массивами
 */

function funFilter(arr, fn) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("empty array");
    }

    if (typeof fn !== "function") {
        throw new Error("fn is not a function");
    }

    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i])) {
            return false;
        }
    }

    return true;
}

let arr = [1, 2, 3, 4, 5];
let filterFn = function (n) {
    return n > 0;
};
console.log(funFilter(arr, filterFn));

let arr2 = [];
console.log(funFilter(arr2, filterFn));

let arr3 = [1, 2, 3, 4, 5];
let filterFn3 = "blablabla";

console.log(funFilter(arr3, filterFn3));
