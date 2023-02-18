// Напишите аналог встроенного метода slice для работы с массивами

function customSlice(array, start = 0, end = array.length) {
    if (start < 0) {
        start += array.length;
    }

    if (end < 0) {
        end += array.length;
    }

    const newArray = [];
    for (let i = start; i < end; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

const numbers = [1, 2, 3, 4, 5];

console.log(customSlice(numbers, -4, -2));

