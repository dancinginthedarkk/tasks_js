// Напишите аналог встроенного метода map для работы с массивами

function customMap(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i, array));
    }
    return newArray;
}

const numbers = [1, 2, 3, 4, 5];
const doubleNum = customMap(numbers, number => number * 2);

console.log(doubleNum);
