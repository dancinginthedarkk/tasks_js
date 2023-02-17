// Напишите аналог встроенного метода slice для работы с массивами

function customSlice(array, start, end) {
    const newArray = [];
    for (let i = start; i < end && i < array.length; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

const numbers = [1, 2, 3, 4, 5];

console.log(customSlice(numbers, 1, 4));
