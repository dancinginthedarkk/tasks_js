// Напишите аналог встроенного метода reduce для работы с массивами

function customReduce(array, callback, initialValue) {
    let i = 0;
    if (initialValue === undefined) {
        initialValue = array[0];
        i = 1;
    }
    let accumulator = initialValue;
    for (i; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

const numbers = [1, 2, 3, 4, 5];
const sum = customReduce(numbers, (accumulator, number) => accumulator + number);

console.log(sum);
