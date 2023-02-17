// Напишите аналог встроенного метода reduce для работы с массивами

function customReduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

const numbers = [1, 2, 3, 4, 5];
const sum = customReduce(numbers, (accumulator, number) => accumulator + number, 0);

console.log(sum);
